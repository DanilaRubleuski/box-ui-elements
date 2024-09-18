(()=>{"use strict";var deferred,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({903:"icon-content-FileUpload32-stories",939:"icon-content-FileKeynote32-stories",1237:"icon-fill-FileVector16-stories",1336:"illustration-Sandbox140-stories",1787:"icon-line-Trash16-stories",1971:"icon-fill-CircleCloseButton24-stories",2116:"icon-logo-UserSettings32-stories",2262:"elements-content-explorer-stories-ShareDialog-stories",2447:"icon-logo-AdminReferences32-stories",2513:"icon-line-BoxDev16-stories",2590:"icons-collections-IconCollectionsStarFilled-stories",2856:"illustration-TaskList56-stories",2912:"icon-fill-BoxNotes16-stories",3028:"icon-fill-DocGenIcon-stories",3085:"icon-line-AvatarPlusBadge16-stories",3088:"icon-line-ExportArrow16-stories",3089:"icon-fill-Task16-stories",3223:"icon-line-CloudWithArrow16-stories",3568:"icon-logo-AccountBilling32-stories",3812:"icon-fill-FilePresentation16-stories",3902:"illustration-Certificate56-stories",4187:"icon-fill-FileKeynote16-stories",4317:"components-sidebar-toggle-button-SidebarToggleButton-stories",4404:"icon-content-Notifications32-stories",4546:"styles-colors-stories",5168:"icon-fill-Skills16-stories",5620:"illustration-EmailVerification140-stories",5695:"icon-line-DocInfo16-stories",5712:"icon-logo-NumbersForMac32-stories",5781:"illustration-Clock140-stories",5817:"icon-line-Apps16-stories",5841:"components-badge-BetaBadge-stories",5947:"icon-fill-Gear16-stories",5953:"icon-logo-BoxLogo-stories",5988:"illustration-CustomerSupport140-stories",6610:"icon-content-FilePages32-stories",6788:"components-button-group-ButtonGroup-stories",7253:"icon-line-CollectionStar16-stories",7390:"components-image-tooltip-ImageTooltip-stories",7439:"components-pill-selector-dropdown-PillSelectorDropdown-stories",7825:"elements-content-sharing-stories-ContentSharing-stories",7851:"icon-line-CoAuthoringBadge16-stories",7945:"illustration-FolderFloat140-stories",8028:"components-nav-sidebar-NavSidebar-stories",8068:"icon-fill-AnnotationsHighlight16-stories",8117:"components-toggle-Toggle-stories",8178:"icon-fill-SignOthers32-stories",8390:"icons-icons-stories",8405:"icon-logo-BoxSign28-stories",8548:"icon-fill-ArrowArcRight-stories",8673:"icon-fill-Sign16-stories",8768:"icon-fill-FileWord16-stories",8910:"illustration-MarketingPlan56-stories",9359:"icons-collections-IconCollectionsBolt-stories",9534:"icon-content-SignRequest32-stories",9668:"content-open-with",9683:"icon-line-Retry16-stories",9684:"icon-content-Security32-stories",10301:"icon-line-MoveCopy16-stories",10316:"icon-content-FileWord32-stories",10477:"icon-line-ArrowBoxRight16-stories",10612:"icon-fill-PaperAirplane16-stories",10620:"icon-logo-Security32-stories",10926:"icon-fill-Info16-stories",10999:"icon-fill-FileCode16-stories",11274:"icon-fill-Hamburger20-stories",11531:"components-label-Label-stories",11535:"illustration-MoneyStack56-stories",12143:"icon-fill-FilePowerpoint16-stories",12439:"icon-content-FolderExternal32-stories",12856:"icon-content-FileSpreadsheet32-stories",12903:"icon-content-FileZip32-stories",12964:"icon-fill-Help20-stories",13516:"icon-line-InfoBadge16-stories",13575:"illustration-Microphone140-stories",14080:"icon-logo-DeviceTrust32-stories",15010:"components-link-stories-LinkGroup-stories",15300:"elements-content-sidebar-stories-MetadataSidebarRedesign-stories",15375:"illustration-Transfers140-stories",15388:"icon-content-Mobile32-stories",15553:"components-link-stories-LinkPrimaryButton-stories",15555:"components-badge-UpgradeBadge-stories",15658:"illustration-EmptyStateDetails-stories",15933:"icon-line-Question16-stories",16289:"components-form-elements-text-area-TextArea-stories",16314:"components-text-input-TextInput-stories",16575:"icons-collections-collections-stories",16626:"icon-fill-Search16-stories",16640:"icon-fill-X16-stories",16852:"components-dropdown-menu-DropdownMenu-stories",17045:"icon-fill-PlusBadge16-stories",17075:"icon-line-TriangleAlert16-stories",17186:"icon-fill-MoveCopy16-stories",17252:"icon-content-FilePdf32-stories",17398:"icon-line-Sign16-stories",17551:"components-media-stories-MediaBody-stories",17677:"illustration-ContractorId56-stories",17822:"icon-fill-Scribble16-stories",17875:"icon-fill-LightningBolt16-stories",17978:"components-form-elements-formik-Formik-stories",17991:"components-breadcrumb-Breadcrumb-stories",18088:"icon-fill-SignMeOthers32-stories",18314:"icon-fill-Ribbon16-stories",18474:"icon-line-AlarmClock16-stories",18618:"components-pill-cloud-PillCloud-stories",18650:"icon-line-SignTinycon16-stories",18866:"components-footer-indicator-FooterIndicator-stories",18869:"icon-line-Folder16-stories",18905:"icon-fill-Upload16-stories",18925:"icon-line-Unlock16-stories",18943:"icon-fill-Lock16-stories",19104:"illustration-BoxDrive140-stories",19302:"icon-fill-CollectionStar16-stories",19398:"icon-fill-Feed16-stories",19436:"icon-line-EnvelopeBadge16-stories",19499:"icon-line-Bug16-stories",19616:"icon-content-FileNumbers32-stories",19714:"elements-content-open-with-stories-ContentOpenWith-stories",19821:"icon-line-CheckmarkBadge16-stories",20013:"icon-line-CollectionPlus16-stories",20118:"icon-fill-FileSlides16-stories",20133:"elements-content-sidebar-activity-feed-comment-stories-BaseComment-stories",20199:"icon-line-LockBadge16-stories",20356:"icon-fill-CircleBackButton24-stories",20650:"icon-line-Pencil16-stories",21529:"icon-line-Email16-stories",21669:"icon-line-Hidden16-stories",21692:"icon-fill-ArrowForward16-stories",22062:"icon-line-Relay16-stories",23069:"icon-fill-FileImage16-stories",23584:"illustration-HatWand140-stories",23586:"icon-content-FileSlides32-stories",23661:"illustration-AppSupport140-stories",23673:"styles-typography-stories",23734:"components-plain-button-PlainButton-stories",23738:"icon-fill-BoxDev16-stories",23784:"icon-content-FileSheets32-stories",23831:"icon-fill-FileCopy16-stories",24059:"components-collapsible-Collapsible-stories",24455:"features-collapsible-sidebar-CollapsibleSidebar-stories",24476:"icon-content-UserSettings32-stories",24546:"icon-fill-ClearBadge16-stories",24563:"components-draft-js-editor-DraftJSEditor-stories",25114:"illustration-Bell140-stories",25152:"icon-content-FileBookmark32-stories",25369:"icon-fill-AlertBadge16-stories",25617:"icon-line-Rocket16-stories",25720:"icon-line-Help16-stories",25829:"icon-fill-ExportArrow16-stories",26248:"icon-fill-FileThreeD16-stories",26324:"components-modal-stories-ModalActions-stories",26493:"icon-content-FileDefault32-stories",26555:"icon-content-ContentSharing32-stories",26982:"icon-fill-Trash16-stories",27066:"icon-fill-Collection16-stories",27728:"illustration-Files140-stories",27755:"illustration-Files-stories",27873:"icon-line-Plus16-stories",27916:"icon-fill-Caret8-stories",27969:"icon-fill-FileDocs16-stories",29321:"icon-line-Sharrow16-stories",29731:"icon-logo-ContentSharing32-stories",29811:"components-tooltip-Tooltip-stories",29854:"illustration-HandshakeAgreement56-stories",30328:"components-accessible-svg-AccessibleSVG-stories",30683:"illustration-FolderStar140-stories",30749:"illustration-CreativeApproval56-stories",30919:"illustration-CustomSkill56-stories",31023:"icon-content-FileVideo32-stories",31061:"components-contact-datalist-item-ContactDatalistItem-stories",31568:"icon-fill-Classify16-stories",31744:"icon-fill-UserSettings16-stories",32060:"icon-fill-CaretBadge16-stories",32066:"icons-collections-IconCollectionsStar-stories",32242:"icon-fill-CheckmarkBadge16-stories",32286:"components-error-mask-ErrorMask-stories",33264:"components-category-selector-CategorySelector-stories",33564:"icon-fill-FileDwg16-stories",34009:"icon-line-PencilBadge16-stories",34148:"icon-line-Key16-stories",34319:"elements-content-explorer-stories-tests-ShareDialog-visual-stories",34494:"icon-logo-Reporting32-stories",34705:"components-link-stories-Link-stories",35084:"elements-content-sidebar-activity-feed-comment-components-stories-BaseCommentInfo-stories",35535:"icon-line-Undo16-stories",35684:"icon-line-CommentBubble16-stories",35751:"versions-sidebar",35758:"icons-collections-IconCollectionsFilled-stories",35943:"elements-content-explorer-stories-DeleteConfirmationDialog-stories",36155:"icon-fill-FileVideo16-stories",36206:"skills-sidebar",36405:"elements-content-preview-stories-ContentPreview-stories",36480:"icon-logo-ManageContent32-stories",36510:"components-label-pill-LabelPill-stories",36665:"icon-line-AlertBubble16-stories",36965:"icon-content-FileBoxNote32-stories",37457:"icon-logo-TroubleShootingTools32-stories",38416:"components-context-menu-ContextMenu-stories",38505:"icon-fill-Pencil16-stories",38803:"icon-fill-FileIndesign16-stories",39207:"icon-fill-SignFieldSignature16-stories",39689:"icon-line-FileDescription16-stories",39694:"icon-fill-FolderPersonal16-stories",39716:"details-sidebar",40062:"illustration-MonthlyReport56-stories",40292:"illustration-EmptyStatePreviewActivity140-stories",40359:"icon-logo-BoxAiLogo-stories",40378:"illustration-Keynote56-stories",40841:"icon-fill-Code16-stories",41726:"illustration-LegalContract56-stories",42075:"components-nudge-Nudge-stories",42603:"components-media-stories-MediaFigure-stories",42867:"icon-logo-KeynoteForMac32-stories",43703:"icon-fill-CreditCard16-stories",43837:"icon-line-AvatarBadge16-stories",44071:"components-modal-stories-ModalDialog-stories",44343:"components-menu-stories-Menu-stories",44389:"elements-content-uploader-stories-ContentUploader-stories",45114:"illustration-Playbook56-stories",45344:"icon-fill-FileBookmark16-stories",46575:"icon-fill-TwoPeople16-stories",46601:"elements-content-sidebar-activity-feed-comment-components-stories-BaseCommentMenu-stories",46914:"features-virtualized-table-DraggableVirtualizedTable-stories",47111:"components-avatar-Avatar-stories",47159:"icon-fill-Relay16-stories",47592:"features-unified-share-modal-stories-UnifiedShareModal-stories",47713:"icon-content-FolderUpload32-stories",48139:"metadata-sidebar",48386:"elements-content-uploader-stories-tests-ContentUploader-visual-stories",48442:"components-thumbnail-card-ThumbnailCard-stories",48800:"icon-fill-AvatarBadge16-stories",48929:"icon-fill-FolderShared16-stories",49001:"components-button-Button-stories",49052:"icon-content-FileThreeD32-stories",49440:"icon-content-FileDwg32-stories",50194:"icon-fill-AnnotationsDrawing16-stories",50482:"icons-collections-IconCollections-stories",50571:"icon-content-FilePowerpoint32-stories",50757:"icon-fill-ClockBadge16-stories",51346:"icon-content-FilePhotoshop32-stories",51366:"components-primary-button-PrimaryButton-stories",51421:"elements-content-explorer-stories-ContentExplorer-stories",51634:"components-loading-indicator-LoadingIndicator-stories",51659:"components-logo-Logo-stories",51697:"icon-content-FileDocs32-stories",51701:"icon-line-ClockBadge16-stories",51828:"components-tab-view-TabView-stories",52023:"icon-fill-CollectionBolt16-stories",52212:"components-draggable-list-DraggableList-stories",53109:"icon-fill-FileBoxNote16-stories",54222:"components-close-button-CloseButton-stories",54360:"icon-line-Gear16-stories",54763:"illustration-FinanceContract56-stories",55017:"icon-line-Redo16-stories",55218:"icon-fill-Download16-stories",55491:"icon-fill-BarChart16-stories",55494:"components-select-button-SelectButton-stories",55790:"illustration-NotesStar140-stories",55837:"features-shared-link-modal-stories-SharedLink-stories",55908:"icon-content-CustomSetup32-stories",55944:"icon-fill-FileAudio16-stories",56717:"icon-fill-InfoBadge16-stories",56951:"icon-content-FileCode32-stories",57093:"icon-line-CircleX16-stories",57271:"icon-line-RotatingArrows16-stories",57277:"content-sidebar",57316:"icon-line-ExclamationMarkBadge16-stories",57659:"icon-line-Tool16-stories",57974:"icon-logo-HowToGuides32-stories",58625:"icon-content-FileXdw32-stories",58724:"features-shared-link-modal-stories-SharedLinkModal-stories",58801:"icon-fill-Move16-stories",58993:"icon-fill-Megaphone20-stories",59444:"components-selector-dropdown-SelectorDropdown-stories",59558:"illustration-ErrorState404140-stories",59748:"illustration-PlanSelection140-stories",59877:"illustration-FolderPlane140-stories",59897:"icon-line-List16-stories",59944:"illustration-RelayPlanet140-stories",60068:"icon-logo-Mobile32-stories",60303:"icon-line-CoEdit16-stories",60699:"icon-fill-Arrow16-stories",60721:"icon-logo-HelpArticle32-stories",61486:"icon-fill-Apps16-stories",61569:"icon-fill-Activity16-stories",61680:"icon-fill-Printer16-stories",61818:"icon-fill-Picture16-stories",61933:"icon-fill-FileIllustrator16-stories",62073:"icon-fill-SignMe32-stories",62102:"components-count-badge-CountBadge-stories",62274:"illustration-FolderArrow140-stories",62422:"icon-content-PlatformSandbox32-stories",62833:"icon-line-GlobeBadge16-stories",62867:"components-notification-stories-NotificationsWrapper-stories",63511:"components-flyout-Flyout-stories",63640:"icon-fill-FileCanvas16-stories",64016:"icon-fill-Calendar16-stories",64575:"components-loading-indicator-LoadingIndicatorWrapper-stories",65202:"components-media-stories-MediaMenu-stories",65289:"icon-fill-PointerChevronDown24-stories",65668:"icon-logo-BoxSign32-stories",65777:"elements-content-picker-stories-ContentPicker-stories",66199:"icon-logo-AdobeAcrobat32-stories",66322:"utils-createTheme-stories",66332:"illustration-Handshake56-stories",66427:"illustration-Envelope140-stories",66443:"icon-fill-RelayClassic16-stories",66561:"icon-line-Download16-stories",67115:"components-time-ReadableTime-stories",67142:"icon-fill-Plus16-stories",67426:"icon-fill-FilePhotoshop16-stories",67545:"icon-line-History16-stories",68116:"features-security-cloud-game-stories-SecurityCloudGame-stories",68231:"icon-fill-Checkmark16-stories",68234:"icon-content-FolderPersonal32-stories",68544:"illustration-Discount140-stories",69022:"components-inline-error-InlineError-stories",69038:"icon-line-SyncArrows16-stories",69066:"icon-logo-PagesForMac32-stories",69262:"components-form-elements-form-Form-stories",69405:"icon-content-FolderShared32-stories",69638:"icon-line-View16-stories",69841:"illustration-Megaphone140-stories",70016:"icon-fill-FileSpreadsheet16-stories",70214:"icon-content-PlatformCam32-stories",70392:"icon-line-Video16-stories",70412:"icon-line-Lock16-stories",71304:"components-radio-stories-RadioGroup-stories",71666:"icon-fill-GlobeBadge16-stories",71705:"illustration-CertificateSigning56-stories",71706:"icon-fill-CollectionPlus16-stories",71716:"docgen-sidebar",72160:"icon-line-LinkBadge16-stories",72338:"icon-fill-SignFieldCheckBox16-stories",72364:"icon-line-CollectionBolt16-stories",72413:"icon-content-FileIllustrator32-stories",72577:"icon-content-FileVector32-stories",72643:"icon-content-FileExcel32-stories",72704:"icon-content-FilePresentation32-stories",72886:"icon-line-Upload16-stories",72941:"icon-line-CircleCheck16-stories",73032:"icon-line-XBadge16-stories",73258:"components-inline-notice-InlineNotice-stories",73887:"components-form-elements-text-input-TextInput-stories",74082:"icon-fill-FilePages16-stories",74253:"icon-content-FileText32-stories",74362:"components-date-picker-DatePicker-stories",74538:"components-time-input-TimeInput-stories",74594:"metadata-sidebar-redesigned",74675:"illustration-EmployeeReview56-stories",74783:"icon-fill-FileZip16-stories",74907:"illustration-ChangeOrder56-stories",74910:"components-guide-tooltip-GuideTooltip-stories",74925:"icon-line-Collection16-stories",75078:"icon-fill-Folder16-stories",75256:"illustration-MetricsReview56-stories",75809:"illustration-SalesContract56-stories",76748:"illustration-TrashEmpty140-stories",77151:"icon-fill-FolderExternal16-stories",77540:"icon-fill-FilePdf16-stories",77731:"components-badge-Badge-stories",78401:"icon-fill-FileDefault16-stories",78436:"elements-content-explorer-stories-tests-RenameDialog-visual-stories",78657:"icon-line-Link16-stories",78789:"illustration-EmptyStateFolder140-stories",79348:"components-datalist-item-DatalistItem-stories",79415:"components-checkbox-Checkbox-stories",79523:"icon-fill-FileExcel16-stories",79540:"icon-fill-FileNumbers16-stories",79599:"features-sandbox-banner-SandboxBanner-stories",79711:"components-text-input-with-copy-button-TextInputWithCopyButton-stories",80128:"icon-fill-Minus16-stories",80140:"illustration-DiscoDanceParty140-stories",80164:"illustration-BoxMobile140-stories",80647:"elements-content-sidebar-activity-feed-activity-feed-stories-ActivityFeed-stories",80684:"icon-fill-CloudUpload16-stories",80722:"components-menu-stories-SelectMenuLinkItem-stories",81170:"icon-fill-FileDicom16-stories",81496:"icon-content-DeviceTrust32-stories",81721:"icon-line-EmailAddress16-stories",81726:"icon-fill-SignFieldTextInput16-stories",81815:"icon-line-CrosshairRegion32-stories",82555:"illustration-AllNewBox140-stories",82589:"illustration-BudgetApproval56-stories",82735:"components-header-Header-stories",83363:"icon-line-AvatarXBadge16-stories",83645:"icon-line-BoxAi-stories",83659:"components-section-Section-stories",84348:"icon-fill-Tag16-stories",84355:"icon-line-Collaborations16-stories",84377:"icon-content-FileImage32-stories",84626:"icon-content-RetentionPolicyModifiable32-stories",84818:"icon-fill-InProgress16-stories",84890:"icon-logo-IconBoxApp512-stories",85055:"icon-line-TextLeft16-stories",85627:"icon-line-Template16-stories",86153:"icon-line-MetadataBadge16-stories",86579:"illustration-CollectionStar140-stories",86622:"icon-line-Avatar16-stories",87026:"icon-logo-Apps32-stories",87165:"illustration-UploadCloud140-stories",87213:"icon-content-RetentionPolicyNonModifiable32-stories",87408:"icon-fill-FileSheets16-stories",87438:"icon-line-Checkmark16-stories",87495:"icon-logo-ManageUsers32-stories",88767:"components-radar-RadarAnimation-stories",88985:"components-fieldset-Fieldset-stories",89132:"illustration-LimitedApp56-stories",89294:"illustration-Gavel56-stories",90176:"icon-content-FileCanvas32-stories",90510:"icon-line-Shield16-stories",90715:"components-modal-stories-Modal-stories",90904:"icon-fill-Filter16-stories",91350:"icon-fill-Activity20-stories",91850:"icon-fill-AnnotationsRegion16-stories",91903:"components-ghost-Ghost-stories",91936:"illustration-UserOrbit56-stories",92379:"icon-fill-ArrowSort16-stories",92385:"elements-content-sidebar-stories-tests-MetadataSidebarRedesign-visual-stories",92393:"icon-logo-AdminFaq32-stories",93025:"components-link-stories-LinkButton-stories",93240:"elements-content-explorer-stories-tests-DeleteConfirmationDialog-visual-stories",93325:"icon-fill-EmailNotification16-stories",93356:"illustration-EmployeeId56-stories",93413:"icon-fill-Workflow16-stories",93901:"components-select-Select-stories",93970:"elements-content-explorer-stories-tests-ContentExplorer-visual-stories",94128:"icon-content-FileXbd32-stories",94209:"icon-fill-FileText16-stories",94236:"components-media-query-stories-MediaQuery-stories",94665:"features-shared-link-settings-modal-SharedLinkSettingsModal-stories",95049:"icon-content-Workflow32-stories",95271:"icon-content-WorkflowTemplate32-stories",95377:"icon-line-Star16-stories",95415:"illustration-Missing140-stories",95536:"illustration-CustomTemplate56-stories",95563:"icon-content-FileIndesign32-stories",95912:"icon-line-ClassificationBadge16-stories",96551:"activity-sidebar",96600:"illustration-LegalFolder56-stories",97052:"icon-logo-CustomSetup32-stories",97240:"illustration-ProjectFolder56-stories",97309:"illustration-RecentFiles140-stories",97336:"icon-content-FileAudio32-stories",97418:"illustration-Unplugged140-stories",97643:"icons-collections-IconCollectionsAdd-stories",97677:"icon-line-GenericCopy16-stories",97728:"icon-line-ClockArrow16-stories",97955:"components-radio-stories-RadioButton-stories",98268:"icon-logo-Notifications32-stories",98531:"components-notification-stories-Notification-stories",98551:"illustration-CreativeAssets56-stories",98659:"icon-line-Plane16-stories",98719:"components-media-stories-Media-stories",98843:"icon-line-Report16-stories",98845:"illustration-CustomApp56-stories",98973:"elements-content-sidebar-stories-ContentSidebar-stories",99079:"components-badge-TrialBadge-stories",99236:"icon-fill-Overflow16-stories",99338:"icon-fill-Alert16-stories",99390:"icon-line-Power16-stories",99578:"icon-content-FileDicom32-stories"}[chunkId]||chunkId)+"."+{631:"71deb0e3",871:"5675b9b5",903:"27c2f981",939:"29a97952",1237:"e4b22373",1327:"2ac97138",1336:"3f7c0f49",1552:"fa176768",1787:"350bfa5d",1971:"c47f6c13",2116:"3a318258",2262:"e49fa515",2447:"07f84999",2513:"af3de06a",2520:"468fb565",2590:"dd28da9e",2856:"c70db194",2912:"6d11a2c0",3028:"7188aae1",3085:"14fe194a",3088:"764687d1",3089:"d2e34fe0",3223:"11e8e744",3568:"96d894b0",3812:"1562e265",3902:"2c38ae4b",4187:"a719603a",4317:"1dc0deed",4404:"60c525c7",4546:"37eb3dfa",4660:"c7822430",4904:"3bfa6b1d",5168:"f8e25c5c",5620:"c61fecfe",5695:"9f507610",5712:"ef198a52",5781:"6e81b2ba",5817:"df5b9fcf",5841:"1c653c17",5947:"6efe9e7c",5953:"c77a3248",5988:"184cb470",6588:"f5e9939d",6610:"f0017d47",6788:"59abd5fe",7253:"22e91b2a",7390:"ba73cf1f",7439:"2d240137",7825:"4781b2fd",7851:"08f10e9b",7871:"5ffd4140",7945:"e47ee43a",8028:"3c9fefca",8068:"d0aa9f6b",8117:"7e8ef6ff",8178:"d1d356c8",8390:"6faf720c",8405:"41476e36",8548:"a94c56b3",8673:"3ae0c63d",8768:"cc6db8e1",8910:"411a5072",9359:"368ae464",9534:"1006ab3d",9668:"7f91bd27",9679:"e72830ae",9683:"7bad38cc",9684:"4fe1e473",10301:"03dd132f",10316:"b7f004e9",10477:"b8a49fc5",10612:"2ff4aa13",10620:"9bc8a851",10926:"43acc90d",10999:"839eff3b",11268:"228a3240",11274:"8d4697dd",11531:"1dc1a7d0",11535:"9e59e164",12143:"fa499968",12238:"66fc62da",12439:"3cdcc3c7",12470:"f6893cf9",12856:"8edfd7bb",12903:"478094c7",12964:"7232e873",13516:"a55e095b",13575:"d1dedfbf",13962:"5710ec66",14080:"0768a686",15010:"4790885a",15017:"d846389c",15108:"40afd4df",15300:"ccd16e44",15375:"d70e9bf6",15388:"7e0f04ff",15389:"bb102cff",15553:"c3419bf3",15555:"1a6105a7",15658:"c8ad9832",15718:"394860bd",15933:"7b10f571",16030:"0245a5d6",16289:"94b06dd4",16314:"7895d338",16575:"ee8cba34",16626:"8b3c0b2f",16640:"1af507eb",16852:"7858afb1",17045:"6ad2b119",17075:"ffb60114",17186:"c0d1284a",17252:"71a51682",17398:"bd7e1e6a",17551:"f1447d5c",17677:"6c80e416",17822:"a67933df",17875:"387d4bbb",17978:"40bad2ae",17991:"62075440",18032:"3e9dc899",18038:"9dc85bc1",18088:"45cf332e",18314:"eff48a7f",18474:"d6c671d0",18618:"fe9587b3",18650:"eaa506b0",18866:"77ee1712",18869:"96f00a27",18905:"d8e8b499",18925:"5e5700f0",18943:"c12a9535",18944:"882aad04",19104:"e6bfc205",19302:"27938bd5",19398:"33e99f4e",19436:"135250e6",19499:"aca03d18",19616:"b036a995",19714:"11d6235d",19821:"6b701099",20013:"fa66ddf1",20118:"8a439508",20133:"68e55ca5",20199:"1f886f87",20312:"08fc7474",20356:"aa0512dc",20650:"435c3f5b",21529:"f54f0c5a",21669:"896bbe5c",21692:"4b18dd33",22042:"3adabd7a",22062:"2383a37c",23069:"cff75a3e",23584:"531ffe07",23586:"f18c739a",23661:"d99086b1",23673:"af91d3b4",23734:"71fe4743",23738:"2372b81d",23784:"77ad7b2d",23831:"1e50cd5f",24059:"53cd2066",24455:"3f060378",24476:"9355090a",24546:"d1bb85f0",24563:"bdb236a9",25114:"14b169f6",25152:"a6c13c64",25369:"56b36115",25617:"42a1c03c",25720:"f56296ef",25829:"7a8ae04a",26248:"7e97a76c",26324:"2022af04",26493:"3a3f86b1",26555:"a4ece8c6",26982:"18e31e43",27066:"7867bd4c",27728:"d6d0a08e",27755:"8ea7142c",27873:"77348890",27916:"6ee52889",27969:"44609758",29321:"6fa0a6b7",29686:"f0fcd521",29731:"4800b109",29811:"5af9cafb",29847:"e24e6edb",29854:"72ac8c9b",30328:"7f0a7d51",30683:"c277c00b",30749:"c25d6621",30919:"dce3e8ed",31023:"ff5be7ec",31061:"4907525d",31568:"7a6c567e",31744:"c414251f",32060:"d1e6dfa3",32066:"07082adf",32242:"f68222be",32286:"9574f496",32989:"14935ae9",33125:"1350cd91",33264:"d229adca",33416:"52b368f2",33564:"fc0e53c0",34009:"3b2c1d45",34148:"f8d549d5",34293:"618a79ee",34319:"ac39db31",34494:"0184a924",34545:"556e1d0c",34705:"527b5b7d",35051:"ede09902",35084:"86913ad9",35535:"d889fbcb",35684:"92a0dac0",35751:"3ac9813e",35758:"d24e4c5a",35943:"2a2d8eed",36155:"ee4e9a0b",36206:"37d635e9",36405:"8c630da9",36480:"430733bd",36481:"189d3faa",36510:"49f1dd8d",36665:"b1d923f7",36965:"155543bc",37364:"fe520c53",37457:"6810193d",38416:"f7914f90",38505:"a562e93a",38803:"c0555147",39199:"4fc01c48",39207:"dcdb14bd",39557:"efe42c01",39689:"7c0e429c",39694:"dcecfbc4",39716:"1e17df57",40062:"6ae8c3e6",40292:"a09902cd",40359:"509a3aa0",40378:"59f17df5",40524:"2dcab4b1",40841:"13ec755b",41726:"063a3e50",42075:"f084508f",42198:"6880be8b",42603:"24921435",42867:"a50b0f2b",43703:"c0d30154",43837:"e1fe6037",44071:"1177f327",44343:"ef221091",44389:"94b27a24",44393:"b0f0b85b",44827:"4ecf2935",45114:"b188685e",45344:"02d515df",45570:"53d07b9d",46575:"eaede222",46601:"56d6ebad",46914:"095486b2",47111:"4739fb33",47159:"63c305ef",47187:"2edc8e46",47495:"e3b4b658",47592:"b52fc180",47648:"701b9cc5",47713:"0e34c585",48139:"b6acea39",48221:"0f1b1f03",48368:"758ffc38",48386:"a5fe16a6",48442:"e8db8b78",48800:"8e5dc526",48923:"18c1e95a",48929:"f534f508",49001:"26b542d1",49052:"fe99d3c0",49440:"474524d7",49684:"e70b8735",50194:"906cf752",50482:"54bb0cfe",50571:"54977f0d",50703:"84b404bf",50757:"1b6ff6de",50821:"ca15d816",51346:"fffc874b",51366:"649e5a8c",51421:"5c0891bf",51634:"14cd8eb9",51659:"4ceb395b",51697:"263d41cb",51701:"ee130aa0",51784:"bfa5446e",51828:"5eb49b5a",52023:"c6d6f990",52212:"33ece3ff",53109:"8f75ec00",54222:"fbdb0cb9",54360:"70741756",54671:"774afdd0",54763:"5596749f",55017:"1872d174",55041:"008d5a16",55218:"5ba0641d",55491:"e54d67b2",55494:"4c7a6d02",55790:"fe29e093",55837:"67eb1fb0",55908:"47e87c4b",55944:"9b6ae305",56347:"35da9b91",56408:"5fb68023",56717:"040d1118",56799:"7c0d3541",56951:"bb41d360",57093:"2d7bdef7",57271:"8df18903",57277:"8d688a91",57316:"498d2b7f",57659:"e8a87c2d",57974:"793bad57",58625:"b2a5b645",58724:"96d6588d",58801:"d8ad0fd6",58993:"18a02ad6",59444:"ffeeba8b",59558:"6977e192",59748:"0cb8d8f4",59877:"5d65d10e",59897:"cdbcb251",59944:"75dfee35",60068:"74770cc7",60303:"f4ac44d9",60699:"96003fe8",60721:"5a6a98df",61486:"a2669bdf",61561:"00155e59",61569:"fd4fc712",61680:"5d033580",61818:"c4a57b2a",61933:"a14e6666",62073:"3d6fea0f",62102:"0ea40bc7",62274:"15968600",62422:"c5fe3ae8",62833:"19399734",62867:"a61cdd7f",63374:"c7c3207b",63511:"5c8cb6b4",63640:"a27b437f",64016:"7a10da71",64575:"c3f703aa",65202:"cfa694a1",65289:"8fe9e74e",65366:"7736ad96",65668:"4ce6d909",65777:"d47c4377",65984:"d335ee20",66199:"e3a151fd",66322:"f0405971",66332:"e9772ee9",66427:"aa1dd310",66443:"ee46e25b",66561:"9e064127",67115:"70b347cf",67142:"b5060a2b",67426:"75c66bb0",67545:"d562164c",68116:"f2d39c6c",68231:"0ed4725e",68234:"d11dc8af",68544:"3fc9391a",69014:"a43088f6",69022:"c6e19706",69038:"7ec42064",69066:"f143bec6",69181:"64b9a673",69243:"5b44ed2e",69262:"33ff1f6a",69405:"45d5e043",69638:"b17140f5",69841:"730d34ff",70016:"96f3b390",70214:"26aa0fd4",70392:"e88404e6",70412:"deb01182",71304:"25aaec19",71666:"14c27b1c",71705:"a1ecafd0",71706:"40ac5fca",71716:"322e27ec",72160:"188ea348",72209:"3087e7ba",72338:"807fe9c0",72364:"1436f415",72413:"02e8109d",72577:"4e0d7906",72643:"45259ccc",72704:"1d9e1c74",72886:"e757ac4b",72941:"a64b6a3c",73032:"cbec621a",73258:"5167263e",73887:"97e94d9e",74082:"533f5047",74253:"2439b882",74362:"63f23c81",74538:"9bd20be8",74594:"a8e9423f",74675:"3463ae00",74783:"4508868b",74907:"f308f884",74910:"4416874b",74925:"5722aef3",74993:"1a32265d",75025:"dd38f297",75078:"34aabea1",75256:"cc7f3bd2",75695:"95f7eb0d",75809:"221f15c1",75872:"b30196fa",76516:"ca1c978d",76665:"5f2f4530",76748:"1281d920",76979:"5f3f51d0",77074:"8b40b3e3",77140:"64489919",77151:"62313d06",77540:"fbeb0828",77629:"fcd2cc6b",77687:"8b0f4b41",77731:"21d3ce27",77997:"5d91feac",78401:"165fb387",78436:"417e427e",78657:"1f5d9cc8",78789:"63b2dc54",79348:"4e062587",79352:"6ed5f8d4",79415:"6d9bd1bb",79523:"c09a6b20",79540:"bdb3da91",79599:"cdef7933",79711:"259f8b4c",80128:"2bef1b34",80140:"e30ef8cd",80164:"fd744d08",80172:"59315ed0",80180:"9fe4a4f0",80647:"2e3bc4f1",80684:"9b04b707",80722:"52164e7c",81170:"9400d410",81172:"67fc8b01",81496:"72414458",81550:"18534dfe",81721:"60369da6",81726:"aa4cb219",81815:"8930a4e1",81903:"8fda3196",82523:"c26e63f5",82555:"29182f99",82589:"559b77de",82735:"0ca5f40a",83363:"1b89a6a0",83645:"e5e09d68",83659:"fd42873f",83829:"df3a06a4",84348:"6219286c",84355:"f4ccfa97",84377:"894185f5",84626:"fc256418",84818:"435f88f8",84890:"690a1119",85055:"e830919b",85266:"679ea8f4",85331:"55cff912",85627:"de31ea7e",86153:"54a9de64",86579:"7bb9e481",86622:"8646e44e",86946:"0355743d",87026:"b38ba190",87165:"21dc5e9c",87213:"4cc90d92",87408:"670cbc21",87438:"cabc0d6e",87495:"320e2088",88280:"1ac8cb63",88544:"54249048",88767:"dc467806",88985:"78f92549",89132:"00e3138c",89294:"19e5dbc7",90102:"e422e0c8",90176:"58676f80",90398:"bd765b5e",90510:"e9df80ee",90715:"927d3ba1",90904:"6a90befb",91350:"39d895db",91558:"6608d90b",91850:"d02633bd",91903:"3ae7644f",91936:"97731b98",92262:"9e6d58a6",92379:"e38020c7",92385:"f1d99c5c",92393:"d426b6bc",92461:"8745668e",93025:"7b061b5b",93033:"ebb770ac",93240:"82bf8f33",93325:"4ecf46d8",93356:"8982ce69",93413:"3e8ed2d3",93901:"cf11a010",93970:"b2597b4b",94128:"1f7f5208",94188:"78776d1d",94209:"f75d5f0c",94236:"719273d3",94665:"e86df8d6",95049:"a522333a",95271:"ca8f29a8",95377:"98df5920",95415:"c4a708f4",95536:"d17cc14c",95563:"abd0cb68",95622:"39ee239a",95912:"8bf141ac",95944:"1e01102e",96551:"03395d38",96600:"efe252dd",97052:"4255fdab",97227:"f4f74643",97240:"7dfaa119",97309:"bd12ad6e",97336:"79af4274",97418:"4a252982",97473:"c85454ce",97643:"6db94c70",97677:"dbdb3e3f",97728:"47913acb",97955:"d70095a2",98268:"024cbb9f",98531:"2cd74c1d",98551:"55986442",98659:"62f29103",98719:"f3cfe39c",98749:"065e1862",98843:"b7527e68",98845:"694b2e07",98973:"40d8d7c3",99046:"65ddfdf3",99079:"a537b4c0",99236:"01205c6e",99338:"af693b6e",99390:"0def7f9f",99578:"23d6b7ca"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="box-ui-elements:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","box-ui-elements:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={45354:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(45354!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=globalThis.webpackChunkbox_ui_elements=globalThis.webpackChunkbox_ui_elements||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();