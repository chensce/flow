var e=Object.defineProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,a=(o,n,t)=>n in o?e(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,i=(e,i)=>{for(var l in i||(i={}))n.call(i,l)&&a(e,l,i[l]);if(o)for(var l of o(i))t.call(i,l)&&a(e,l,i[l]);return e},l=(e,o,n)=>new Promise(((t,a)=>{var i=e=>{try{r(n.next(e))}catch(o){a(o)}},l=e=>{try{r(n.throw(e))}catch(o){a(o)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,l);r((n=n.apply(e,o)).next())}));import{_ as r}from"./TableImg.5efff65a.js";import{g as s}from"./BasicForm.950a284a.js";import{u as d}from"./useTable.84e8a1c5.js";import{g as c,a as p,s as u,d as m,b as f}from"./personal.b613e55d.js";import{P as g}from"./index.dfbcae78.js";import b from"./OrgTree.bfa64902.js";import{b as h}from"./index.037585c2.js";import{_ as j,c as v,s as x}from"./PersonalModal.a1b6436b.js";import y from"./index.12bcfc9a.js";import S from"./index.96092aab.js";import{z as w,aL as I,bX as C,bs as R,bW as P,az as O,b4 as T,bA as M,c0 as k,ci as _,cj as B,ck as D,r as L,u as A,Z as F,D as W,F as z,a3 as V,w as H,a9 as E,J as U,a6 as $,ao as N}from"./vendor.11d66826.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.7635a38a.js";import"./index.1bc1d740.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.072b7c77.js";/* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";/* empty css              */import"./useContentViewHeight.a8198af7.js";import"./Tree.vue_vue&type=style&index=0&lang.c5b92f6c.js";import"./useContextMenu.3cc9931f.js";import"./dept.15e475dd.js";import"./company.6ad3eceb.js";import"./jobGrade.3477c97a.js";import"./positionInfo.b24c363a.js";import"./role.4f6b5e25.js";import"./CompanyTree.c26c45f9.js";var G=w({name:"PersonalManagement",components:{BasicTable:r,Spin:I,Space:C,PageWrapper:g,OrgTree:b,PersonalModal:j,RoleSelector:y,PersonalSelector:S,TableAction:s,Avatar:R,Badge:P,Popconfirm:O,Tag:T,Image:M,DeleteOutlined:k,ManOutlined:_,WomanOutlined:B,UserOutlined:D},setup(){const[e,{openModal:o,setModalProps:n}]=h(),[t,{openModal:a,setModalProps:r}]=h(),[s,{openModal:g,setModalProps:b}]=h(),j=L({}),y=L({}),S=L(""),w=L(!1),I=L({}),[C,{reload:R,setLoading:P}]=d({title:"列表",api:c,columns:v,formConfig:{labelWidth:120,schemas:x,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{showRoles:!0},size:"small",useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"}},beforeFetch:e=>{var o,n;let t={};return"1"===(null==(o=I.value)?void 0:o.sourceType)?t={companyId:A(I).id}:"2"===(null==(n=I.value)?void 0:n.sourceType)&&(t={deptId:A(I).id}),i(i({},e),t)}});function O(){var e,o;let n={};"1"===(null==(e=I.value)?void 0:e.sourceType)?n={companyId:A(I).id}:"2"===(null==(o=I.value)?void 0:o.sourceType)&&(n={deptId:A(I).id}),R({searchInfo:n})}return{registerTable:C,registerRoleModal:t,registerPersonalModal:s,registerModal:e,deleteRoleLoading:y,previewImage:S,previewImageVisible:w,previewImageHandle:function(e){e&&(S.value=e,w.value=!0)},previewImageVisibleChange:function(e,o){w.value=e},handleCreate:function(){let e={};A(I)&&("1"===A(I).sourceType?e={companyId:A(I).id}:"2"===A(I).sourceType&&(e={companyId:A(I).companyId,deptId:A(I).id})),o(!0,{isUpdate:!1,record:e}),n({title:"新增人员",bodyStyle:{padding:"0px",margin:"0px"},width:800,height:400})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0}),n({title:"修改人员",bodyStyle:{padding:"0px",margin:"0px"},width:800,height:420})},confirmDeleteRole:function(e,o){y.value[e]=!0,f({personalId:e,roleId:o}).then((()=>{O()})).finally((()=>{y.value[e]=!1}))},cancelDeleteRole:function(){},handleSettingRoles:function(e){j.value=e,a(!0,{personalId:j.value.id}),r({title:`给【${e.name}(${e.code})】添加角色`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSettingLeader:function(e){j.value=e;let o=[];e.leaderCode&&e.leaderName&&o.push({id:e.id,code:e.leaderCode,name:e.leaderName}),g(!0,{selectorProps:{multiSelect:!1,selectedList:o}}),b({title:`给【${e.name}(${e.code})】设置领导`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleDelete:function(e){m([e.id]).then((e=>{R()}))},handleSuccess:function(){R()},handleSettingRoleSuccess:function(e){return l(this,null,(function*(){const o=e.map((e=>({id:e.id})));yield p({personalId:A(j).id,roles:o}),O()}))},handleSettingLeaderSuccess:function(e){return l(this,null,(function*(){e&&e.length>0&&u({leaderCode:e[0].code,id:A(j).id}).then((()=>{O()})).finally((()=>{}))}))},handleSelect:function(e){I.value=e,O()},doSearch:function(){R()}}}});const J=E("新增"),X={class:"personal-roles"};G.render=function(e,o,n,t,a,i){const l=F("OrgTree"),r=F("a-button"),s=F("TableAction"),d=F("WomanOutlined"),c=F("ManOutlined"),p=F("UserOutlined"),u=F("Avatar"),m=F("Badge"),f=F("DeleteOutlined"),g=F("Popconfirm"),b=F("Tag"),h=F("Space"),j=F("Spin"),v=F("BasicTable"),x=F("Image"),y=F("PersonalModal"),S=F("RoleSelector"),w=F("PersonalSelector"),I=F("PageWrapper");return W(),z(I,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:V((()=>[H(l,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),H(v,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:V((()=>[H(r,{type:"primary",onClick:e.handleCreate},{default:V((()=>[J])),_:1},8,["onClick"])])),action:V((({record:o})=>[H(s,{actions:[{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}],dropDownActions:[{label:"分配角色",title:"分配角色",icon:"ant-design:usergroup-add",onClick:e.handleSettingRoles.bind(null,o)},{title:"设置领导",label:"设置领导",icon:"ant-design:setting-outlined",onClick:e.handleSettingLeader.bind(null,o)}]},null,8,["actions","dropDownActions"])])),nameRender:V((({record:o})=>[H(m,null,{count:V((()=>[2===o.sex?(W(),z(d,{key:0,style:{color:"#f5222d","font-size":"12px"}})):(W(),z(c,{key:1,style:{color:"#1890ff","font-size":"12px"}}))])),default:V((()=>[H(u,{src:o.headImg,onClick:n=>e.previewImageHandle(o.headImg)},{icon:V((()=>[H(p)])),_:2},1032,["src","onClick"])])),_:2},1024),E(" "+U(o.name),1)])),rolesRender:V((({record:o})=>[H("div",X,[H(j,{spinning:!(!e.deleteRoleLoading||!e.deleteRoleLoading[o.id])&&e.deleteRoleLoading[o.id]},{default:V((()=>[H(h,null,{default:V((()=>[(W(!0),z($,null,N(o.roles,(n=>(W(),z(b,{class:"role-item"},{default:V((()=>[E(U(n.name)+" ",1),H(g,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:t=>e.confirmDeleteRole(o.id,n.id),onCancel:e.cancelDeleteRole},{default:V((()=>[H(f,{color:"error",style:{color:"#d9595b"}})])),_:2},1032,["onConfirm","onCancel"])])),_:2},1024)))),256))])),_:2},1024)])),_:2},1032,["spinning"])])])),_:1},8,["onRegister"]),H(x,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"]),H(y,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),H(S,{onRegister:e.registerRoleModal,onSuccess:e.handleSettingRoleSuccess},null,8,["onRegister","onSuccess"]),H(w,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingLeaderSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default G;
