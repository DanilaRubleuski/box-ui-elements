(globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[]).push([[4660],{"./node_modules/@box/blueprint-web/lib-esm/accordion/accordion.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{nD:()=>Accordion});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PointerChevron=props=>(0,jsx_runtime.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",role:"img",...props,children:(0,jsx_runtime.jsx)("path",{fill:props.color||"#909090",d:"M11.162 19.863c-.555-.181-1.086-.534-1.593-1.056L.559 9.264A2.004 2.004 0 0 1 0 7.9c-.008-.514.155-.945.488-1.293A1.87 1.87 0 0 1 1.855 6a1.75 1.75 0 0 1 1.343.558L12 15.888l8.79-9.33c.364-.38.808-.566 1.331-.558.523.008.975.21 1.355.606.364.332.539.76.523 1.281a2.02 2.02 0 0 1-.594 1.377l-8.987 9.567c-.507.506-1.037.85-1.592 1.032a2.604 2.604 0 0 1-1.664 0Z"})});var tokens=__webpack_require__("./node_modules/@box/blueprint-web-assets/tokens/tokens.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_collection_dist=__webpack_require__("./node_modules/@radix-ui/react-collection/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),primitive_dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_use_layout_effect_dist=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),react_presence_dist=__webpack_require__("./node_modules/@radix-ui/react-presence/dist/index.mjs"),react_id_dist=__webpack_require__("./node_modules/@radix-ui/react-id/dist/index.mjs");const[$409067139f391064$var$createCollapsibleContext,$409067139f391064$export$952b32dcbe73087a]=(0,dist.A)("Collapsible"),[$409067139f391064$var$CollapsibleProvider,$409067139f391064$var$useCollapsibleContext]=$409067139f391064$var$createCollapsibleContext("Collapsible"),$409067139f391064$export$6eb0f7ddcda6131f=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCollapsible,open:openProp,defaultOpen,disabled,onOpenChange,...collapsibleProps}=props,[open=!1,setOpen]=(0,react_use_controllable_state_dist.i)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,react.createElement)($409067139f391064$var$CollapsibleProvider,{scope:__scopeCollapsible,disabled,contentId:(0,react_id_dist.B)(),open,onOpenToggle:(0,react.useCallback)((()=>setOpen((prevOpen=>!prevOpen))),[setOpen])},(0,react.createElement)(react_primitive_dist.sG.div,(0,esm_extends.A)({"data-state":$409067139f391064$var$getState(open),"data-disabled":disabled?"":void 0},collapsibleProps,{ref:forwardedRef})))})),$409067139f391064$export$c135dce7b15bbbdc=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCollapsible,...triggerProps}=props,context=$409067139f391064$var$useCollapsibleContext("CollapsibleTrigger",__scopeCollapsible);return(0,react.createElement)(react_primitive_dist.sG.button,(0,esm_extends.A)({type:"button","aria-controls":context.contentId,"aria-expanded":context.open||!1,"data-state":$409067139f391064$var$getState(context.open),"data-disabled":context.disabled?"":void 0,disabled:context.disabled},triggerProps,{ref:forwardedRef,onClick:(0,primitive_dist.m)(props.onClick,context.onOpenToggle)}))})),$409067139f391064$export$aadde00976f34151=(0,react.forwardRef)(((props,forwardedRef)=>{const{forceMount,...contentProps}=props,context=$409067139f391064$var$useCollapsibleContext("CollapsibleContent",props.__scopeCollapsible);return(0,react.createElement)(react_presence_dist.C,{present:forceMount||context.open},(({present})=>(0,react.createElement)($409067139f391064$var$CollapsibleContentImpl,(0,esm_extends.A)({},contentProps,{ref:forwardedRef,present}))))})),$409067139f391064$var$CollapsibleContentImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeCollapsible,present,children,...contentProps}=props,context=$409067139f391064$var$useCollapsibleContext("CollapsibleContent",__scopeCollapsible),[isPresent,setIsPresent]=(0,react.useState)(present),ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref),heightRef=(0,react.useRef)(0),height=heightRef.current,widthRef=(0,react.useRef)(0),width=widthRef.current,isOpen=context.open||isPresent,isMountAnimationPreventedRef=(0,react.useRef)(isOpen),originalStylesRef=(0,react.useRef)();return(0,react.useEffect)((()=>{const rAF=requestAnimationFrame((()=>isMountAnimationPreventedRef.current=!1));return()=>cancelAnimationFrame(rAF)}),[]),(0,react_use_layout_effect_dist.N)((()=>{const node=ref.current;if(node){originalStylesRef.current=originalStylesRef.current||{transitionDuration:node.style.transitionDuration,animationName:node.style.animationName},node.style.transitionDuration="0s",node.style.animationName="none";const rect=node.getBoundingClientRect();heightRef.current=rect.height,widthRef.current=rect.width,isMountAnimationPreventedRef.current||(node.style.transitionDuration=originalStylesRef.current.transitionDuration,node.style.animationName=originalStylesRef.current.animationName),setIsPresent(present)}}),[context.open,present]),(0,react.createElement)(react_primitive_dist.sG.div,(0,esm_extends.A)({"data-state":$409067139f391064$var$getState(context.open),"data-disabled":context.disabled?"":void 0,id:context.contentId,hidden:!isOpen},contentProps,{ref:composedRefs,style:{"--radix-collapsible-content-height":height?`${height}px`:void 0,"--radix-collapsible-content-width":width?`${width}px`:void 0,...props.style}}),isOpen&&children)}));function $409067139f391064$var$getState(open){return open?"open":"closed"}const $409067139f391064$export$be92b6f5f03c0fe9=$409067139f391064$export$6eb0f7ddcda6131f,$409067139f391064$export$41fb9f06171c75f4=$409067139f391064$export$c135dce7b15bbbdc,$409067139f391064$export$7c6e2c02157bb7d2=$409067139f391064$export$aadde00976f34151;var react_direction_dist=__webpack_require__("./node_modules/@radix-ui/react-direction/dist/index.mjs");const $1bf158f521e1b1b4$var$ACCORDION_KEYS=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[$1bf158f521e1b1b4$var$Collection,$1bf158f521e1b1b4$var$useCollection,$1bf158f521e1b1b4$var$createCollectionScope]=(0,react_collection_dist.N)("Accordion"),[$1bf158f521e1b1b4$var$createAccordionContext,$1bf158f521e1b1b4$export$9748edc328a73be1]=(0,dist.A)("Accordion",[$1bf158f521e1b1b4$var$createCollectionScope,$409067139f391064$export$952b32dcbe73087a]),$1bf158f521e1b1b4$var$useCollapsibleScope=$409067139f391064$export$952b32dcbe73087a(),$1bf158f521e1b1b4$export$a766cd26d0d69044=react_default().forwardRef(((props,forwardedRef)=>{const{type,...accordionProps}=props,singleProps=accordionProps,multipleProps=accordionProps;return react_default().createElement($1bf158f521e1b1b4$var$Collection.Provider,{scope:props.__scopeAccordion},"multiple"===type?react_default().createElement($1bf158f521e1b1b4$var$AccordionImplMultiple,(0,esm_extends.A)({},multipleProps,{ref:forwardedRef})):react_default().createElement($1bf158f521e1b1b4$var$AccordionImplSingle,(0,esm_extends.A)({},singleProps,{ref:forwardedRef})))}));$1bf158f521e1b1b4$export$a766cd26d0d69044.propTypes={type(props){const value=props.value||props.defaultValue;return props.type&&!["single","multiple"].includes(props.type)?new Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`."):"multiple"===props.type&&"string"==typeof value?new Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`."):"single"===props.type&&Array.isArray(value)?new Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`."):null}};const[$1bf158f521e1b1b4$var$AccordionValueProvider,$1bf158f521e1b1b4$var$useAccordionValueContext]=$1bf158f521e1b1b4$var$createAccordionContext("Accordion"),[$1bf158f521e1b1b4$var$AccordionCollapsibleProvider,$1bf158f521e1b1b4$var$useAccordionCollapsibleContext]=$1bf158f521e1b1b4$var$createAccordionContext("Accordion",{collapsible:!1}),$1bf158f521e1b1b4$var$AccordionImplSingle=react_default().forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},collapsible=!1,...accordionSingleProps}=props,[value,setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange});return react_default().createElement($1bf158f521e1b1b4$var$AccordionValueProvider,{scope:props.__scopeAccordion,value:value?[value]:[],onItemOpen:setValue,onItemClose:react_default().useCallback((()=>collapsible&&setValue("")),[collapsible,setValue])},react_default().createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider,{scope:props.__scopeAccordion,collapsible},react_default().createElement($1bf158f521e1b1b4$var$AccordionImpl,(0,esm_extends.A)({},accordionSingleProps,{ref:forwardedRef}))))})),$1bf158f521e1b1b4$var$AccordionImplMultiple=react_default().forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},...accordionMultipleProps}=props,[value1=[],setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange}),handleItemOpen=react_default().useCallback((itemValue=>setValue(((prevValue=[])=>[...prevValue,itemValue]))),[setValue]),handleItemClose=react_default().useCallback((itemValue=>setValue(((prevValue=[])=>prevValue.filter((value=>value!==itemValue))))),[setValue]);return react_default().createElement($1bf158f521e1b1b4$var$AccordionValueProvider,{scope:props.__scopeAccordion,value:value1,onItemOpen:handleItemOpen,onItemClose:handleItemClose},react_default().createElement($1bf158f521e1b1b4$var$AccordionCollapsibleProvider,{scope:props.__scopeAccordion,collapsible:!0},react_default().createElement($1bf158f521e1b1b4$var$AccordionImpl,(0,esm_extends.A)({},accordionMultipleProps,{ref:forwardedRef}))))})),[$1bf158f521e1b1b4$var$AccordionImplProvider,$1bf158f521e1b1b4$var$useAccordionContext]=$1bf158f521e1b1b4$var$createAccordionContext("Accordion"),$1bf158f521e1b1b4$var$AccordionImpl=react_default().forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,disabled,dir,orientation="vertical",...accordionProps}=props,accordionRef=react_default().useRef(null),composedRefs=(0,react_compose_refs_dist.s)(accordionRef,forwardedRef),getItems=$1bf158f521e1b1b4$var$useCollection(__scopeAccordion),isDirectionLTR="ltr"===(0,react_direction_dist.jH)(dir),handleKeyDown=(0,primitive_dist.m)(props.onKeyDown,(event=>{var _triggerCollection$cl;if(!$1bf158f521e1b1b4$var$ACCORDION_KEYS.includes(event.key))return;const target=event.target,triggerCollection=getItems().filter((item=>{var _item$ref$current;return!(null!==(_item$ref$current=item.ref.current)&&void 0!==_item$ref$current&&_item$ref$current.disabled)})),triggerIndex=triggerCollection.findIndex((item=>item.ref.current===target)),triggerCount=triggerCollection.length;if(-1===triggerIndex)return;event.preventDefault();let nextIndex=triggerIndex;const endIndex=triggerCount-1,moveNext=()=>{nextIndex=triggerIndex+1,nextIndex>endIndex&&(nextIndex=0)},movePrev=()=>{nextIndex=triggerIndex-1,nextIndex<0&&(nextIndex=endIndex)};switch(event.key){case"Home":nextIndex=0;break;case"End":nextIndex=endIndex;break;case"ArrowRight":"horizontal"===orientation&&(isDirectionLTR?moveNext():movePrev());break;case"ArrowDown":"vertical"===orientation&&moveNext();break;case"ArrowLeft":"horizontal"===orientation&&(isDirectionLTR?movePrev():moveNext());break;case"ArrowUp":"vertical"===orientation&&movePrev()}null===(_triggerCollection$cl=triggerCollection[nextIndex%triggerCount].ref.current)||void 0===_triggerCollection$cl||_triggerCollection$cl.focus()}));return react_default().createElement($1bf158f521e1b1b4$var$AccordionImplProvider,{scope:__scopeAccordion,disabled,direction:dir,orientation},react_default().createElement($1bf158f521e1b1b4$var$Collection.Slot,{scope:__scopeAccordion},react_default().createElement(react_primitive_dist.sG.div,(0,esm_extends.A)({},accordionProps,{"data-orientation":orientation,ref:composedRefs,onKeyDown:disabled?void 0:handleKeyDown}))))})),[$1bf158f521e1b1b4$var$AccordionItemProvider,$1bf158f521e1b1b4$var$useAccordionItemContext]=$1bf158f521e1b1b4$var$createAccordionContext("AccordionItem"),$1bf158f521e1b1b4$export$d99097c13d4dac9f=react_default().forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,value,...accordionItemProps}=props,accordionContext=$1bf158f521e1b1b4$var$useAccordionContext("AccordionItem",__scopeAccordion),valueContext=$1bf158f521e1b1b4$var$useAccordionValueContext("AccordionItem",__scopeAccordion),collapsibleScope=$1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion),triggerId=(0,react_id_dist.B)(),open1=value&&valueContext.value.includes(value)||!1,disabled=accordionContext.disabled||props.disabled;return react_default().createElement($1bf158f521e1b1b4$var$AccordionItemProvider,{scope:__scopeAccordion,open:open1,disabled,triggerId},react_default().createElement($409067139f391064$export$be92b6f5f03c0fe9,(0,esm_extends.A)({"data-orientation":accordionContext.orientation,"data-state":$1bf158f521e1b1b4$var$getState(open1)},collapsibleScope,accordionItemProps,{ref:forwardedRef,disabled,open:open1,onOpenChange:open=>{open?valueContext.onItemOpen(value):valueContext.onItemClose(value)}})))})),$1bf158f521e1b1b4$export$5e3e5deaaf81ee41=react_default().forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...headerProps}=props,accordionContext=$1bf158f521e1b1b4$var$useAccordionContext("Accordion",__scopeAccordion),itemContext=$1bf158f521e1b1b4$var$useAccordionItemContext("AccordionHeader",__scopeAccordion);return react_default().createElement(react_primitive_dist.sG.h3,(0,esm_extends.A)({"data-orientation":accordionContext.orientation,"data-state":$1bf158f521e1b1b4$var$getState(itemContext.open),"data-disabled":itemContext.disabled?"":void 0},headerProps,{ref:forwardedRef}))})),$1bf158f521e1b1b4$export$94e939b1f85bdd73=react_default().forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...triggerProps}=props,accordionContext=$1bf158f521e1b1b4$var$useAccordionContext("Accordion",__scopeAccordion),itemContext=$1bf158f521e1b1b4$var$useAccordionItemContext("AccordionTrigger",__scopeAccordion),collapsibleContext=$1bf158f521e1b1b4$var$useAccordionCollapsibleContext("AccordionTrigger",__scopeAccordion),collapsibleScope=$1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);return react_default().createElement($1bf158f521e1b1b4$var$Collection.ItemSlot,{scope:__scopeAccordion},react_default().createElement($409067139f391064$export$41fb9f06171c75f4,(0,esm_extends.A)({"aria-disabled":itemContext.open&&!collapsibleContext.collapsible||void 0,"data-orientation":accordionContext.orientation,id:itemContext.triggerId},collapsibleScope,triggerProps,{ref:forwardedRef})))})),$1bf158f521e1b1b4$export$985b9a77379b54a0=react_default().forwardRef(((props,forwardedRef)=>{const{__scopeAccordion,...contentProps}=props,accordionContext=$1bf158f521e1b1b4$var$useAccordionContext("Accordion",__scopeAccordion),itemContext=$1bf158f521e1b1b4$var$useAccordionItemContext("AccordionContent",__scopeAccordion),collapsibleScope=$1bf158f521e1b1b4$var$useCollapsibleScope(__scopeAccordion);return react_default().createElement($409067139f391064$export$7c6e2c02157bb7d2,(0,esm_extends.A)({role:"region","aria-labelledby":itemContext.triggerId,"data-orientation":accordionContext.orientation},collapsibleScope,contentProps,{ref:forwardedRef,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...props.style}}))}));function $1bf158f521e1b1b4$var$getState(open){return open?"open":"closed"}const $1bf158f521e1b1b4$export$be92b6f5f03c0fe9=$1bf158f521e1b1b4$export$a766cd26d0d69044,$1bf158f521e1b1b4$export$6d08773d2e66f8f2=$1bf158f521e1b1b4$export$d99097c13d4dac9f,$1bf158f521e1b1b4$export$8b251419efc915eb=$1bf158f521e1b1b4$export$5e3e5deaaf81ee41,$1bf158f521e1b1b4$export$41fb9f06171c75f4=$1bf158f521e1b1b4$export$94e939b1f85bdd73,$1bf158f521e1b1b4$export$7c6e2c02157bb7d2=$1bf158f521e1b1b4$export$985b9a77379b54a0;var clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),styles=(__webpack_require__("./node_modules/@box/blueprint-web/lib-esm/index.css"),{ghost:"bp_ghost_module_ghost--672d9","ghost-keyframes":"bp_ghost_module_ghost-keyframes--672d9",circle:"bp_ghost_module_circle--672d9",pill:"bp_ghost_module_pill--672d9",rectangle:"bp_ghost_module_rectangle--672d9"});const Ghost=({className,variant="pill",height,width,borderRadius,style={},...rest})=>(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.default)(className,styles.ghost,{[styles[variant]]:!!variant}),style:{height,width,borderRadius,...style},...rest});Ghost.displayName="Ghost";const colorsMap={SurfaceStatusSurfaceGray:tokens.MKX,SurfaceStatusSurfaceYellow:tokens.ztc,SurfaceStatusSurfaceOrange:tokens.r4c,SurfaceStatusSurfaceRed:tokens.Y7,SurfaceStatusSurfacePurple:tokens.T4c,SurfaceStatusSurfaceLightBlue:tokens.vAc,SurfaceStatusSurfaceDarkBlue:tokens.NW5,SurfaceStatusSurfaceGreen:tokens.WEH},colorToTokenMap={[tokens.MKX]:"SurfaceStatusSurfaceGray",[tokens.ztc]:"SurfaceStatusSurfaceYellow",[tokens.r4c]:"SurfaceStatusSurfaceOrange",[tokens.Y7]:"SurfaceStatusSurfaceRed",[tokens.T4c]:"SurfaceStatusSurfacePurple",[tokens.vAc]:"SurfaceStatusSurfaceLightBlue",[tokens.NW5]:"SurfaceStatusSurfaceDarkBlue",[tokens.WEH]:"SurfaceStatusSurfaceGreen"},colors=Object.values(colorsMap);var status_module_styles={interactiveStatus:"bp_status_module_interactiveStatus--b3f3d",status:"bp_status_module_status--b3f3d",reverse:"bp_status_module_reverse--b3f3d",circle:"bp_status_module_circle--b3f3d",text:"bp_status_module_text--b3f3d",maxContainer:"bp_status_module_maxContainer--b3f3d",colorSurfaceStatusSurfaceGray:"bp_status_module_colorSurfaceStatusSurfaceGray--b3f3d",colorSurfaceStatusSurfaceYellow:"bp_status_module_colorSurfaceStatusSurfaceYellow--b3f3d",colorSurfaceStatusSurfaceOrange:"bp_status_module_colorSurfaceStatusSurfaceOrange--b3f3d",colorSurfaceStatusSurfaceRed:"bp_status_module_colorSurfaceStatusSurfaceRed--b3f3d",colorSurfaceStatusSurfacePurple:"bp_status_module_colorSurfaceStatusSurfacePurple--b3f3d",colorSurfaceStatusSurfaceLightBlue:"bp_status_module_colorSurfaceStatusSurfaceLightBlue--b3f3d",colorSurfaceStatusSurfaceDarkBlue:"bp_status_module_colorSurfaceStatusSurfaceDarkBlue--b3f3d",colorSurfaceStatusSurfaceGreen:"bp_status_module_colorSurfaceStatusSurfaceGreen--b3f3d"};const Status=(0,react.forwardRef)(((props,forwardedRef)=>{const{text,hideText,interactive,iconPosition="right",icon,color,colorIndex,className,"aria-label":ariaLabel,...rest}=props,backgroundColor=(0,react.useMemo)((()=>{const bgColor=color||(index=>{const colorIndex=(index||0)%colors.length;return Object.values(colorsMap)[colorIndex]})(colorIndex);return colorToTokenMap[bgColor]||"SurfaceStatusSurfaceGray"}),[color,colorIndex]),iconElement=(0,react.useMemo)((()=>{if(!icon)return null;const iconProps={width:"0.875rem",height:"0.875rem",color:tokens.w3v};return interactive||!interactive&&!hideText&&text?(0,react.createElement)(icon,{...iconProps,role:"presentation"}):(0,react.createElement)(icon,{...iconProps,role:"img","aria-label":ariaLabel||text})}),[icon,hideText,interactive,text,ariaLabel]),contents=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[text&&!hideText&&(0,jsx_runtime.jsx)("span",{className:status_module_styles.text,children:text}),iconElement]}),commonClassName=(0,clsx_m.default)(status_module_styles.status,status_module_styles[`color${backgroundColor}`],{[status_module_styles.reverse]:icon&&"left"===iconPosition,[status_module_styles.circle]:hideText}),innerElement=interactive?(0,jsx_runtime.jsx)("button",{...rest,ref:forwardedRef,"aria-label":props["aria-label"]||text,className:(0,clsx_m.default)(status_module_styles.interactiveStatus,commonClassName),type:"button",children:contents}):(0,jsx_runtime.jsx)("span",{...rest,ref:forwardedRef,className:commonClassName,children:contents});return(0,jsx_runtime.jsx)("span",{className:(0,clsx_m.default)(status_module_styles.maxContainer,className),children:innerElement})}));Status.displayName="Status";var isUndefined=__webpack_require__("./node_modules/lodash/isUndefined.js"),isUndefined_default=__webpack_require__.n(isUndefined);var accordion_module_styles_accordionContent="bp_accordion_module_accordionContent--f21e0",accordion_module_styles_accordionContentWrapper="bp_accordion_module_accordionContentWrapper--f21e0",accordion_module_styles_accordionItem="bp_accordion_module_accordionItem--f21e0",accordion_module_styles_accordionFixedContent="bp_accordion_module_accordionFixedContent--f21e0",accordion_module_styles_accordionHeader="bp_accordion_module_accordionHeader--f21e0",accordion_module_styles_accordionHeaderTrigger="bp_accordion_module_accordionHeaderTrigger--f21e0",accordion_module_styles_accordionStatus="bp_accordion_module_accordionStatus--f21e0",accordion_module_styles_accordionTrigger="bp_accordion_module_accordionTrigger--f21e0",accordion_module_styles_accordionTriggerIcon="bp_accordion_module_accordionTriggerIcon--f21e0";const Accordion=Object.assign((props=>(0,jsx_runtime.jsx)($1bf158f521e1b1b4$export$be92b6f5f03c0fe9,{...props})),{Item:props=>{const{loading,loadingAriaLabel,children,className,...rest}=props,accordionItemClasses=(0,clsx_m.default)(accordion_module_styles_accordionItem,className);if(loading)return(0,jsx_runtime.jsx)("div",{...rest,className:accordionItemClasses,children:(0,jsx_runtime.jsx)("button",{"aria-label":loadingAriaLabel,className:accordion_module_styles_accordionTrigger,disabled:!0,type:"button",children:(0,jsx_runtime.jsx)(Ghost,{variant:"rectangle"})})});if("fixed"in props)return(0,jsx_runtime.jsx)("div",{...rest,className:accordionItemClasses,children:(0,jsx_runtime.jsx)("div",{className:(0,clsx_m.default)({[accordion_module_styles_accordionFixedContent]:Boolean(children)}),children})});const{status,title,disabled,...itemRest}=props;return(0,jsx_runtime.jsxs)($1bf158f521e1b1b4$export$6d08773d2e66f8f2,{...itemRest,className:accordionItemClasses,children:[(0,jsx_runtime.jsx)($1bf158f521e1b1b4$export$8b251419efc915eb,{asChild:!0,children:(0,jsx_runtime.jsx)($1bf158f521e1b1b4$export$41fb9f06171c75f4,{className:accordion_module_styles_accordionTrigger,disabled,children:(0,jsx_runtime.jsxs)("h4",{className:accordion_module_styles_accordionHeader,children:[(0,jsx_runtime.jsx)("span",{children:title}),(0,jsx_runtime.jsxs)("div",{className:accordion_module_styles_accordionHeaderTrigger,children:[(value=status,!isUndefined_default()(value)&&(0,jsx_runtime.jsx)(Status,{className:accordion_module_styles_accordionStatus,color:tokens.vAc,text:`${status}`})),(0,jsx_runtime.jsx)(PointerChevron,{"aria-hidden":"true",className:accordion_module_styles_accordionTriggerIcon})]})]})})}),(0,jsx_runtime.jsx)($1bf158f521e1b1b4$export$7c6e2c02157bb7d2,{className:(0,clsx_m.default)(children&&accordion_module_styles_accordionContent),children:(0,jsx_runtime.jsx)("div",{className:accordion_module_styles_accordionContentWrapper,children})})]});var value}})},"./node_modules/@radix-ui/react-collection/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>$e02a7d9cb1dc128c$export$c74125a8e3af6bb2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_1__.A)(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null),itemMap=react__WEBPACK_IMPORTED_MODULE_0___default().useRef(new Map).current;return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CollectionProviderImpl,{scope,itemMap,collectionRef:ref},children)},COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.s)(forwardedRef,context.collectionRef);return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX,{ref:composedRefs},children)})),ITEM_SLOT_NAME=name+"CollectionItemSlot",ITEM_DATA_ATTR="data-radix-collection-item",CollectionItemSlot=react__WEBPACK_IMPORTED_MODULE_0___default().forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react__WEBPACK_IMPORTED_MODULE_0___default().useRef(null),composedRefs=(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.s)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react__WEBPACK_IMPORTED_MODULE_0___default().useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX,{[ITEM_DATA_ATTR]:"",ref:composedRefs},children)}));return[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react__WEBPACK_IMPORTED_MODULE_0___default().useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}},"./node_modules/@radix-ui/react-direction/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{jH:()=>$f631663db3294ace$export$b39126d51d94e6f3});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const $f631663db3294ace$var$DirectionContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(void 0);function $f631663db3294ace$export$b39126d51d94e6f3(localDir){const globalDir=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f631663db3294ace$var$DirectionContext);return localDir||globalDir||"ltr"}},"./node_modules/lodash/isUndefined.js":module=>{module.exports=function isUndefined(value){return void 0===value}}}]);