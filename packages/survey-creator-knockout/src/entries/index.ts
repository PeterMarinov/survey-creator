export let Version: string;
Version = `${process.env.VERSION}`;

export * from "../survey-creator";
export * from "../tabs/designer";
export * from "../tabs/embed";
export * from "../tabs/json-editor-ace";
export * from "../tabs/json-editor-textarea";
export * from "../tabs/logic";
export * from "../tabs/translation";

export * from "../page";
export * from "../row";
export * from "../adorners/question";
export * from "../adorners/question-dropdown";
export * from "../question-link-value";
export * from "../question-embedded-survey";
export * from "../adorners/question-image";
export * from "../adorners/question-rating";
export * from "../question-widget";
export * from "../adorners/item-value";
export * from "../adorners/image-item-value";
export * from "../panel";
export * from "../adorners/matrix-cell";
export * from "../question-editor-content";
export * from "../adorners/cell-question";
export * from "../adorners/cell-question-dropdown";
export * from "../action-button";

export * from "../page-navigator/page-navigator";
export * from "../page-navigator/page-navigator-item";
export * from "../property-panel/object-selector";
export * from "../property-panel/property-grid";
export * from "../side-bar/side-bar";
export * from "../side-bar/side-bar-tab";
export * from "../results";
export * from "../simulator";
export * from "../svg-bundle";
export * from "../survey-renderers/dropdown";
export * from "../tabs/test";
export * from "../tabbed-menu/tabbed-menu";
export * from "../tabbed-menu/tabbed-menu-item";
export * from "../toolbox/toolbox";
export * from "../toolbox/adaptive-toolbox";
export * from "../toolbox/toolbox-item";
export * from "../toolbox/toolbox-tool";
export * from "../header/logo-image";
export * from "../notifier";
export * from "../tabs/translation-line-skeleton";
export * from "../utils/survey-widget";
export * from "../utils/utils";

export * from "../creator";

import * as core from "survey-creator-core";
export const localization = core.editorLocalization;
export const settings = core.settings;
export const svgBundle = core.svgBundle;
export const SurveyLogicUI = core.SurveyLogicUI;
export const SurveyLogic = core.SurveyLogic;
export const SurveyQuestionEditorDefinition = core.SurveyQuestionEditorDefinition;
// export const ISurveyCreatorOptions = core.ISurveyCreatorOptions;
// export const IPropertyGridEditor = core.IPropertyGridEditor;
export const ToolboxToolViewModel = core.ToolboxToolViewModel;
export const PropertyGridEditorCollection = core.PropertyGridEditorCollection;
export const StylesManager = core.StylesManager;