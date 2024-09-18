(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[98973],{"./src/elements/content-sidebar/stories/ContentSidebar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _ContentSidebar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/elements/content-sidebar/ContentSidebar.js");const basic={},__WEBPACK_DEFAULT_EXPORT__={title:"Elements/ContentSidebar",component:_ContentSidebar__WEBPACK_IMPORTED_MODULE_0__.A,args:{detailsSidebarProps:{hasProperties:!0,hasNotices:!0,hasAccessStats:!0,hasClassification:!0,hasRetentionPolicy:!0},features:__webpack_require__.g.FEATURES,fileId:__webpack_require__.g.FILE_ID,hasActivityFeed:!0,hasMetadata:!0,hasSkills:!0,hasVersions:!0,token:__webpack_require__.g.TOKEN}},__namedExportsOrder=["basic"];basic.parameters={...basic.parameters,docs:{...basic.parameters?.docs,source:{originalSource:"{}",...basic.parameters?.docs?.source}}}},"./node_modules/lodash/_LazyWrapper.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseCreate=__webpack_require__("./node_modules/lodash/_baseCreate.js"),baseLodash=__webpack_require__("./node_modules/lodash/_baseLodash.js");function LazyWrapper(value){this.__wrapped__=value,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=4294967295,this.__views__=[]}LazyWrapper.prototype=baseCreate(baseLodash.prototype),LazyWrapper.prototype.constructor=LazyWrapper,module.exports=LazyWrapper},"./node_modules/lodash/_LodashWrapper.js":(module,__unused_webpack_exports,__webpack_require__)=>{var baseCreate=__webpack_require__("./node_modules/lodash/_baseCreate.js"),baseLodash=__webpack_require__("./node_modules/lodash/_baseLodash.js");function LodashWrapper(value,chainAll){this.__wrapped__=value,this.__actions__=[],this.__chain__=!!chainAll,this.__index__=0,this.__values__=void 0}LodashWrapper.prototype=baseCreate(baseLodash.prototype),LodashWrapper.prototype.constructor=LodashWrapper,module.exports=LodashWrapper},"./node_modules/lodash/_baseLodash.js":module=>{module.exports=function baseLodash(){}},"./node_modules/lodash/_createFlow.js":(module,__unused_webpack_exports,__webpack_require__)=>{var LodashWrapper=__webpack_require__("./node_modules/lodash/_LodashWrapper.js"),flatRest=__webpack_require__("./node_modules/lodash/_flatRest.js"),getData=__webpack_require__("./node_modules/lodash/_getData.js"),getFuncName=__webpack_require__("./node_modules/lodash/_getFuncName.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isLaziable=__webpack_require__("./node_modules/lodash/_isLaziable.js");module.exports=function createFlow(fromRight){return flatRest((function(funcs){var length=funcs.length,index=length,prereq=LodashWrapper.prototype.thru;for(fromRight&&funcs.reverse();index--;){var func=funcs[index];if("function"!=typeof func)throw new TypeError("Expected a function");if(prereq&&!wrapper&&"wrapper"==getFuncName(func))var wrapper=new LodashWrapper([],!0)}for(index=wrapper?index:length;++index<length;){func=funcs[index];var funcName=getFuncName(func),data="wrapper"==funcName?getData(func):void 0;wrapper=data&&isLaziable(data[0])&&424==data[1]&&!data[4].length&&1==data[9]?wrapper[getFuncName(data[0])].apply(wrapper,data[3]):1==func.length&&isLaziable(func)?wrapper[funcName]():wrapper.thru(func)}return function(){var args=arguments,value=args[0];if(wrapper&&1==args.length&&isArray(value))return wrapper.plant(value).value();for(var index=0,result=length?funcs[index].apply(this,args):value;++index<length;)result=funcs[index].call(this,result);return result}}))}},"./node_modules/lodash/_getData.js":(module,__unused_webpack_exports,__webpack_require__)=>{var metaMap=__webpack_require__("./node_modules/lodash/_metaMap.js"),noop=__webpack_require__("./node_modules/lodash/noop.js"),getData=metaMap?function(func){return metaMap.get(func)}:noop;module.exports=getData},"./node_modules/lodash/_getFuncName.js":(module,__unused_webpack_exports,__webpack_require__)=>{var realNames=__webpack_require__("./node_modules/lodash/_realNames.js"),hasOwnProperty=Object.prototype.hasOwnProperty;module.exports=function getFuncName(func){for(var result=func.name+"",array=realNames[result],length=hasOwnProperty.call(realNames,result)?array.length:0;length--;){var data=array[length],otherFunc=data.func;if(null==otherFunc||otherFunc==func)return data.name}return result}},"./node_modules/lodash/_isLaziable.js":(module,__unused_webpack_exports,__webpack_require__)=>{var LazyWrapper=__webpack_require__("./node_modules/lodash/_LazyWrapper.js"),getData=__webpack_require__("./node_modules/lodash/_getData.js"),getFuncName=__webpack_require__("./node_modules/lodash/_getFuncName.js"),lodash=__webpack_require__("./node_modules/lodash/wrapperLodash.js");module.exports=function isLaziable(func){var funcName=getFuncName(func),other=lodash[funcName];if("function"!=typeof other||!(funcName in LazyWrapper.prototype))return!1;if(func===other)return!0;var data=getData(other);return!!data&&func===data[0]}},"./node_modules/lodash/_metaMap.js":(module,__unused_webpack_exports,__webpack_require__)=>{var WeakMap=__webpack_require__("./node_modules/lodash/_WeakMap.js"),metaMap=WeakMap&&new WeakMap;module.exports=metaMap},"./node_modules/lodash/_realNames.js":module=>{module.exports={}},"./node_modules/lodash/_wrapperClone.js":(module,__unused_webpack_exports,__webpack_require__)=>{var LazyWrapper=__webpack_require__("./node_modules/lodash/_LazyWrapper.js"),LodashWrapper=__webpack_require__("./node_modules/lodash/_LodashWrapper.js"),copyArray=__webpack_require__("./node_modules/lodash/_copyArray.js");module.exports=function wrapperClone(wrapper){if(wrapper instanceof LazyWrapper)return wrapper.clone();var result=new LodashWrapper(wrapper.__wrapped__,wrapper.__chain__);return result.__actions__=copyArray(wrapper.__actions__),result.__index__=wrapper.__index__,result.__values__=wrapper.__values__,result}},"./node_modules/lodash/flow.js":(module,__unused_webpack_exports,__webpack_require__)=>{var flow=__webpack_require__("./node_modules/lodash/_createFlow.js")();module.exports=flow},"./node_modules/lodash/wrapperLodash.js":(module,__unused_webpack_exports,__webpack_require__)=>{var LazyWrapper=__webpack_require__("./node_modules/lodash/_LazyWrapper.js"),LodashWrapper=__webpack_require__("./node_modules/lodash/_LodashWrapper.js"),baseLodash=__webpack_require__("./node_modules/lodash/_baseLodash.js"),isArray=__webpack_require__("./node_modules/lodash/isArray.js"),isObjectLike=__webpack_require__("./node_modules/lodash/isObjectLike.js"),wrapperClone=__webpack_require__("./node_modules/lodash/_wrapperClone.js"),hasOwnProperty=Object.prototype.hasOwnProperty;function lodash(value){if(isObjectLike(value)&&!isArray(value)&&!(value instanceof LazyWrapper)){if(value instanceof LodashWrapper)return value;if(hasOwnProperty.call(value,"__wrapped__"))return wrapperClone(value)}return new LodashWrapper(value)}lodash.prototype=baseLodash.prototype,lodash.prototype.constructor=lodash,module.exports=lodash},"./node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";var getRandomValues;__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}}}]);