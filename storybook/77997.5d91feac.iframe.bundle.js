(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[77997],{"./node_modules/lodash/_SetCache.js":(module,__unused_webpack_exports,__webpack_require__)=>{var MapCache=__webpack_require__("./node_modules/lodash/_MapCache.js"),setCacheAdd=__webpack_require__("./node_modules/lodash/_setCacheAdd.js"),setCacheHas=__webpack_require__("./node_modules/lodash/_setCacheHas.js");function SetCache(values){var index=-1,length=null==values?0:values.length;for(this.__data__=new MapCache;++index<length;)this.add(values[index])}SetCache.prototype.add=SetCache.prototype.push=setCacheAdd,SetCache.prototype.has=setCacheHas,module.exports=SetCache},"./node_modules/lodash/_arraySome.js":module=>{module.exports=function arraySome(array,predicate){for(var index=-1,length=null==array?0:array.length;++index<length;)if(predicate(array[index],index,array))return!0;return!1}},"./node_modules/lodash/_baseIsEqual.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseIsEqualDeep=__webpack_require__("./node_modules/lodash/_baseIsEqualDeep.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js");module.exports=function baseIsEqual(value,other,bitmask,customizer,stack){return value===other||(null==value||null==other||!isObjectLike(value)&&!isObjectLike(other)?value!=value&&other!=other:baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack))}},"./node_modules/lodash/_baseIsEqualDeep.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Stack=__webpack_require__("./node_modules/lodash/_Stack.js"),equalArrays=__webpack_require__("./node_modules/lodash/_equalArrays.js"),equalByTag=__webpack_require__("./node_modules/lodash/_equalByTag.js"),equalObjects=__webpack_require__("./node_modules/lodash/_equalObjects.js"),getTag=__webpack_require__("./node_modules/lodash/_getTag.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isBuffer=__webpack_require__("./node_modules/lodash/isBuffer.js"),isTypedArray=__webpack_require__("./node_modules/lodash/isTypedArray.js"),objectTag="[object Object]",hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function baseIsEqualDeep(object,other,bitmask,customizer,equalFunc,stack){var objIsArr=isArray(object),othIsArr=isArray(other),objTag=objIsArr?"[object Array]":getTag(object),othTag=othIsArr?"[object Array]":getTag(other),objIsObj=(objTag="[object Arguments]"==objTag?objectTag:objTag)==objectTag,othIsObj=(othTag="[object Arguments]"==othTag?objectTag:othTag)==objectTag,isSameTag=objTag==othTag;if(isSameTag&&isBuffer(object)){if(!isBuffer(other))return!1;objIsArr=!0,objIsObj=!1}if(isSameTag&&!objIsObj)return stack||(stack=new Stack),objIsArr||isTypedArray(object)?equalArrays(object,other,bitmask,customizer,equalFunc,stack):equalByTag(object,other,objTag,bitmask,customizer,equalFunc,stack);if(!(1&bitmask)){var objIsWrapped=objIsObj&&hasOwnProperty.call(object,"__wrapped__"),othIsWrapped=othIsObj&&hasOwnProperty.call(other,"__wrapped__");if(objIsWrapped||othIsWrapped){var objUnwrapped=objIsWrapped?object.value():object,othUnwrapped=othIsWrapped?other.value():other;return stack||(stack=new Stack),equalFunc(objUnwrapped,othUnwrapped,bitmask,customizer,stack)}}return!!isSameTag&&(stack||(stack=new Stack),equalObjects(object,other,bitmask,customizer,equalFunc,stack))}},"./node_modules/lodash/_cacheHas.js":module=>{module.exports=function cacheHas(cache,key){return cache.has(key)}},"./node_modules/lodash/_equalArrays.js":(module,__unused_webpack_exports,__webpack_require__)=>{var SetCache=__webpack_require__("./node_modules/lodash/_SetCache.js"),arraySome=__webpack_require__("./node_modules/lodash/_arraySome.js"),cacheHas=__webpack_require__("./node_modules/lodash/_cacheHas.js");module.exports=function equalArrays(array,other,bitmask,customizer,equalFunc,stack){var isPartial=1&bitmask,arrLength=array.length,othLength=other.length;if(arrLength!=othLength&&!(isPartial&&othLength>arrLength))return!1;var arrStacked=stack.get(array),othStacked=stack.get(other);if(arrStacked&&othStacked)return arrStacked==other&&othStacked==array;var index=-1,result=!0,seen=2&bitmask?new SetCache:void 0;for(stack.set(array,other),stack.set(other,array);++index<arrLength;){var arrValue=array[index],othValue=other[index];if(customizer)var compared=isPartial?customizer(othValue,arrValue,index,other,array,stack):customizer(arrValue,othValue,index,array,other,stack);if(void 0!==compared){if(compared)continue;result=!1;break}if(seen){if(!arraySome(other,(function(othValue,othIndex){if(!cacheHas(seen,othIndex)&&(arrValue===othValue||equalFunc(arrValue,othValue,bitmask,customizer,stack)))return seen.push(othIndex)}))){result=!1;break}}else if(arrValue!==othValue&&!equalFunc(arrValue,othValue,bitmask,customizer,stack)){result=!1;break}}return stack.delete(array),stack.delete(other),result}},"./node_modules/lodash/_equalByTag.js":(module,__unused_webpack_exports,__webpack_require__)=>{var Symbol=__webpack_require__("./node_modules/lodash/_Symbol.js"),Uint8Array=__webpack_require__("./node_modules/lodash/_Uint8Array.js"),eq=__webpack_require__("./node_modules/lodash/eq.js"),equalArrays=__webpack_require__("./node_modules/lodash/_equalArrays.js"),mapToArray=__webpack_require__("./node_modules/lodash/_mapToArray.js"),setToArray=__webpack_require__("./node_modules/lodash/_setToArray.js"),symbolProto=Symbol?Symbol.prototype:void 0,symbolValueOf=symbolProto?symbolProto.valueOf:void 0;module.exports=function equalByTag(object,other,tag,bitmask,customizer,equalFunc,stack){switch(tag){case"[object DataView]":if(object.byteLength!=other.byteLength||object.byteOffset!=other.byteOffset)return!1;object=object.buffer,other=other.buffer;case"[object ArrayBuffer]":return!(object.byteLength!=other.byteLength||!equalFunc(new Uint8Array(object),new Uint8Array(other)));case"[object Boolean]":case"[object Date]":case"[object Number]":return eq(+object,+other);case"[object Error]":return object.name==other.name&&object.message==other.message;case"[object RegExp]":case"[object String]":return object==other+"";case"[object Map]":var convert=mapToArray;case"[object Set]":var isPartial=1&bitmask;if(convert||(convert=setToArray),object.size!=other.size&&!isPartial)return!1;var stacked=stack.get(object);if(stacked)return stacked==other;bitmask|=2,stack.set(object,other);var result=equalArrays(convert(object),convert(other),bitmask,customizer,equalFunc,stack);return stack.delete(object),result;case"[object Symbol]":if(symbolValueOf)return symbolValueOf.call(object)==symbolValueOf.call(other)}return!1}},"./node_modules/lodash/_equalObjects.js":(module,__unused_webpack_exports,__webpack_require__)=>{var getAllKeys=__webpack_require__("./node_modules/lodash/_getAllKeys.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function equalObjects(object,other,bitmask,customizer,equalFunc,stack){var isPartial=1&bitmask,objProps=getAllKeys(object),objLength=objProps.length;if(objLength!=getAllKeys(other).length&&!isPartial)return!1;for(var index=objLength;index--;){var key=objProps[index];if(!(isPartial?key in other:hasOwnProperty.call(other,key)))return!1}var objStacked=stack.get(object),othStacked=stack.get(other);if(objStacked&&othStacked)return objStacked==other&&othStacked==object;var result=!0;stack.set(object,other),stack.set(other,object);for(var skipCtor=isPartial;++index<objLength;){var objValue=object[key=objProps[index]],othValue=other[key];if(customizer)var compared=isPartial?customizer(othValue,objValue,key,other,object,stack):customizer(objValue,othValue,key,object,other,stack);if(!(void 0===compared?objValue===othValue||equalFunc(objValue,othValue,bitmask,customizer,stack):compared)){result=!1;break}skipCtor||(skipCtor="constructor"==key)}if(result&&!skipCtor){var objCtor=object.constructor,othCtor=other.constructor;objCtor==othCtor||!("constructor"in object)||!("constructor"in other)||"function"==typeof objCtor&&objCtor instanceof objCtor&&"function"==typeof othCtor&&othCtor instanceof othCtor||(result=!1)}return stack.delete(object),stack.delete(other),result}},"./node_modules/lodash/_mapToArray.js":module=>{module.exports=function mapToArray(map){var index=-1,result=Array(map.size);return map.forEach((function(value,key){result[++index]=[key,value]})),result}},"./node_modules/lodash/_setCacheAdd.js":module=>{module.exports=function setCacheAdd(value){return this.__data__.set(value,"__lodash_hash_undefined__"),this}},"./node_modules/lodash/_setCacheHas.js":module=>{module.exports=function setCacheHas(value){return this.__data__.has(value)}},"./node_modules/lodash/_setToArray.js":module=>{module.exports=function setToArray(set){var index=-1,result=Array(set.size);return set.forEach((function(value){result[++index]=value})),result}},"./node_modules/lodash/cloneDeep.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseClone=__webpack_require__("./node_modules/lodash/_baseClone.js");module.exports=function cloneDeep(value){return baseClone(value,5)}},"./node_modules/lodash/throttle.js":(module,__unused_webpack_exports,__webpack_require__)=>{var debounce=__webpack_require__("./node_modules/lodash/debounce.js"),isObject=__webpack_require__("./node_modules/lodash/isObject.js");module.exports=function throttle(func,wait,options){var leading=!0,trailing=!0;if("function"!=typeof func)throw new TypeError("Expected a function");return isObject(options)&&(leading="leading"in options?!!options.leading:leading,trailing="trailing"in options?!!options.trailing:trailing),debounce(func,wait,{leading,maxWait:wait,trailing})}},"./node_modules/react-router-dom/esm/react-router-dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Kd:()=>BrowserRouter,N_:()=>Link});var react_router__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react-router/esm/react-router.js"),_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),history__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/history/esm/history.js"),prop_types__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/prop-types/index.js"),prop_types__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__),tiny_warning__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tiny-warning/dist/tiny-warning.esm.js"),_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),tiny_invariant__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/tiny-invariant/dist/esm/tiny-invariant.js"),BrowserRouter=function(_React$Component){function BrowserRouter(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this).history=(0,history__WEBPACK_IMPORTED_MODULE_2__.zR)(_this.props),_this}return(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.A)(BrowserRouter,_React$Component),BrowserRouter.prototype.render=function render(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Ix,{history:this.history,children:this.props.children})},BrowserRouter}(react__WEBPACK_IMPORTED_MODULE_0___default().Component);BrowserRouter.propTypes={basename:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,forceRefresh:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,getUserConfirmation:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,keyLength:prop_types__WEBPACK_IMPORTED_MODULE_4___default().number},BrowserRouter.prototype.componentDidMount=function(){(0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__.A)(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")};var HashRouter=function(_React$Component){function HashRouter(){for(var _this,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return(_this=_React$Component.call.apply(_React$Component,[this].concat(args))||this).history=(0,history__WEBPACK_IMPORTED_MODULE_2__.TM)(_this.props),_this}return(0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__.A)(HashRouter,_React$Component),HashRouter.prototype.render=function render(){return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.Ix,{history:this.history,children:this.props.children})},HashRouter}(react__WEBPACK_IMPORTED_MODULE_0___default().Component);HashRouter.propTypes={basename:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,children:prop_types__WEBPACK_IMPORTED_MODULE_4___default().node,getUserConfirmation:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,hashType:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["hashbang","noslash","slash"])},HashRouter.prototype.componentDidMount=function(){(0,tiny_warning__WEBPACK_IMPORTED_MODULE_5__.A)(!this.props.history,"<HashRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { HashRouter as Router }`.")};var resolveToLocation=function resolveToLocation(to,currentLocation){return"function"==typeof to?to(currentLocation):to},normalizeToLocation=function normalizeToLocation(to,currentLocation){return"string"==typeof to?(0,history__WEBPACK_IMPORTED_MODULE_2__.yJ)(to,null,null,currentLocation):to},forwardRefShim=function forwardRefShim(C){return C},forwardRef=react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef;void 0===forwardRef&&(forwardRef=forwardRefShim);var LinkAnchor=forwardRef((function(_ref,forwardedRef){var innerRef=_ref.innerRef,navigate=_ref.navigate,_onClick=_ref.onClick,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.A)(_ref,["innerRef","navigate","onClick"]),target=rest.target,props=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({},rest,{onClick:function onClick(event){try{_onClick&&_onClick(event)}catch(ex){throw event.preventDefault(),ex}event.defaultPrevented||0!==event.button||target&&"_self"!==target||function isModifiedEvent(event){return!!(event.metaKey||event.altKey||event.ctrlKey||event.shiftKey)}(event)||(event.preventDefault(),navigate())}});return props.ref=forwardRefShim!==forwardRef&&forwardedRef||innerRef,react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a",props)}));LinkAnchor.displayName="LinkAnchor";var Link=forwardRef((function(_ref2,forwardedRef){var _ref2$component=_ref2.component,component=void 0===_ref2$component?LinkAnchor:_ref2$component,replace=_ref2.replace,to=_ref2.to,innerRef=_ref2.innerRef,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.A)(_ref2,["component","replace","to","innerRef"]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.XZ.Consumer,null,(function(context){context||(0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__.A)(!1,"You should not use <Link> outside a <Router>");var history=context.history,location=normalizeToLocation(resolveToLocation(to,context.location),context.location),href=location?history.createHref(location):"",props=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({},rest,{href,navigate:function navigate(){var location=resolveToLocation(to,context.location),isDuplicateNavigation=(0,history__WEBPACK_IMPORTED_MODULE_2__.AO)(context.location)===(0,history__WEBPACK_IMPORTED_MODULE_2__.AO)(normalizeToLocation(location));(replace||isDuplicateNavigation?history.replace:history.push)(location)}});return forwardRefShim!==forwardRef?props.ref=forwardedRef||innerRef:props.innerRef=innerRef,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(component,props)}))})),toType=prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,prop_types__WEBPACK_IMPORTED_MODULE_4___default().func]),refType=prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape({current:prop_types__WEBPACK_IMPORTED_MODULE_4___default().any})]);Link.displayName="Link",Link.propTypes={innerRef:refType,onClick:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,replace:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,target:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,to:toType.isRequired};var forwardRefShim$1=function forwardRefShim(C){return C},forwardRef$1=react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef;void 0===forwardRef$1&&(forwardRef$1=forwardRefShim$1);var NavLink=forwardRef$1((function(_ref,forwardedRef){var _ref$ariaCurrent=_ref["aria-current"],ariaCurrent=void 0===_ref$ariaCurrent?"page":_ref$ariaCurrent,_ref$activeClassName=_ref.activeClassName,activeClassName=void 0===_ref$activeClassName?"active":_ref$activeClassName,activeStyle=_ref.activeStyle,classNameProp=_ref.className,exact=_ref.exact,isActiveProp=_ref.isActive,locationProp=_ref.location,sensitive=_ref.sensitive,strict=_ref.strict,styleProp=_ref.style,to=_ref.to,innerRef=_ref.innerRef,rest=(0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__.A)(_ref,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router__WEBPACK_IMPORTED_MODULE_3__.XZ.Consumer,null,(function(context){context||(0,tiny_invariant__WEBPACK_IMPORTED_MODULE_8__.A)(!1,"You should not use <NavLink> outside a <Router>");var currentLocation=locationProp||context.location,toLocation=normalizeToLocation(resolveToLocation(to,currentLocation),currentLocation),path=toLocation.pathname,escapedPath=path&&path.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),match=escapedPath?(0,react_router__WEBPACK_IMPORTED_MODULE_3__.B6)(currentLocation.pathname,{path:escapedPath,exact,sensitive,strict}):null,isActive=!!(isActiveProp?isActiveProp(match,currentLocation):match),className="function"==typeof classNameProp?classNameProp(isActive):classNameProp,style="function"==typeof styleProp?styleProp(isActive):styleProp;isActive&&(className=function joinClassnames(){for(var _len=arguments.length,classnames=new Array(_len),_key=0;_key<_len;_key++)classnames[_key]=arguments[_key];return classnames.filter((function(i){return i})).join(" ")}(className,activeClassName),style=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({},style,activeStyle));var props=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({"aria-current":isActive&&ariaCurrent||null,className,style,to:toLocation},rest);return forwardRefShim$1!==forwardRef$1?props.ref=forwardedRef||innerRef:props.innerRef=innerRef,react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Link,props)}))}));NavLink.displayName="NavLink";var ariaCurrentType=prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf(["page","step","location","date","time","true","false"]);NavLink.propTypes=(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_7__.A)({},Link.propTypes,{"aria-current":ariaCurrentType,activeClassName:prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,activeStyle:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,className:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().string,prop_types__WEBPACK_IMPORTED_MODULE_4___default().func]),exact:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,isActive:prop_types__WEBPACK_IMPORTED_MODULE_4___default().func,location:prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,sensitive:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,strict:prop_types__WEBPACK_IMPORTED_MODULE_4___default().bool,style:prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_4___default().object,prop_types__WEBPACK_IMPORTED_MODULE_4___default().func])})}}]);