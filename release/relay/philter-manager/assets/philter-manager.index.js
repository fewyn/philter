var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&i(e,a,t[a]);return e},o=(e,l)=>t(e,a(l)),c=e=>"symbol"==typeof e?e:e+"",m=(e,t)=>{var a={};for(var i in e)n.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&r.call(e,i)&&(a[i]=e[i]);return a};import{T as u,R as d,c as p,I as g,S as E,F as C,r as h,H as f,C as v,a as b,b as N,d as _,e as I,B as y,M as k,f as x,g as P,h as T,P as w,i as S,U as R,j as A,k as M,A as O,l as z,m as D,n as U,u as F,o as L,p as K,q as G,s as B,t as j,v as $,N as V,w as H,D as W,x as J,y as Y,z as q,E as Q,G as X,J as Z,K as ee,L as te,O as ae,Q as le}from"./philter-manager.vendor.js";const ne=Object.freeze({AUTO:0,BREAK:0,CLAN:0,CLST:0,DISC:0,DISP:0,GIFT:0,KEEP:0,MAKE:0,MALL:0,PULV:0,TODO:0,UNTN:0,USE:0});class re extends Error{constructor(e,t,a){super(e),this.code=t,this.response=a}}re.prototype.name="ApiError";const ie=async(e,t,a)=>{const l=function(e){const t={};for(const l of Object.keys(e))if("method"===(a=l)||"path"===a)t[l]=e[l];else{const a=JSON.stringify(e[l]);void 0!==a&&(t[l]=a)}var a;return t}(s({path:e,method:t},a)),n=await fetch("/relay_Philter_Manager.js?relay=true",{body:new URLSearchParams(l),method:"POST"});if(!n.ok){let e;try{e=await n.text()}catch(i){console.error(i)}throw new re(n.statusText,n.status,e)}let r;try{r=await n.json()}catch(o){throw new re(`Invalid JSON returned from server (${o})\nResponse: ${r}`,500,r)}if("error"in r)throw new re(r.error.message,r.error.code,r.error.message);return r},se=e=>ie("/ruleset","post",{cleanupRules:e}),oe=u.create({maxToasts:1}),ce=(e,t,a)=>{t?oe.show({icon:"warning-sign",intent:"warning",message:t instanceof re?d.createElement(d.Fragment,null,a,": ",t.message,d.createElement("br",null),"Response: ",String(t.response)):`${a}: ${t}`},e):oe.dismiss(e)},me=(e,t,a)=>{t?oe.show({icon:"floppy-disk",intent:"primary",message:a},e):oe.dismiss(e)},ue=e=>!e.isTradable;const de=e=>{var t=e,{className:a,fill:l,small:n}=t,r=m(t,["className","fill","small"]);return d.createElement("input",s({className:p("NumericInputLite",g,n&&E,l&&C,a),dir:"auto",type:"number"},r))};const pe=e=>"UNKN"===e||(e=>"string"==typeof e&&Object.prototype.hasOwnProperty.call(ne,e))(e),ge=h.exports.memo((function(e){var t=e,{className:a,item:l,onChange:n,value:r}=t,i=m(t,["className","item","onChange","value"]);return d.createElement("div",s({className:p(f,"SelectCleanupAction",a)},i),d.createElement("select",{onChange:e=>pe(e.target.value)&&n(e.target.value),value:r},d.createElement("option",{value:"UNKN"},"(uncategorized)"),d.createElement("option",{value:"KEEP"},"Keep all"),l.canMall&&d.createElement("option",{value:"MALL"},"Mall sale"),l.canBreak&&d.createElement("option",{value:"BREAK"},"Break apart"),l.canAutosell&&d.createElement("option",{value:"AUTO"},"Autosell"),l.canDiscard&&d.createElement("option",{style:{color:v.ORANGE2},value:"DISC"},"Discard"),l.canGift&&d.createElement("option",{value:"GIFT"},"Send as gift"),l.canStash&&d.createElement("option",{value:"CLAN"},"Put in clan stash"),l.canPulverize&&d.createElement("option",{style:ue(l)?{color:v.ORANGE2}:void 0,value:"PULV"},"Pulverize"),l.canMake&&d.createElement("option",{value:"MAKE"},"Craft..."),l.canUntinker&&d.createElement("option",{value:"UNTN"},"Untinker"),l.canUse&&d.createElement("option",{value:"USE"},"Use"),l.canCloset&&d.createElement("option",{value:"CLST"},"Closet"),l.canDisplay&&d.createElement("option",{value:"DISP"},"Display"),d.createElement("option",{value:"TODO"},"Reminder")))})),Ee=({item:e,rule:t,onChange:a})=>{const l=h.exports.useCallback((e=>{a&&a((t=>e===(null==t?void 0:t.action)?t:"UNKN"===e?null:o(s({},t),"GIFT"===e?{action:e,message:"",recipent:""}:"MAKE"===e?{action:e,shouldUseCreatableOnly:!1,targetItem:""}:"MALL"===e?{action:e,minPrice:0}:"TODO"===e?{action:e,message:""}:{action:e})))}),[a]);let n,r;return t&&("PULV"===t.action&&ue(e)?(n="You will pulverize an untradable item.",r=N.WARNING):"DISC"===t.action&&(n="You will gain no meat from discarding.",r=N.WARNING)),d.createElement(b,{className:"CleanupRulePicker",helperText:n,intent:r},d.createElement("div",{className:"CleanupRulePicker__Inputs"},d.createElement(ge,{className:"CleanupRulePicker__Child",item:e,onChange:l,value:t?t.action:"UNKN"}),t?"GIFT"===t.action?d.createElement(d.Fragment,null,d.createElement(b,{className:"CleanupRulePicker__Child",contentClassName:"CleanupRulePicker__InputGiftRecipent",helperText:!t.recipent&&"No recipent name",inline:!0,intent:t.recipent?void 0:N.DANGER,label:"to"},d.createElement("input",{className:p(g,E,!t.recipent&&_,"CleanupRulePicker__InputText"),onChange:e=>null==a?void 0:a(o(s({},t),{recipent:e.target.value})),placeholder:"Player name",type:"text",value:t.recipent})),d.createElement(b,{className:"CleanupRulePicker__Child",contentClassName:"CleanupRulePicker__InputGiftMessage",inline:!0,label:"with"},d.createElement("input",{className:p(g,E,"CleanupRulePicker__InputText"),onChange:e=>null==a?void 0:a(o(s({},t),{message:e.target.value})),placeholder:"Kmail message",type:"text",value:t.message}))):"MAKE"===t.action?d.createElement(d.Fragment,null,d.createElement(b,{className:"CleanupRulePicker__Child",contentClassName:"CleanupRulePicker__InputMakeTarget",helperText:!t.targetItem&&"No item name",inline:!0,intent:t.targetItem?void 0:N.DANGER,label:"into"},d.createElement("input",{className:p(g,E,"CleanupRulePicker__InputText"),onChange:e=>null==a?void 0:a(o(s({},t),{targetItem:e.target.value})),placeholder:"Item name",type:"text",value:t.targetItem})),d.createElement(I,{checked:t.shouldUseCreatableOnly,className:"CleanupRulePicker__Child CleanupRulePicker__Checkbox",onChange:e=>null==a?void 0:a(o(s({},t),{shouldUseCreatableOnly:e.currentTarget.checked}))},d.createElement("span",{className:"CleanupRulePicker__CheckBoxText"},"Only use available ingredients"))):"MALL"===t.action?d.createElement(b,{className:"CleanupRulePicker__Child",contentClassName:"CleanupRulePicker__InputMallMinPrice",inline:!0,label:"min price"},d.createElement(de,{max:999999999,min:0,onChange:e=>{const l=Number(e.target.value);Number.isInteger(l)&&(null==a||a(o(s({},t),{minPrice:Math.max(0,Math.min(999999999,l))})))},value:t.minPrice})):"TODO"===t.action?d.createElement(b,{className:"CleanupRulePicker__Child",contentClassName:"CleanupRulePicker__InputTodoMessage",inline:!0,label:"with message:"},d.createElement("input",{className:p(g,E,"CleanupRulePicker__InputText"),onChange:e=>null==a?void 0:a(o(s({},t),{message:e.target.value})),placeholder:"Enter reminder message",type:"text",value:t.message})):null:null))};const Ce=()=>d.createElement("span",{className:p(D,k,U,"TableItemCleanup__ColumnMallPrice--minimum"),title:"Is at minimum mall price"},"min"),he=h.exports.memo((function({inventory:e,item:t}){return d.createElement(d.Fragment,null,d.createElement("a",{className:p(y,k,"TableItemCleanup__ItemImageLink"),onClick:()=>{return e=t.descid,void(null==(a=window.open(`/desc_item.php?whichitem=${e}`,"name","height=200,width=214"))||a.focus());var e,a},tabIndex:0,title:"View item description"},d.createElement("img",{className:"TableItemCleanup__ItemImage",alt:t.name,src:`/images/itemimages/${t.image}`})),d.createElement("a",{className:p(y,k,"TableItemCleanup__ItemNameLink"),href:`https://kol.coldfront.net/thekolwiki/index.php/Special:Search?search=${t.name}&go=Go`,rel:"noopener noreferrer",target:"_blank",tabIndex:0,title:"Visit KoL wiki page"},d.createElement("span",{dangerouslySetInnerHTML:{__html:t.name}}),e.inventory[t.id]>0&&d.createElement(d.Fragment,null," ",d.createElement("i",null,"(",e.inventory[t.id],")"))))})),fe=h.exports.memo((function({item:e}){return d.createElement(d.Fragment,null,e.mallPrice&&e.mallPrice.toLocaleString().replace(/,/g,",​"),null!==e.mallPrice&&e.isMallPriceAtMinimum&&d.createElement(Ce,null))})),ve=h.exports.memo((function({item:e,onRuleChange:t,rule:a}){return d.createElement(de,{className:"TableItemCleanup__InputKeepAmount",disabled:!a||"KEEP"===a.action,fill:!0,min:0,onChange:a=>{const l=Number(a.target.value);Number.isInteger(l)&&t(e.id,(e=>e&&o(s({},e),{keepAmount:l})))},value:(null==a?void 0:a.keepAmount)||0})})),be=h.exports.memo((function({item:e,onRuleChange:t,rule:a}){return d.createElement(Ee,{item:e,onChange:a=>t(e.id,a),rule:a||null})})),Ne=h.exports.memo((function(e){var t=e,{className:a,cleanupRules:l,disableReset:n,disableSave:r,inventory:i,items:u,onChange:g,onReset:E,onRuleChange:C,onSave:f}=t,v=m(t,["className","cleanupRules","disableReset","disableSave","inventory","items","onChange","onReset","onRuleChange","onSave"]);const b=h.exports.useCallback(((e,t)=>null==g?void 0:g((a=>{const l="function"==typeof t?t(a[e]||null):t;if(l)return o(s({},a),{[e]:l});{const t=a,{[e]:l}=t;return m(t,[c(e)])}}))),[g]),[N,_]=h.exports.useState(""),I=h.exports.useMemo((()=>{if(!N)return u;const e=N.trim().toLowerCase();return u.filter((t=>t.name.toLowerCase().includes(e)))}),[N,u]),y=h.exports.useCallback((({index:e})=>I[e]),[I]),k=h.exports.useCallback((({index:e})=>-1===e?"TableItemCleanup__HeaderRow":"TableItemCleanup__Row"),[]),D=h.exports.useMemo((()=>[d.createElement(x,{cellRenderer:({rowData:e})=>d.createElement(he,{inventory:i,item:e}),className:"TableItemCleanup__Cell TableItemCleanup__ColumnItemName",dataKey:"nameAndImage",flexGrow:5,flexShrink:0,label:"Item (Amount)",width:200}),d.createElement(x,{cellDataGetter:({rowData:e})=>i.closet[e.id]||0,className:"TableItemCleanup__Cell TableItemCleanup__ColumnClosetAmount",dataKey:"closetAmount",flexShrink:0,label:d.createElement("abbr",{title:"Amount in Closet"},"C"),width:35}),d.createElement(x,{cellDataGetter:({rowData:e})=>i.storage[e.id]||0,className:"TableItemCleanup__Cell TableItemCleanup__ColumnStorageAmount",dataKey:"storageAmount",flexShrink:0,label:d.createElement("abbr",{title:"Amount in Storage"},"S"),width:35}),d.createElement(x,{cellDataGetter:({rowData:e})=>i.displayCase[e.id]||0,className:"TableItemCleanup__Cell TableItemCleanup__ColumnDisplayCaseAmount",dataKey:"displayCaseAmount",flexShrink:0,label:d.createElement("abbr",{title:"Amount in Display Case"},"D"),width:35}),d.createElement(x,{cellRenderer:({rowData:e})=>d.createElement(fe,{item:e}),className:"TableItemCleanup__Cell TableItemCleanup__ColumnMallPrice",dataKey:"mallPrice",flexGrow:1,flexShrink:0,label:d.createElement("abbr",{title:"5th lowest mall price"},"Price"),width:80}),d.createElement(x,{cellRenderer:({rowData:e})=>d.createElement(ve,{item:e,onRuleChange:C||b,rule:l[e.id]}),className:"TableItemCleanup__Cell TableItemCleanup__ColumnKeepAmount",dataKey:"keepAmount",flexShrink:0,label:"Keep",width:70}),d.createElement(x,{cellRenderer:({rowData:e})=>d.createElement(be,{item:e,onRuleChange:C||b,rule:l[e.id]}),className:"TableItemCleanup__Cell TableItemCleanup__ColumnAction",dataKey:"action",flexGrow:1,flexShrink:0,label:"Action",width:440})]),[l,b,i,C]),U=h.exports.useMemo((()=>d.createElement(P,{className:"TableItemCleanup__EditorButtons"},d.createElement(T,{disabled:r,icon:"saved",onClick:f,text:"Save all"}),d.createElement(T,{disabled:n,icon:"reset",onClick:E,text:"Discard changes"}),d.createElement(w,{className:"TableItemCleanup__PopperFix",popoverClassName:S,content:d.createElement("p",null,"Select an action for each item. These actions will tell Philter how to process each item:",d.createElement(R,null,d.createElement("li",null,"Philter will warn you about uncategorized items, but will not touch them."),d.createElement("li",null,'"Mall sale" will use the lowest mall price ',d.createElement("i",null,"at cleanup"),', but never below the "min price".'),d.createElement("li",null,'"Send as gift" actually uses Kmail, not the gift shop.'),d.createElement("li",null,'"Crafting" can use up other ingredients needed for the recipe, even if you marked them as "Keep all".'),d.createElement("li",null,'"Pulverize" will send items to Smashbot if you can\'t use Pulverize or Malus, but only in aftercore.'),d.createElement("li",null,'"Reminder" will show a reminder message during cleanup, but won\'t touch the item.')))},d.createElement(T,{icon:"help",text:"Help"})))),[n,r,E,f]);return d.createElement("section",s({className:p("TableItemCleanup",a)},v),d.createElement("header",{className:"TableItemCleanup__HeaderMenu"},U,d.createElement(A,{className:"TableItemCleanup__ItemFilterControl"},d.createElement("div",null,"Filter by:"),d.createElement(M,{onChange:h.exports.useCallback((e=>_(e.target.value)),[]),placeholder:"Enter item name...",value:N}),d.createElement("div",{className:"TableItemCleanup__ItemFilterBarHelperText"},N&&`${I.length} / ${u.length} match${I.length>1?"es":""}`))),d.createElement("div",{className:"TableItemCleanup__TableWrapper"},d.createElement(O,null,(({height:e,width:t})=>d.createElement(z,{gridClassName:"TableItemCleanup__Inner",headerClassName:"TableItemCleanup__HeaderCell",headerHeight:30,height:e,rowClassName:k,rowCount:I.length,rowGetter:y,rowHeight:60,width:t},D)))),d.createElement("footer",{className:"TableItemCleanup__FooterMenu"},U))})),_e={all:0,closet:0,craft:0,display:0,dispose:0,gift:0,inventory:0,keep:0,mall:0,pulverize:0,reminder:0,search:0,stash:0,untinker:0,use:0},Ie=({cleanupRules:e,onChange:t})=>{const{data:a,error:l,isValidating:n,mutate:r}=F("/cleanup-tables/categorized",(async()=>{const e=await ie("/cleanup-tables/categorized","get",{});return e.result.items.sort(((e,t)=>e.id-t.id)),e.result}));h.exports.useEffect((()=>{(null==a?void 0:a.cleanupRules)&&t((e=>null!=e?e:a.cleanupRules))}),[null==a?void 0:a.cleanupRules,t]);const i=h.exports.useMemo((()=>Boolean(e)&&!L(e,null==a?void 0:a.cleanupRules)),[e,null==a?void 0:a.cleanupRules]),u=h.exports.useCallback((()=>(null==a?void 0:a.cleanupRules)&&t(a.cleanupRules)),[null==a?void 0:a.cleanupRules,t]),{error:p,execute:g,loading:E}=K((()=>r((async t=>{var a;if(!t)throw new Error("Cannot save ruleset when we don't have any data yet");if(!e)throw new Error("Cannot save active ruleset because it has not been initialized yet");const l=await se(e);if(!(null==(a=null==l?void 0:l.result)?void 0:a.success))throw new Error(`Unexpected response: ${JSON.stringify(l)}`);return o(s({},t),{cleanupRules:e})}),!1)));h.exports.useEffect((()=>ce("savingError",p,"Cannot save cleanup rule")),[p]),h.exports.useEffect((()=>me("isSaving",E,"Saving cleanup rules...")),[E]);const C=h.exports.useCallback(((e,l)=>t((t=>{var n;if(void 0===t)return t;const r=t[e],i="function"==typeof l?l(t[e]||null):l;if(r&&r.action!==(null==i?void 0:i.action)){const t=null==(n=null==a?void 0:a.items.find((t=>t.id===e)))?void 0:n.name;void 0!==t&&(u=i?`Changed action for ${t} to "${(e=>{switch(e){case"AUTO":return"Autosell";case"BREAK":return"Break apart";case"CLAN":return"Put in clan stash";case"CLST":return"Closet";case"DISC":return"Discard";case"DISP":return"Display";case"GIFT":return"Send as gift";case"KEEP":return"Keep all";case"MAKE":return"Craft";case"MALL":return"Mall sale";case"PULV":return"Pulverize";case"TODO":return"Reminder";case"UNTN":return"Untinker";case"USE":return"Use";default:return e}})(i.action)}"`:`Removed action for ${t}`,oe.show({icon:"info-sign",message:u}))}var u;if(i)return o(s({},t),{[e]:i});{const a=t,{[e]:l}=a;return m(a,[c(e)])}}))),[null==a?void 0:a.items,t]),[f,v]=h.exports.useState("all"),b=h.exports.useMemo((()=>{var t;return((e,t)=>e.reduce(((e,a)=>{const l=t[a.id];if(l)switch(e.all.push(a),l.action){case"CLST":e.closet.push(a);break;case"MAKE":e.craft.push(a);break;case"AUTO":case"DISC":e.dispose.push(a);break;case"BREAK":case"USE":e.use.push(a);break;case"DISP":e.display.push(a);break;case"KEEP":e.keep.push(a);break;case"GIFT":e.gift.push(a);break;case"MALL":e.mall.push(a);break;case"PULV":e.pulverize.push(a);break;case"TODO":e.reminder.push(a);break;case"UNTN":e.untinker.push(a);break;case"CLAN":e.stash.push(a)}return e}),{all:[],closet:[],craft:[],display:[],dispose:[],gift:[],keep:[],mall:[],pulverize:[],reminder:[],stash:[],untinker:[],use:[]}))(null!=(t=null==a?void 0:a.items)?t:[],e||{})}),[e,null==a?void 0:a.items]),N=!Object.prototype.hasOwnProperty.call(b,f)||b[f].length>0?f:"all",_=t=>e&&a&&d.createElement(Ne,{className:"PanelCategorizedItems__Table",disableReset:!i,disableSave:!i,inventory:a.inventory,items:t,cleanupRules:e,onRuleChange:C,onReset:u,onSave:g});return d.createElement(d.Fragment,null,d.createElement(G,null,"Edit Cleanup Rules"),a?d.createElement(B,{className:"PanelCategorizedItems__Tabs",onChange:e=>(e=>"string"==typeof e&&Object.prototype.hasOwnProperty.call(_e,e))(e)&&v(e),renderActiveTabPanelOnly:!0,selectedTabId:N},d.createElement(j,{id:"all",panel:_(b.all),panelClassName:"PanelCategorizedItems__TabItem",title:"All"}),b.keep.length>0&&d.createElement(j,{id:"keep",panel:_(b.keep),panelClassName:"PanelCategorizedItems__TabItem",title:"Keep"}),b.mall.length>0&&d.createElement(j,{id:"mall",panel:_(b.mall),panelClassName:"PanelCategorizedItems__TabItem",title:"Mall"}),b.pulverize.length>0&&d.createElement(j,{id:"pulverize",panel:_(b.pulverize),panelClassName:"PanelCategorizedItems__TabItem",title:"Pulverize"}),b.use.length>0&&d.createElement(j,{id:"use",panel:_(b.use),panelClassName:"PanelCategorizedItems__TabItem",title:"Use"}),b.closet.length>0&&d.createElement(j,{id:"closet",panel:_(b.closet),panelClassName:"PanelCategorizedItems__TabItem",title:"Closet"}),b.stash.length>0&&d.createElement(j,{id:"stash",panel:_(b.stash),panelClassName:"PanelCategorizedItems__TabItem",title:"Clan Stash"}),b.craft.length>0&&d.createElement(j,{id:"craft",panel:_(b.craft),panelClassName:"PanelCategorizedItems__TabItem",title:"Crafting"}),b.untinker.length>0&&d.createElement(j,{id:"untinker",panel:_(b.untinker),panelClassName:"PanelCategorizedItems__TabItem",title:"Untinkering"}),b.gift.length>0&&d.createElement(j,{id:"gift",panel:_(b.gift),panelClassName:"PanelCategorizedItems__TabItem",title:"Gift"}),b.display.length>0&&d.createElement(j,{id:"display",panel:_(b.display),panelClassName:"PanelCategorizedItems__TabItem",title:"Display"}),b.dispose.length>0&&d.createElement(j,{id:"dispose",panel:_(b.dispose),panelClassName:"PanelCategorizedItems__TabItem",title:"Dispose"}),b.reminder.length>0&&d.createElement(j,{id:"reminder",panel:_(b.reminder),panelClassName:"PanelCategorizedItems__TabItem",title:"Reminders"})):n?d.createElement($,null):d.createElement(V,{icon:l?"error":"info-sign",title:l?"Failed to load data":"Data not loaded yet",description:l instanceof Error?l.message:void 0}))};const ye=h.exports.memo((function(e){var t=e,{fileNamePrefix:a,fileNameSuffix:l,className:n=""}=t,r=m(t,["fileNamePrefix","fileNameSuffix","className"]);return d.createElement(M,s({className:`InputGroupAffixedFileName ${n}`,leftElement:a?d.createElement(H,{className:"InputGroupAffixedFileName__Prefix"},a):void 0,rightElement:l?d.createElement(H,{className:"InputGroupAffixedFileName__Suffix"},l):void 0},r))}));const ke=h.exports.memo((function({changedFiles:e=[],isOpen:t,onCancel:a,onSaveWithCopy:l,onSaveWithoutCopy:n}){return d.createElement(W,{canEscapeKeyClose:!0,canOutsideClickClose:!0,icon:"warning-sign",isOpen:t,onClose:a,title:"Changing data file name"+(e.length>1?"s":"")},d.createElement("div",{className:J},"You are about the change your data file",e.length>1?"s' names":"'s name",":",d.createElement("ul",null,e.map(((e,t)=>d.createElement("li",{key:t},e.label,": ",d.createElement(H,null,e.oldName)," ⇒"," ",d.createElement(H,null,e.newName))))),"Do you want to copy the contents of your previous data file",e.length>1&&"s","?"),d.createElement("div",{className:Y},d.createElement("div",{className:q},d.createElement(T,{icon:"duplicate",text:"Copy contents",onClick:l}),d.createElement(T,{icon:"exchange",text:`Change file name${e.length>1?"s":""} only`,onClick:n}),d.createElement(T,{intent:"danger",text:"Cancel",onClick:a}))))})),xe=(e,t)=>t.includes(e),Pe=()=>{const{data:e,error:t,mutate:a}=F("/config",(async()=>(await ie("/config","get",{})).result)),[l,n]=h.exports.useState(null);h.exports.useEffect((()=>{e&&!l&&n(e)}),[e,l]);const[r,i]=h.exports.useState({}),c=h.exports.useCallback((()=>i({})),[]),{loading:m,execute:u,error:g}=K((async(e,t)=>{var l;const n=await((e,t)=>ie("/config","post",{config:e,shouldCopyDataFiles:t}))(e,t);if(!(null==(l=null==n?void 0:n.result)?void 0:l.success))throw new Error(`Unexpected response: ${JSON.stringify(n)}`);a(e)})),E=h.exports.useCallback((async t=>{if(!l)throw new Error("Cannot save empty config");if(!e)throw new Error("Cannot overwrite an empty config object");const a=[];l.dataFileName!==e.dataFileName&&a.push({label:"Ruleset file",oldName:"OCDdata_"+e.dataFileName+".txt",newName:"OCDdata_"+l.dataFileName+".txt"}),l.stockFileName!==e.stockFileName&&a.push({label:"Stock file",oldName:"OCDstock_"+e.stockFileName+".txt",newName:"OCDstock_"+l.stockFileName+".txt"}),a.length&&void 0===t?i({isOpen:!0,changedFiles:a}):await u(l,t)}),[e,l,u]),C=!L(l,e),f=h.exports.useCallback((e=>n("function"==typeof e?t=>t&&e(t):e)),[]),v=!e||!l||m;h.exports.useEffect((()=>ce("loadingError",t,"Cannot load config")),[t]),h.exports.useEffect((()=>ce("savingError",g,"Cannot save config")),[g]),h.exports.useEffect((()=>me("isSaving",m,"Saving config...")),[m]);const N=v||!(null==l?void 0:l.canUseMallMulti);return d.createElement(d.Fragment,null,d.createElement(ke,s({onCancel:()=>c(),onSaveWithCopy:()=>{c(),E(!0)},onSaveWithoutCopy:()=>{c(),E(!1)}},r)),d.createElement(G,null,"Configure Philter"),d.createElement("fieldset",{className:"PanelConfig__Section"},d.createElement("legend",{className:"PanelConfig__SectionTitle"},"General settings"),d.createElement(Q,{disabled:v,inline:!0,label:"Empty closet first before cleanup:",onChange:h.exports.useCallback((({currentTarget:{value:e}})=>{const t=Number(e);xe(t,[0,-1])&&f((e=>o(s({},e),{emptyClosetMode:t})))}),[f]),selectedValue:null==l?void 0:l.emptyClosetMode},d.createElement(X,{className:l?void 0:Z,label:"Never",value:0}),d.createElement(X,{className:l?void 0:Z,label:"Before Emptying Hangk's (recommended)",value:-1})),d.createElement(ee,{className:"PanelConfig__Divider"}),d.createElement(Q,{disabled:v,inline:!0,label:"Mall pricing: ",onChange:h.exports.useCallback((({currentTarget:{value:e}})=>{xe(e,["auto","max"])&&f((t=>o(s({},t),{mallPricingMode:e})))}),[f]),selectedValue:null==l?void 0:l.mallPricingMode},d.createElement(X,{className:l?void 0:Z,label:"Automatic",value:"auto"}),d.createElement(X,{className:l?void 0:Z,label:`${999999999..toLocaleString()} meat (ignores "min price")`,value:"max"})),d.createElement(ee,{className:"PanelConfig__Divider"}),d.createElement(I,{checked:Boolean(null==l?void 0:l.simulateOnly),className:l?void 0:Z,disabled:v,onChange:({currentTarget:{checked:e}})=>f((t=>o(s({},t),{simulateOnly:e})))},"Simulate only ",d.createElement("small",null,"(no items will be cleaned up)"))),d.createElement("fieldset",{className:"PanelConfig__Section"},d.createElement("legend",{className:"PanelConfig__SectionTitle"},"Mall multi setup"),d.createElement(I,{checked:Boolean(null==l?void 0:l.canUseMallMulti),className:l?void 0:Z,disabled:v,onChange:({currentTarget:{checked:e}})=>f((t=>o(s({},t),{canUseMallMulti:e})))},"Use mall multi"),d.createElement(b,{className:"PanelConfig__FormGroupAligned",disabled:N,inline:!0,intent:N||(null==l?void 0:l.mallMultiName)?void 0:"warning",label:"Mall multi name:",helperText:N||(null==l?void 0:l.mallMultiName)?"​":"No multi account"},d.createElement(M,{className:l?void 0:Z,disabled:N,onChange:({target:{value:e}})=>f((t=>o(s({},t),{mallMultiName:e}))),placeholder:N?"":"Enter player name",value:(null==l?void 0:l.mallMultiName)||""})),d.createElement(b,{className:"PanelConfig__FormGroupAligned",disabled:v||!(null==l?void 0:l.canUseMallMulti),inline:!0,label:"Mall multi Kmail text:"},d.createElement(M,{className:l?void 0:Z,disabled:v||!(null==l?void 0:l.canUseMallMulti),onChange:({target:{value:e}})=>f((t=>o(s({},t),{mallMultiKmailMessage:e}))),placeholder:N?"":"Enter Kmail message",value:(null==l?void 0:l.mallMultiKmailMessage)||""}))),d.createElement("fieldset",{className:"PanelConfig__Section"},d.createElement("legend",{className:"PanelConfig__SectionTitle"},"Data files"),d.createElement(b,{className:"PanelConfig__FormGroupAligned",disabled:v,inline:!0,label:"Ruleset file:"},d.createElement(ye,{className:p("PanelConfig_InputFileName",!l&&Z),disabled:v,fileNamePrefix:"OCDdata_",fileNameSuffix:".txt",onChange:h.exports.useCallback((({target:{value:e}})=>f((t=>o(s({},t),{dataFileName:e})))),[f]),value:(null==l?void 0:l.dataFileName)||""})),d.createElement(b,{className:"PanelConfig__FormGroupAligned",disabled:v,inline:!0,label:"Stock file:"},d.createElement(ye,{className:p("PanelConfig_InputFileName",!l&&Z),disabled:v,fileNamePrefix:"OCDstock_",fileNameSuffix:".txt",onChange:h.exports.useCallback((({target:{value:e}})=>f((t=>o(s({},t),{stockFileName:e})))),[f]),value:(null==l?void 0:l.stockFileName)||""}))),d.createElement(P,null,d.createElement(T,{disabled:v||!C,icon:"floppy-disk",onClick:h.exports.useCallback((()=>E()),[E]),text:"Save"}),d.createElement(T,{disabled:v||!C,icon:"reset",onClick:h.exports.useCallback((()=>e&&n(e)),[e]),text:"Discard changes"})))};const Te=d.createElement("span",{className:"PanelInformation__Bullet"},"⋯"),we=()=>{const{data:e,isValidating:t,error:a}=F("/statistics",(async()=>(await ie("/statistics","get",{})).result)),l=h.exports.useMemo((()=>e?Object.values(e.categorizedItemCounts).reduce(((e,t)=>e+t)):0),[e]);return d.createElement("div",null,d.createElement(G,null,d.createElement("a",{href:"https://github.com/Loathing-Associates-Scripting-Society/Philter",rel:"noopener noreferrer",target:"_blank"},"Philter Manager")),d.createElement("p",null,"Brought to you by"," ",d.createElement("a",{href:"https://github.com/Loathing-Associates-Scripting-Society",rel:"noopener noreferrer",target:"_blank"},"Loathing Associates Scripting Society")),d.createElement(te,{intent:"warning",title:"Manager v2 is in alpha"},"Using this ",d.createElement("i",null,"may")," destroy your Philter configuration. Use at your own risk.",d.createElement("br",null),"The"," ",d.createElement("a",{href:"/relay_Philter_Manager_classic.ash?relay=true"},"classic UI")," ","is still available."),e?l>0?d.createElement(ae,{bordered:!0,className:"PanelInformation__VerticalTable",condensed:!0},d.createElement("tbody",null,d.createElement("tr",null,d.createElement("th",{style:e.uncategorizedItemCount>0?{color:v.ORANGE1}:void 0},"Uncategorized (in inventory)"),d.createElement("td",{style:e.uncategorizedItemCount>0?{color:v.ORANGE1}:void 0},e.uncategorizedItemCount)),d.createElement("tr",null,d.createElement("th",null,"Items in Ruleset"),d.createElement("td",null,l)),d.createElement("tr",null,d.createElement("th",null,Te," Keep All"),d.createElement("td",null,e.categorizedItemCounts.KEEP)),d.createElement("tr",null,d.createElement("th",null,Te," Mallsell"),d.createElement("td",null,e.categorizedItemCounts.MALL)),d.createElement("tr",null,d.createElement("th",null,Te," Autosell/Discard"),d.createElement("td",null,e.categorizedItemCounts.AUTO+e.categorizedItemCounts.DISC)),d.createElement("tr",null,d.createElement("th",null,Te," Pulverize"),d.createElement("td",null,e.categorizedItemCounts.PULV)),d.createElement("tr",null,d.createElement("th",null,Te," Use or break"),d.createElement("td",null,e.categorizedItemCounts.BREAK+e.categorizedItemCounts.USE)),d.createElement("tr",null,d.createElement("th",null,Te," Put in closet"),d.createElement("td",null,e.categorizedItemCounts.CLST)),d.createElement("tr",null,d.createElement("th",null,Te," Put in clan stash"),d.createElement("td",null,e.categorizedItemCounts.CLAN)),d.createElement("tr",null,d.createElement("th",null,Te," Crafting"),d.createElement("td",null,e.categorizedItemCounts.MAKE)),d.createElement("tr",null,d.createElement("th",null,Te," Untinker"),d.createElement("td",null,e.categorizedItemCounts.UNTN)),d.createElement("tr",null,d.createElement("th",null,Te," Send as gift"),d.createElement("td",null,e.categorizedItemCounts.GIFT)),d.createElement("tr",null,d.createElement("th",null,Te," Put in display case"),d.createElement("td",null,e.categorizedItemCounts.DISP)),d.createElement("tr",null,d.createElement("th",null,Te," Remind me later"),d.createElement("td",null,e.categorizedItemCounts.TODO)))):d.createElement(V,{icon:"help",description:'If this is your first time using Philter, you can create cleanup rules for your items in the "Add Items" tab.',title:"Your Philter ruleset is empty or missing."}):t?d.createElement($,null):d.createElement(V,{icon:a?"error":"info-sign",title:a?"Failed to load data":"Data not loaded yet",description:a instanceof Error?a.message:void 0}))};const Se=({cleanupRules:e,onChange:t})=>{const{data:a,error:l,isValidating:n,mutate:r}=F("/cleanup-tables/uncategorized",(async()=>{const e=await ie("/cleanup-tables/uncategorized","get",{});return e.result.items.sort(((e,t)=>e.id-t.id)),e.result}));h.exports.useEffect((()=>{(null==a?void 0:a.cleanupRules)&&t((e=>null!=e?e:a.cleanupRules))}),[null==a?void 0:a.cleanupRules,t]);const i=h.exports.useMemo((()=>Boolean(e)&&!L(e,null==a?void 0:a.cleanupRules)),[e,null==a?void 0:a.cleanupRules]),c=h.exports.useCallback((()=>(null==a?void 0:a.cleanupRules)&&t(a.cleanupRules)),[null==a?void 0:a.cleanupRules,t]),{error:u,execute:p,loading:g}=K((()=>r((async t=>{var a;if(!t)throw new Error("Cannot save ruleset when we don't have any data yet");if(!e)throw new Error("Cannot save active ruleset because it has not been initialized yet");const l=await se(e);if(!(null==(a=null==l?void 0:l.result)?void 0:a.success))throw new Error(`Unexpected response: ${JSON.stringify(l)}`);return o(s({},t),{items:t.items.filter((t=>!(t.id in e))),cleanupRules:e})}),!1)));h.exports.useEffect((()=>ce("savingError",u,"Cannot save cleanup rule")),[u]),h.exports.useEffect((()=>me("isSaving",g,"Saving cleanup rules...")),[g]);const E=h.exports.useCallback((()=>a&&t((e=>{if(void 0===e)return e;const t=m(e,[]);for(const l of a.items)l.canMall&&(t[l.id]={action:"MALL",minPrice:0});return t}))),[a,t]),C=h.exports.useCallback((()=>a&&t((e=>{if(void 0===e)return e;const t=m(e,[]);for(const l of a.items)l.canCloset&&(t[l.id]={action:"CLST"});return t}))),[a,t]),f=h.exports.useCallback((()=>a&&t((e=>{if(void 0===e)return e;const t=m(e,[]);for(const l of a.items)t[l.id]={action:"KEEP"};return t}))),[a,t]),v=h.exports.useCallback((e=>t((t=>t?"function"==typeof e?e(t):e:t))),[t]);return d.createElement(d.Fragment,null,d.createElement(G,null,"Uncategorized Items in Your Inventory"),e&&a?a.items.length>0?d.createElement(d.Fragment,null,d.createElement(b,{inline:!0,label:"Categorize all items as..."},d.createElement(P,null,d.createElement(T,{disabled:!a.items.some((t=>{var a;return t.canMall&&"MALL"!==(null==(a=e[t.id])?void 0:a.action)})),onClick:E},"Mallsell"),d.createElement(T,{disabled:!a.items.some((t=>{var a;return t.canCloset&&"CLST"!==(null==(a=e[t.id])?void 0:a.action)})),onClick:C},"Closet"),d.createElement(T,{disabled:!a.items.some((t=>{var a;return"KEEP"!==(null==(a=e[t.id])?void 0:a.action)})),onClick:f},"Keep all"))),d.createElement(Ne,{className:"PanelUncategorizedItems__Table",disableReset:!i,disableSave:!i,inventory:a.inventory,items:a.items,cleanupRules:e,onChange:v,onReset:c,onSave:p})):d.createElement(V,{icon:d.createElement("img",{alt:"Nothing to do",src:"/images/adventureimages/kg_accountant.gif"}),title:"Your entire inventory has been categorized",description:'"Nothing to see here, please move along."'}):n?d.createElement($,null):d.createElement(V,{icon:l?"error":"info-sign",title:l?"Failed to load data":"Data not loaded yet",description:l instanceof Error?l.message:void 0}))},Re=Object.freeze({categorized:0,config:0,information:0,uncategorized:0}),Ae=e=>Object.prototype.hasOwnProperty.call(Re,e)?e:"information",Me=()=>{const[e,t]=h.exports.useState("information"),[a,l]=h.exports.useState();return d.createElement("div",{className:"App"},d.createElement(B,{className:"App__Tabs",id:"mainTabs",onChange:e=>t(Ae(e)),renderActiveTabPanelOnly:!0,selectedTabId:Ae(e)},d.createElement(j,{id:"information",panel:d.createElement(we,null),panelClassName:"App__TabItem",title:"Information"}),d.createElement(j,{id:"uncategorized",panel:d.createElement(Se,{cleanupRules:a,onChange:l}),panelClassName:"App__TabItem",title:"Add Items"}),d.createElement(j,{id:"categorized",panel:d.createElement(Ie,{cleanupRules:a,onChange:l}),panelClassName:"App__TabItem",title:"Edit Rules"}),d.createElement(j,{id:"config",panel:d.createElement(Pe,null),panelClassName:"App__TabItem",title:"Configuration"})))};le.render(d.createElement(d.StrictMode,null,d.createElement(Me,null)),document.getElementById("root"));
//# sourceMappingURL=philter-manager.index.js.map
