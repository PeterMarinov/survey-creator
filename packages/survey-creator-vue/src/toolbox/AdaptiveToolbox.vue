<template>
  <div :class="toolbox.classNames" ref="root" :style="toolbox.getRootStyle()">
    <div @focusout="(e) => toolbox.focusOut(e)" class="svc-toolbox__panel">
      <div v-if="toolbox.showSearch" class="svc-toolbox__search-container">
        <template v-if="toolbox.isCompactRendered">
          <SvComponent
            :is="'svc-toolbox-tool'"
            :creator="model"
            key="searchitem"
            :item="toolbox.searchItem"
            :parentModel="toolbox"
            :isCompact="toolbox.isCompactRendered"
          ></SvComponent>
        </template>
        <SvComponent
          :is="'svc-search'"
          :model="toolbox.searchManager"
        ></SvComponent>
        <div
          class="svc-toolbox__category-separator svc-toolbox__category-separator--search"
        ></div>
      </div>
      <div v-if="toolbox.showPlaceholder" class="svc-toolbox__placeholder">
        {{ toolbox.toolboxNoResultsFound }}
      </div>
      <SvComponent :is="'sv-scroll'">
        <template v-if="!toolbox.showInSingleCategory">
          <SvComponent
            :is="'svc-toolbox-category'"
            v-for="(category, index) in toolbox.categories"
            :key="index"
            :category="category"
            :toolbox="toolbox"
          ></SvComponent>
        </template>
        <template v-if="toolbox.showInSingleCategory">
          <div class="svc-toolbox__category">
            <template v-for="item in renderedActions" :key="item.renderedId">
              <SvComponent
                :is="'svc-toolbox-tool'"
                :creator="model"
                :item="item"
                :parentModel="toolbox"
                :isCompact="toolbox.isCompactRendered"
              ></SvComponent>
            </template>
          </div>
        </template>
      </SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { SurveyCreatorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed, onMounted, onUnmounted, onUpdated, ref } from "vue";
const props = defineProps<{ model: SurveyCreatorModel }>();
const toolbox = computed(() => {
  return props.model.toolbox;
});

const root = ref<HTMLDivElement>();

useBase(() => toolbox.value);
onUpdated(() => {
  toolbox.value.afterRender(root.value as HTMLDivElement);
})
onMounted(() => {
  toolbox.value.afterRender(root.value as HTMLDivElement);
});
onUnmounted(() => {
  toolbox.value.beforeDestroy();
});
const renderedActions = computed(() => toolbox.value.renderedActions);
</script>
