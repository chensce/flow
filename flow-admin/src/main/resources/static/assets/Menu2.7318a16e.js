import{_ as e}from"./PageWrapper.45ba9367.js";import{b as t}from"./useModal.ddd2c5cc.js";import{k as o,ad as s,r as n,K as r,o as i,n as a,q as d,Q as l,V as c,Y as p}from"./vendor.56d2c57f.js";import m from"./index.f3d3c138.js";import u from"./index.4986a937.js";import"./index.bfbdc958.js";import"./usePageContext.30475202.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";import"./useWindowSizeFn.d0559e60.js";import"./TableImg.5256107f.js";/* empty css              *//* empty css              */import"./BasicForm.9118d7fd.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.a238b96b.js";import"./uuid.c53863e7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./download.c3ab6d96.js";import"./StrengthMeter.ab008fc6.js";import"./useForm.7b000bd0.js";import"./useSortable.97fe3b93.js";import"./useExpose.46777d04.js";import"./useTable.46ace9df.js";import"./personal.c46ea1f6.js";import"./OrgTree.0bcc0dd1.js";import"./Tree.vue_vue&type=style&index=0&lang.5b456a9f.js";import"./useContextMenu.b8def761.js";import"./dept.038d9342.js";var f=o({name:"Menu2Demo",components:{Input:s,PageWrapper:e,PersonalSelector:m,OrgSelector:u},setup(){const[e,{openModal:o,setModalProps:s}]=t(),[r,{openModal:i,setModalProps:a}]=t();return n([]),{registerPersonalModal:e,registerOrgModal:r,handleSelectPersonal:function(e){o(!0,{selectorProps:{multiSelect:!0,selectedList:[]}}),s({title:`设置角色【${e.name}】下的人员`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSelectOrgMultiSelect:function(e){i(!0,{selectorProps:{multiSelect:!0,selectedList:[{id:"12ae3090e3e15810a9d7ebc0d291ad7e",name:"研发部"}]}}),a({title:"选择组织",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSelectOrg:function(e){i(!0,{selectorProps:{multiSelect:!1,selectedList:[{id:"12ae3090e3e15810a9d7ebc0d291ad7e",name:"研发部"}]}}),a({title:"选择组织",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSettingPersonalSuccess:function(e){},handleSettingOrgSuccess:function(e){},handleSelect:function(){}}}});const g={class:"p-4"},j=p(" 人员选择 "),S=p(" 组织选择-多选 "),b=p(" 组织选择-单选 ");f.render=function(e,t,o,s,n,p){const m=r("a-button"),u=r("PageWrapper"),f=r("PersonalSelector"),h=r("OrgSelector");return i(),a(c,null,[d(u,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:l((()=>[d("div",g,[d(m,{type:"primary",onClick:e.handleSelectPersonal},{default:l((()=>[j])),_:1},8,["onClick"]),d(m,{type:"primary",onClick:e.handleSelectOrgMultiSelect},{default:l((()=>[S])),_:1},8,["onClick"]),d(m,{type:"primary",onClick:e.handleSelectOrg},{default:l((()=>[b])),_:1},8,["onClick"])])])),_:1}),d(f,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingPersonalSuccess},null,8,["onRegister","onSuccess"]),d(h,{onRegister:e.registerOrgModal,onSuccess:e.handleSettingOrgSuccess},null,8,["onRegister","onSuccess"])],64)};export default f;