(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[24563],{"./src/components/draft-js-editor/DraftJSEditor.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>DraftJSEditor_stories});var react=__webpack_require__("./node_modules/react/index.js"),Draft=__webpack_require__("./node_modules/draft-js/lib/Draft.js"),DraftJSEditor=__webpack_require__("./src/components/draft-js-editor/DraftJSEditor.js");var draft_js_mention_selector=__webpack_require__("./src/components/form-elements/draft-js-mention-selector/index.js");const basic=()=>{const initialEditorState=Draft.EditorState.createWithContent(Draft.ContentState.createFromText("Example"),draft_js_mention_selector.f6),[exampleExternalEditorState,setExampleExternalEditorState]=react.useState(initialEditorState);return react.createElement(DraftJSEditor.A,{editorState:exampleExternalEditorState,hideLabel:!1,inputProps:{},isDisabled:!1,isRequired:!0,label:"Draft.js Editor Example",description:"Description for screenReader users",onBlur:()=>null,onChange:newEditorState=>setExampleExternalEditorState(newEditorState),onFocus:()=>null})},DraftJSEditor_stories={title:"Components/DraftJSEditor",component:DraftJSEditor.A,parameters:{notes:"`import DraftJSEditor from 'box-ui-elements/es/components/draft-js-editor/DraftJSEditor';`\n\nThis component exposes a [Draft][1] editor for use in box-ui-elements.\nIt was initially written for use with `es/components/form-elements`'s `<DraftJSMentionSelector />` components.\n\nIt doesn't own its own `editorState`. Any changes in the `<Editor />` cause the component's `onChange` method to be called with the new state.\n\nBecause `<DraftJSEditor />` doesn't own its `EditorState`, it doesn't have its own [decorator][2]. You assign the decorator wherever the `EditorState` lives.\n\n[1]: https://draftjs.org\n[2]: https://draftjs.org/docs/advanced-topics-decorators/#__docusaurus\n"}},__namedExportsOrder=["basic"];basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:'() => {\n  const initialEditorState = EditorState.createWithContent(ContentState.createFromText(\'Example\'), DraftMentionDecorator);\n  const [exampleExternalEditorState, setExampleExternalEditorState] = React.useState(initialEditorState);\n  const setEditorState = newEditorState => setExampleExternalEditorState(newEditorState);\n  return <DraftJSEditor editorState={exampleExternalEditorState} hideLabel={false} inputProps={{}} isDisabled={false} isRequired label="Draft.js Editor Example" description="Description for screenReader users" onBlur={() => null} onChange={setEditorState} onFocus={() => null} />;\n}',...basic.parameters?.docs?.source}}}},"./src/utils/dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B6:()=>isInputElement,Bm:()=>isFocusableElement,Jh:()=>isActivateKey,Ml:()=>isLeftClick,Rt:()=>scrollIntoView,XC:()=>focus,qZ:()=>useIsContentOverflowed});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/scroll-into-view-if-needed/es/index.js"),_constants__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/constants.js");__webpack_require__("./src/utils/domPolyfill.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=typeof t||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==typeof i?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function isInputElement(element){if(!(element&&element instanceof HTMLElement))return!1;const tag=element.tagName.toLowerCase();return"input"===tag||"select"===tag||"textarea"===tag||"div"===tag&&!!element.getAttribute("contenteditable")}function isFocusableElement(element){if(!(element&&element instanceof HTMLElement))return!1;const tag=element.tagName.toLowerCase(),isCheckbox=element.classList.contains("checkbox-pointer-target")||element.parentElement instanceof HTMLElement&&element.parentElement.classList.contains("checkbox-label"),isButton=element.classList.contains("btn-content")||element.parentElement instanceof HTMLElement&&element.parentElement.classList.contains("btn")||element.parentElement instanceof HTMLElement&&element.parentElement.classList.contains("bdl-Button")||!1;return isInputElement(element)||"button"===tag||"a"===tag||"option"===tag||isCheckbox||isButton}function isActivateKey(event){return event.key===_constants__WEBPACK_IMPORTED_MODULE_1__.Rkl.enter||event.key===_constants__WEBPACK_IMPORTED_MODULE_1__.Rkl.space}function isLeftClick(event){return!(0!==event.button||event.altKey||event.ctrlKey||event.metaKey||event.shiftKey)}function focus(root,selector,focusRoot=!0){if(!root)return;if(!selector)return void root.focus();const element=root.querySelector(selector);element&&"function"==typeof element.focus?element.focus():focusRoot&&root.focus()}function scrollIntoView(itemEl,options={}){if(itemEl){const parentEl=itemEl.closest(`.body, .modal, .${_constants__WEBPACK_IMPORTED_MODULE_1__.WGB}`);(0,scroll_into_view_if_needed__WEBPACK_IMPORTED_MODULE_3__.A)(itemEl,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({scrollMode:"if-needed",boundary:parentEl},options))}}function useIsContentOverflowed(contentRef){const[isContentOverflowed,setIsContentOverflowed]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1);return react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect((()=>{const{current}=contentRef;if(!current)return;const{offsetWidth,scrollWidth}=current,willOverflow=offsetWidth<scrollWidth;willOverflow!==isContentOverflowed&&setIsContentOverflowed(willOverflow)})),isContentOverflowed}},"./src/utils/domPolyfill.js":()=>{window.Element.prototype.closest=function closest(s){window.Element.prototype.matches||(window.Element.prototype.matches=window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector);let el=this;do{if(el.matches(s))return el;el=el.parentElement||el.parentNode}while(null!==el&&1===el.nodeType);return null}},"./src/components/tooltip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ay:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.Ay,Zj:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.Zj,ts:()=>_Tooltip__WEBPACK_IMPORTED_MODULE_0__.ts});var _Tooltip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/tooltip/Tooltip.tsx")}}]);