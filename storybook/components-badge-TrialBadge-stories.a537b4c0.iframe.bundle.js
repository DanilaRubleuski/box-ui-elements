/*! For license information please see components-badge-TrialBadge-stories.a537b4c0.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[99079],{"./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/badge/Badge.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_storybook_addon_styling_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".badge{display:inline-block;padding:2px 4px 3px;color:#222;font-weight:bold;font-size:10px;line-height:12px;text-align:center;text-decoration:none;background:#e8e8e8;border-radius:4px}.badge-info{color:#fff;background:#7fb0ea}.badge-warning{color:#fff;background:#f5b31b}.badge-highlight{color:#fff;background:#2486fc}.badge-alert,.badge-error{color:#fff;background:#ed3757}.badge-success{color:#fff;background:#26c281}","",{version:3,sources:["webpack://./src/components/badge/Badge.scss","webpack://./src/styles/constants/_colors.scss","webpack://./src/styles/constants/_layout.scss"],names:[],mappings:"AAMA,OACI,oBAAA,CACA,mBAAA,CACA,UCUO,CDTP,gBAAA,CACA,cAAA,CACA,gBAAA,CACA,iBAAA,CACA,oBAAA,CACA,kBCWU,CDVV,iBEPqB,CFUzB,YACI,UCjBI,CDkBJ,kBCXc,CDclB,eACI,UCtBI,CDuBJ,kBCqBa,CDlBjB,iBACI,UC3BI,CD4BJ,kBCQa,CDLjB,0BAEI,UCjCI,CDkCJ,kBC0DiB,CDvDrB,eACI,UCtCI,CDuCJ,kBCqBc",sourcesContent:["@import '../../styles/variables';\n\n/**************************************\n * Badges\n **************************************/\n\n.badge {\n    display: inline-block;\n    padding: 2px 4px 3px;\n    color: $bdl-gray;\n    font-weight: bold;\n    font-size: 10px;\n    line-height: 12px;\n    text-align: center;\n    text-decoration: none;\n    background: $bdl-gray-10;\n    border-radius: $bdl-border-radius-size;\n}\n\n.badge-info {\n    color: $white;\n    background: $bdl-box-blue-50;\n}\n\n.badge-warning {\n    color: $white;\n    background: $bdl-yellorange;\n}\n\n.badge-highlight {\n    color: $white;\n    background: $bdl-light-blue;\n}\n\n.badge-alert,\n.badge-error {\n    color: $white;\n    background: $bdl-watermelon-red;\n}\n\n.badge-success {\n    color: $white;\n    background: $bdl-green-light;\n}\n","// Box Design Language Colors\n// confirm with design before extending\n\n$white: #fff !default;\n$black: #000 !default;\n$countBadgeBackground: #e9163c !default;\n\n// Box/Primary Blues\n$bdl-box-blue: #0061d5 !default;\n$bdl-box-blue-80: #3381dd !default;\n$bdl-box-blue-50: #7fb0ea !default;\n$bdl-box-blue-40: #99c0ee !default;\n$bdl-box-blue-30: #b2cff2 !default;\n$bdl-box-blue-20: #ccdff7 !default;\n$bdl-box-blue-10: #e5effa !default;\n$bdl-box-blue-05: #f2f7fd !default;\n$bdl-box-blue-02: #fafcfe !default;\n\n// Box/Primary Grays\n$bdl-gray: #222 !default;\n$bdl-gray-80: #4e4e4e !default;\n$bdl-gray-65: #6f6f6f !default;\n$bdl-gray-50: #909090 !default;\n$bdl-gray-40: #a7a7a7 !default;\n$bdl-gray-30: #bcbcbc !default;\n$bdl-gray-20: #d3d3d3 !default;\n$bdl-gray-10: #e8e8e8 !default;\n$bdl-gray-05: #f4f4f4 !default;\n$bdl-gray-02: #fbfbfb !default;\n\n// Dark Blues\n$bdl-dark-blue: #003c84 !default;\n$bdl-dark-blue-50: #7f9dc1 !default;\n$bdl-dark-blue-20: #ccd8e6 !default;\n$bdl-dark-blue-10: #e5ebf2 !default;\n$bdl-dark-blue-05: #f2f5f9 !default;\n$bdl-dark-blue-02: #fafbfd !default;\n\n// Light Blues\n$bdl-light-blue: #2486fc !default;\n$bdl-light-blue-50: #91c2fd !default;\n$bdl-light-blue-20: #d3e7fe !default;\n$bdl-light-blue-10: #e9f2fe !default;\n$bdl-light-blue-05: #f4f9ff !default;\n$bdl-light-blue-02: #fbfdff !default;\n\n// Yelloranges\n$bdl-yellorange: #f5b31b !default;\n$bdl-yellorange-50: #fad98d !default;\n$bdl-yellorange-20: #fdf0d1 !default;\n$bdl-yellorange-10: #fef7e8 !default;\n$bdl-yellorange-05: #fefbf3 !default;\n$bdl-yellorange-02: #fffefb !default;\n\n// Yellows\n$bdl-yellow: #ffd700 !default;\n$bdl-yellow-50: #ffeb7f !default;\n$bdl-yellow-20: #fff7cc !default;\n$bdl-yellow-10: #fffbe5 !default;\n$bdl-yellow-05: #fffdf2 !default;\n$bdl-yellow-02: #fffefa !default;\n\n// Green Lights\n$bdl-green-light: #26c281 !default;\n$bdl-green-light-50: #92e0c0 !default;\n$bdl-green-light-20: #d4f3e6 !default;\n$bdl-green-light-10: #e9f8f2 !default;\n$bdl-green-light-05: #f4fcf8 !default;\n$bdl-green-light-02: #fbfefd !default;\n\n// Grimaces\n$bdl-grimace: #4826c2 !default;\n$bdl-grimace-50: #a392e0 !default;\n$bdl-grimace-20: #dad4f3 !default;\n$bdl-grimace-10: #ece9f8 !default;\n$bdl-grimace-05: #f6f4fc !default;\n$bdl-grimace-02: #fbfbfe !default;\n\n// Orange\n$bdl-orange: #f1811a !default;\n$bdl-orange-50: #f8c08c !default;\n$bdl-orange-20: #fce6d1 !default;\n$bdl-orange-10: #fdf2e8 !default;\n$bdl-orange-05: #fef8f3 !default;\n$bdl-orange-02: #fffdfb !default;\n\n// Purple Rains\n$bdl-purple-rain: #9f3fed !default;\n$bdl-purple-rain-50: #cf9ff6 !default;\n$bdl-purple-rain-20: #ecd9fb !default;\n$bdl-purple-rain-10: #f5ebfd !default;\n$bdl-purple-rain-05: #faf5fe !default;\n$bdl-purple-rain-02: #fdfbff !default;\n\n// Watermelon Reds\n$bdl-watermelon-red: #ed3757 !default;\n$bdl-watermelon-red-50: #f69bab !default;\n$bdl-watermelon-red-20: #fbd7dd !default;\n$bdl-watermelon-red-10: #fdebee !default;\n$bdl-watermelon-red-05: #fef5f6 !default;\n$bdl-watermelon-red-02: #fffbfc !default;\n","// Z-Indexes\n$modal-dialog-z-index: 160 !default;\n$menu-z-index: 170 !default;\n$submenu-z-index: 171 !default;\n$overlay-z-index: 190 !default;\n$tooltip-z-index: 190 !default;\n$notifications-wrapper-z-index: 200 !default;\n\n// Borders\n$bdl-border-radius-size: 4px;\n$bdl-border-radius-size-med: $bdl-border-radius-size * 1.5;\n$bdl-border-radius-size-large: $bdl-border-radius-size * 2;\n$bdl-border-radius-size-xlarge: $bdl-border-radius-size * 3;\n\n// Drop shadows\n$bdl-header-box-shadow: 0 0 10px 0 rgba(0, 0, 0, .05);\n\n// Spacing\n$bdl-grid-unit: 4px !default;\n$bdl-grid-unit-px: 4 !default; // unitless grid unit (defined in pixels for manual multiplication in JS)\n\n// Headers\n$bdl-header-height: 64px;\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./src/components/badge/TrialBadge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,trialBadge:()=>trialBadge});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_TrialBadge__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/badge/TrialBadge.tsx");const trialBadge=()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_TrialBadge__WEBPACK_IMPORTED_MODULE_1__.A,null),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Badges/TrialBadge",component:_TrialBadge__WEBPACK_IMPORTED_MODULE_1__.A},__namedExportsOrder=["trialBadge"];trialBadge.parameters={...trialBadge.parameters,docs:{...trialBadge.parameters?.docs,source:{originalSource:"() => <TrialBadge />",...trialBadge.parameters?.docs?.source}}}},"./src/components/badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>components_badge_Badge});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),types=__webpack_require__("./src/components/badge/types.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Badge=__webpack_require__("./node_modules/@storybook/addon-styling/node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[13].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/@storybook/addon-styling/node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[13].use[3]!./src/components/badge/Badge.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Badge.A,options);Badge.A&&Badge.A.locals&&Badge.A.locals;const _excluded=["children","className","type"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const Badge_Badge=_ref=>{let{children,className="",type=types._.DEFAULT}=_ref,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);const classes=classnames_default()("badge",type!==types._.DEFAULT?`badge-${type}`:"",className);return react.createElement("span",_extends({className:classes},rest),children)},components_badge_Badge=Badge_Badge;try{Badge_Badge.displayName="Badge",Badge_Badge.__docgenInfo={description:"",displayName:"Badge",props:{children:{defaultValue:null,description:"Child components",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Adds a class to the component",name:"className",required:!1,type:{name:"string"}},type:{defaultValue:{value:"BadgeType.DEFAULT"},description:"A predefined badge type",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"info"'},{value:'"warning"'},{value:'"highlight"'},{value:'"error"'},{value:'"alert"'},{value:'"success"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/Badge.tsx#Badge"]={docgenInfo:Badge_Badge.__docgenInfo,name:"Badge",path:"src/components/badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/badge/TrialBadge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_intl__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react-intl/lib/src/components/message.js"),_Badge__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/badge/Badge.tsx"),_messages__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/badge/messages.ts"),_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/badge/types.ts");const _excluded=["className"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}const TrialBadge=_ref=>{let{className=""}=_ref,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded);const classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("trial-badge",className);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Badge__WEBPACK_IMPORTED_MODULE_2__.A,_extends({className:classes,type:_types__WEBPACK_IMPORTED_MODULE_4__._.WARNING},rest),react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_5__.A,_messages__WEBPACK_IMPORTED_MODULE_3__.A.trial))},__WEBPACK_DEFAULT_EXPORT__=TrialBadge;try{TrialBadge.displayName="TrialBadge",TrialBadge.__docgenInfo={description:"",displayName:"TrialBadge",props:{className:{defaultValue:{value:""},description:"Additional class to the component",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/badge/TrialBadge.tsx#TrialBadge"]={docgenInfo:TrialBadge.__docgenInfo,name:"TrialBadge",path:"src/components/badge/TrialBadge.tsx#TrialBadge"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/badge/messages.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=(0,__webpack_require__("./node_modules/react-intl/lib/index.js").YK)({beta:{id:"boxui.badges.beta",defaultMessage:"BETA"},trial:{id:"boxui.badges.trial",defaultMessage:"TRIAL"},upgrade:{id:"boxui.badges.upgrade",defaultMessage:"UPGRADE"}})},"./src/components/badge/types.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>BadgeType});let BadgeType=function(BadgeType){return BadgeType.DEFAULT="default",BadgeType.INFO="info",BadgeType.WARNING="warning",BadgeType.HIGHLIGHT="highlight",BadgeType.ERROR="error",BadgeType.ALERT="alert",BadgeType.SUCCESS="success",BadgeType}({})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/react-intl/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XU:()=>FormattedDate,Gr:()=>FormattedNumber,YK:()=>defineMessages});var DisplayName,DisplayNameParts,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react=__webpack_require__("./node_modules/react/index.js"),components_useIntl=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js");!function(DisplayName){DisplayName.formatDate="FormattedDate",DisplayName.formatTime="FormattedTime",DisplayName.formatNumber="FormattedNumber",DisplayName.formatList="FormattedList",DisplayName.formatDisplayName="FormattedDisplayName"}(DisplayName||(DisplayName={})),function(DisplayNameParts){DisplayNameParts.formatDate="FormattedDateParts",DisplayNameParts.formatTime="FormattedTimeParts",DisplayNameParts.formatNumber="FormattedNumberParts",DisplayNameParts.formatList="FormattedListParts"}(DisplayNameParts||(DisplayNameParts={}));var FormattedNumberParts=function(props){var intl=(0,components_useIntl.A)(),value=props.value,children=props.children,formatProps=(0,tslib_es6.Tt)(props,["value","children"]);return children(intl.formatNumberToParts(value,formatProps))};FormattedNumberParts.displayName="FormattedNumberParts";function createFormattedDateTimePartsComponent(name){var ComponentParts=function(props){var intl=(0,components_useIntl.A)(),value=props.value,children=props.children,formatProps=(0,tslib_es6.Tt)(props,["value","children"]),date="string"==typeof value?new Date(value||0):value;return children("formatDate"===name?intl.formatDateToParts(date,formatProps):intl.formatTimeToParts(date,formatProps))};return ComponentParts.displayName=DisplayNameParts[name],ComponentParts}function createFormattedComponent(name){var Component=function(props){var intl=(0,components_useIntl.A)(),value=props.value,children=props.children,formatProps=(0,tslib_es6.Tt)(props,["value","children"]),formattedValue=intl[name](value,formatProps);if("function"==typeof children)return children(formattedValue);var Text=intl.textComponent||react.Fragment;return react.createElement(Text,null,formattedValue)};return Component.displayName=DisplayName[name],Component}function defineMessages(msgs){return msgs}FormattedNumberParts.displayName="FormattedNumberParts";var FormattedDate=createFormattedComponent("formatDate"),FormattedNumber=(createFormattedComponent("formatTime"),createFormattedComponent("formatNumber"));createFormattedComponent("formatList"),createFormattedComponent("formatDisplayName"),createFormattedDateTimePartsComponent("formatDate"),createFormattedDateTimePartsComponent("formatTime")},"./node_modules/react-intl/lib/src/components/message.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useIntl__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-intl/lib/src/components/useIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function FormattedMessage(props){var intl=(0,_useIntl__WEBPACK_IMPORTED_MODULE_3__.A)(),formatMessage=intl.formatMessage,_a=intl.textComponent,Text=void 0===_a?react__WEBPACK_IMPORTED_MODULE_0__.Fragment:_a,id=props.id,description=props.description,defaultMessage=props.defaultMessage,values=props.values,children=props.children,_b=props.tagName,Component=void 0===_b?Text:_b,nodes=formatMessage({id,description,defaultMessage},values,{ignoreTag:props.ignoreTag});return"function"==typeof children?children(Array.isArray(nodes)?nodes:[nodes]):Component?react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,null,react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(nodes)):react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,nodes)}FormattedMessage.displayName="FormattedMessage";var MemoizedFormattedMessage=react__WEBPACK_IMPORTED_MODULE_0__.memo(FormattedMessage,(function areEqual(prevProps,nextProps){var values=prevProps.values,otherProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(prevProps,["values"]),nextValues=nextProps.values,nextOtherProps=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Tt)(nextProps,["values"]);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.bN)(nextValues,values)&&(0,_utils__WEBPACK_IMPORTED_MODULE_2__.bN)(otherProps,nextOtherProps)}));MemoizedFormattedMessage.displayName="MemoizedFormattedMessage";const __WEBPACK_DEFAULT_EXPORT__=MemoizedFormattedMessage},"./node_modules/react-intl/lib/src/components/useIntl.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>useIntl});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_injectIntl__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-intl/lib/src/components/injectIntl.js"),_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react-intl/lib/src/utils.js");function useIntl(){var intl=react__WEBPACK_IMPORTED_MODULE_0__.useContext(_injectIntl__WEBPACK_IMPORTED_MODULE_1__.ob);return(0,_utils__WEBPACK_IMPORTED_MODULE_2__.HM)(intl),intl}}}]);