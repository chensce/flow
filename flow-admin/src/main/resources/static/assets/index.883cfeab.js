var e=Object.defineProperty,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,i=(o,n,t)=>n in o?e(o,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[n]=t,a=(e,a)=>{for(var l in a||(a={}))n.call(a,l)&&i(e,l,a[l]);if(o)for(var l of o(a))t.call(a,l)&&i(e,l,a[l]);return e},l=(e,o,n)=>new Promise(((t,i)=>{var a=e=>{try{r(n.next(e))}catch(o){i(o)}},l=e=>{try{r(n.throw(e))}catch(o){i(o)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,l);r((n=n.apply(e,o)).next())}));import{_ as r}from"./TableImg.aa3bf976.js";import{g as s}from"./BasicForm.d6bc90d8.js";import{u as d}from"./useTable.2b02bf57.js";import{g as c,a as p,s as u,d as m,b as f}from"./personal.f83d5c05.js";import{P as g}from"./index.ee54ff18.js";import b from"./OrgTree.5487349d.js";import{b as h}from"./index.116df12f.js";import{_ as j,c as v,s as x}from"./PersonalModal.cdfe60d9.js";import y from"./index.47bffbfc.js";import S from"./index.a86d1c19.js";import{y as w,aL as I,bY as C,bt as R,bX as P,az as O,b5 as T,bB as M,c1 as k,ck as B,cl as _,cm as L,r as D,u as A,Z as F,B as V,F as W,a2 as z,v as H,a9 as E,J as U,a7 as $,ao as N}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useForm.1b895cf0.js";import"./index.10e3b51a.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.6ed16464.js";/* empty css              *//* empty css              */import"./index.981ceacd.js";/* empty css              *//* empty css              *//* empty css              */import"./download.db26d4fe.js";import"./base64Conver.bb012c73.js";import"./index.f38aca4b.js";/* empty css              */import"./useContentViewHeight.17c92794.js";import"./Tree.vue_vue&type=style&index=0&lang.3379d7f3.js";import"./useContextMenu.71a4b76c.js";import"./dept.8d57faeb.js";import"./company.02453d30.js";import"./jobGrade.efe05848.js";import"./positionInfo.7d58a220.js";import"./role.cd581621.js";import"./CompanyTree.365b3ab2.js";var G=w({name:"PersonalManagement",components:{BasicTable:r,Spin:I,Space:C,PageWrapper:g,OrgTree:b,PersonalModal:j,RoleSelector:y,PersonalSelector:S,TableAction:s,Avatar:R,Badge:P,Popconfirm:O,Tag:T,Image:M,DeleteOutlined:k,ManOutlined:B,WomanOutlined:_,UserOutlined:L},setup(){const[e,{openModal:o,setModalProps:n}]=h(),[t,{openModal:i,setModalProps:r}]=h(),[s,{openModal:g,setModalProps:b}]=h(),j=D({}),y=D({}),S=D(""),w=D(!1),I=D({}),[C,{reload:R,setLoading:P}]=d({title:"列表",api:c,columns:v,formConfig:{labelWidth:120,schemas:x,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},searchInfo:{showRoles:!0},size:"small",useSearchForm:!0,showIndexColumn:!1,bordered:!0,actionColumn:{width:120,title:"操作",dataIndex:"action",slots:{customRender:"action"}},beforeFetch:e=>{var o,n;let t={};return"1"===(null==(o=I.value)?void 0:o.sourceType)?t={companyId:A(I).id}:"2"===(null==(n=I.value)?void 0:n.sourceType)&&(t={deptId:A(I).id}),a(a({},e),t)}});function O(){var e,o;let n={};"1"===(null==(e=I.value)?void 0:e.sourceType)?n={companyId:A(I).id}:"2"===(null==(o=I.value)?void 0:o.sourceType)&&(n={deptId:A(I).id}),R({searchInfo:n})}return{registerTable:C,registerRoleModal:t,registerPersonalModal:s,registerModal:e,deleteRoleLoading:y,previewImage:S,previewImageVisible:w,previewImageHandle:function(e){e&&(S.value=e,w.value=!0)},previewImageVisibleChange:function(e,o){w.value=e},handleCreate:function(){let e={};A(I)&&("1"===A(I).sourceType?e={companyId:A(I).id}:"2"===A(I).sourceType&&(e={companyId:A(I).companyId,deptId:A(I).id})),o(!0,{isUpdate:!1,record:e}),n({title:"新增人员",bodyStyle:{padding:"0px",margin:"0px"},width:800,height:400})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0}),n({title:"修改人员",bodyStyle:{padding:"0px",margin:"0px"},width:800,height:420})},confirmDeleteRole:function(e,o){y.value[e]=!0,f({personalId:e,roleId:o}).then((()=>{O()})).finally((()=>{y.value[e]=!1}))},cancelDeleteRole:function(){},handleSettingRoles:function(e){j.value=e,i(!0,{personalId:j.value.id}),r({title:`给【${e.name}(${e.code})】添加角色`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleSettingLeader:function(e){j.value=e;let o=[];e.leaderCode&&e.leaderName&&o.push({id:e.id,code:e.leaderCode,name:e.leaderName}),g(!0,{selectorProps:{multiSelect:!1,selectedList:o}}),b({title:`给【${e.name}(${e.code})】设置领导`,bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})},handleDelete:function(e){m([e.id]).then((e=>{R()}))},handleSuccess:function(){R()},handleSettingRoleSuccess:function(e){return l(this,null,(function*(){const o=e.map((e=>({id:e.id})));yield p({personalId:A(j).id,roles:o}),O()}))},handleSettingLeaderSuccess:function(e){return l(this,null,(function*(){e&&e.length>0&&u({leaderCode:e[0].code,id:A(j).id}).then((()=>{O()})).finally((()=>{}))}))},handleSelect:function(e){I.value=e,O()},doSearch:function(){R()}}}});const J=E("新增"),X={class:"personal-roles"};G.render=function(e,o,n,t,i,a){const l=F("OrgTree"),r=F("a-button"),s=F("TableAction"),d=F("WomanOutlined"),c=F("ManOutlined"),p=F("UserOutlined"),u=F("Avatar"),m=F("Badge"),f=F("DeleteOutlined"),g=F("Popconfirm"),b=F("Tag"),h=F("Space"),j=F("Spin"),v=F("BasicTable"),x=F("Image"),y=F("PersonalModal"),S=F("RoleSelector"),w=F("PersonalSelector"),I=F("PageWrapper");return V(),W(I,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:z((()=>[H(l,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),H(v,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:z((()=>[H(r,{type:"primary",onClick:e.handleCreate},{default:z((()=>[J])),_:1},8,["onClick"])])),action:z((({record:o})=>[H(s,{actions:[{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}],dropDownActions:[{label:"分配角色",title:"分配角色",icon:"ant-design:usergroup-add",onClick:e.handleSettingRoles.bind(null,o)},{title:"设置领导",label:"设置领导",icon:"ant-design:setting-outlined",onClick:e.handleSettingLeader.bind(null,o)}]},null,8,["actions","dropDownActions"])])),nameRender:z((({record:o})=>[H(m,null,{count:z((()=>[2===o.sex?(V(),W(d,{key:0,style:{color:"#f5222d","font-size":"12px"}})):(V(),W(c,{key:1,style:{color:"#1890ff","font-size":"12px"}}))])),default:z((()=>[H(u,{src:o.headImg,onClick:n=>e.previewImageHandle(o.headImg)},{icon:z((()=>[H(p)])),_:2},1032,["src","onClick"])])),_:2},1024),E(" "+U(o.name),1)])),rolesRender:z((({record:o})=>[H("div",X,[H(j,{spinning:!(!e.deleteRoleLoading||!e.deleteRoleLoading[o.id])&&e.deleteRoleLoading[o.id]},{default:z((()=>[H(h,null,{default:z((()=>[(V(!0),W($,null,N(o.roles,(n=>(V(),W(b,{class:"role-item"},{default:z((()=>[E(U(n.name)+" ",1),H(g,{title:"确定要删除吗?","ok-text":"确定","cancel-text":"取消",onConfirm:t=>e.confirmDeleteRole(o.id,n.id),onCancel:e.cancelDeleteRole},{default:z((()=>[H(f,{color:"error",style:{color:"#d9595b"}})])),_:2},1032,["onConfirm","onCancel"])])),_:2},1024)))),256))])),_:2},1024)])),_:2},1032,["spinning"])])])),_:1},8,["onRegister"]),H(x,{width:0,height:0,src:e.previewImage,preview:{visible:e.previewImageVisible,onVisibleChange:e.previewImageVisibleChange}},null,8,["src","preview"]),H(y,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),H(S,{onRegister:e.registerRoleModal,onSuccess:e.handleSettingRoleSuccess},null,8,["onRegister","onSuccess"]),H(w,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingLeaderSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default G;