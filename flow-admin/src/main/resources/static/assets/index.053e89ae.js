import{A as k,ao as D,ba as O,cy as z,c3 as N,b_ as W,r as _,a0 as s,B as $,a1 as H,a6 as t,w as a,H as E,u as S,ae as j}from"./vendor.5879c5ca.js";/* empty css               *//* empty css                *//* empty css                */import{B as U}from"./TableImg.513742d5.js";import{T as V}from"./BasicForm.0ba2e15f.js";import{u as K}from"./useTable.6e5baa13.js";import{g as L,a as M,d as J,b as q}from"./role.50d962e5.js";import{P as G}from"./index.ea14bdae.js";import Q from"./CompanyTree.1a3efee0.js";import{_ as X,h as Y}from"./index.e84e956c.js";import{b as A}from"./index.c505e96f.js";import{R as Z,s as I,c as ee,p as oe}from"./RoleModal.76d4b821.js";import ne from"./index.b01bb303.js";import{b as ae}from"./personal.2ea6ac2c.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";/* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";/* empty css                *//* empty css                */import"./useContentViewHeight.ccc8749b.js";import"./Tree.vue_vue_type_style_index_0_lang.128b82eb.js";import"./useContextMenu.44cd9a61.js";import"./company.54be1035.js";import"./OrgTree.e1eb4fc9.js";import"./dept.2ea41d4f.js";const{createMessage:se}=Y(),te=k({name:"RoleManagement",components:{BasicTable:U,PageWrapper:G,CompanyTree:Q,RoleModal:Z,PersonalSelector:ne,TableAction:V,Input:D,Tag:O,Affix:z,Space:N,Search:D.Search,SettingOutlined:W},setup(){const[n,{openModal:x}]=A(),[B,{openModal:T,setModalProps:R}]=A(),r=_({}),p=_([]),d=_({}),m=_({});I.forEach(e=>{e&&(e.componentProps.onkeypress=o=>{o.keyCode===13&&u()})});const[f,{reload:u}]=K({title:"\u5217\u8868",api:L,columns:ee,formConfig:{labelWidth:120,schemas:I,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!1,pagination:!0,onExpand:(e,o)=>{e?(r.value=o,d.value[o.id]="",c(o.id,d.value[o.id])):p.value=[]},rowKey:"id",canResize:!1});function h(){x(!0,{isUpdate:!1})}function P(e,o){o.stopPropagation(),x(!0,{record:e,isUpdate:!0})}function c(e,o){M({roleId:e,personal:{keyword:o||""}}).then(i=>{m.value[e]=i})}function g(e,o){o.stopPropagation(),r.value=e,M({roleId:e.id}).then(i=>{T(!0,{selectorProps:{multiSelect:!0,selectedList:i.map(F=>({code:F.code,name:F.name}))}}),R({title:`\u8BBE\u7F6E\u89D2\u8272\u3010${e.name}\u3011\u4E0B\u7684\u4EBA\u5458`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})}).finally(()=>{})}function C(e){if(e.children&&e.children.length>0){se.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}J([e.id]).then(o=>{u()})}function y(e){ae({roleId:e.roleId,personalId:e.personalId}).then(()=>{c(e.roleId,"")})}function w(){u()}function l(e,o){c(e,o)}function b(e){console.log(JSON.stringify(e));const o=e.map(i=>({id:i.id,code:i.code}));q({roleId:S(r).id,personalList:o}).then(()=>{p.value=[S(r).id],c(S(r).id,d.value[S(r).id])})}function v(e){u({searchInfo:{companyId:e?e.id:""}})}return{personalColumns:oe,currentRole:r,rolePersonalData:m,onSearchPerson:l,searchPersonTxt:d,registerTable:f,registerModal:n,registerPersonalModal:B,handleCreate:h,handleEdit:P,handleAddPersonal:g,handleDelete:C,handleDeletePersonal:y,handleSuccess:w,handleSettingPersonalSuccess:b,handleSelect:v}}}),le=j("\u65B0\u589E"),ie=j(" \u59D3\u540D "),re={class:"manager-range",style:{"text-align":"right"}},de=j("\u4E2D\u56FD\u77F3\u5316"),ue=j("\u4E2D\u56FD\u77F3\u5316");function ce(n,x,B,T,R,r){const p=s("CompanyTree"),d=s("Affix"),m=s("a-button"),f=s("TableAction"),u=s("Search"),h=s("Tag"),P=s("Space"),c=s("SettingOutlined"),g=s("BasicTable"),C=s("RoleModal"),y=s("PersonalSelector"),w=s("PageWrapper");return $(),H(w,{dense:"",contentFullHeight:"",contentClass:"flex"},{default:t(()=>[a(d,{"offset-top":"8",class:"w-1/4 xl:w-1/5"},{default:t(()=>[a(p,{contentFullHeight:"",onSelect:n.handleSelect},null,8,["onSelect"])]),_:1}),a(g,{onRegister:n.registerTable,class:"personal w-3/4 xl:w-4/5"},{toolbar:t(()=>[a(m,{type:"primary",onClick:n.handleCreate},{default:t(()=>[le]),_:1},8,["onClick"])]),action:t(({record:l})=>[a(f,{actions:[{tooltip:"\u6DFB\u52A0\u4EBA\u5458",icon:"ant-design:user-add",onClick:n.handleAddPersonal.bind(null,l)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:n.handleEdit.bind(null,l)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:b=>{b.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:n.handleDelete.bind(null,l)}}]},null,8,["actions"])]),expandedRowRender:t(({record:l,index:b,indent:v,expanded:e})=>[a(g,{title:"",size:"small",columns:n.personalColumns,useSearchForm:!1,immediate:!1,showIndexColumn:!0,showTableSetting:!1,bordered:!0,pagination:!1,actionColumn:`{\r
            align: 'center'\r
          }`,rowKey:"id",canResize:!1,searchInfo:{roleId:l.id},dataSource:n.rolePersonalData[l.id],class:"w-4/4 xl:w-5/5"},{customName:t(({rec:o})=>[E("span",null,[ie,a(u,{value:n.searchPersonTxt[l.id],"onUpdate:value":i=>n.searchPersonTxt[l.id]=i,placeholder:"\u59D3\u540D/\u5DE5\u53F7/\u624B\u673A",style:{width:"150px"},size:"small",allowClear:"",onSearch:i=>{n.onSearchPerson(l.id,i)}},null,8,["value","onUpdate:value","onSearch"])])]),action:t(({record:o})=>[a(f,{actions:[{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:n.handleDeletePersonal.bind(null,o)}}]},null,8,["actions"])]),setManagerRange:t(({record:o})=>[E("div",re,[a(P,{size:"small"},{default:t(()=>[a(h,{color:"processing"},{default:t(()=>[de]),_:1}),a(h,{color:"processing"},{default:t(()=>[ue]),_:1})]),_:1}),a(c,{class:"ant-btn-link"})])]),_:2},1032,["columns","searchInfo","dataSource"])]),_:1},8,["onRegister"]),a(C,{onRegister:n.registerModal,onSuccess:n.handleSuccess},null,8,["onRegister","onSuccess"]),a(y,{onRegister:n.registerPersonalModal,onSuccess:n.handleSettingPersonalSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var oo=X(te,[["render",ce]]);export{oo as default};