import{_ as e}from"./TableImg.5efff65a.js";import{g as o}from"./BasicForm.950a284a.js";import{u as t}from"./useTable.84e8a1c5.js";import{g as n,d as i}from"./dept.15e475dd.js";import{P as a}from"./index.dfbcae78.js";import r from"./CompanyTree.c26c45f9.js";import{h as s}from"./index.1bc1d740.js";import{b as d}from"./index.037585c2.js";import{_ as l,c,s as p}from"./DeptModal.2a6d50f6.js";import{z as m,r as f,u,Z as j,D as b,F as h,a3 as x,w as g,a9 as C}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.7635a38a.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.072b7c77.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";/* empty css              *//* empty css              */import"./useContentViewHeight.a8198af7.js";import"./Tree.vue_vue&type=style&index=0&lang.c5b92f6c.js";import"./useContextMenu.3cc9931f.js";import"./company.6ad3eceb.js";import"./index.96092aab.js";import"./personal.b613e55d.js";import"./OrgTree.bfa64902.js";const{createMessage:w}=s();var S=m({name:"DeptManagement",components:{BasicTable:e,PageWrapper:a,CompanyTree:r,DeptModal:l,TableAction:o},setup(){const[e,{openModal:o,setModalProps:a}]=d(),r=f({}),[s,{reload:l}]=t({title:"列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:s,registerModal:e,handleCreate:function(){var e;a({title:"新增部门"}),o(!0,{record:{companyId:null==(e=u(r))?void 0:e.id},isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),a({title:"修改部门"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),a({title:"新增【"+e.name+"】的子部门"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?w.warning("有子节点，不能删除！"):i([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},handleSelect:function(e){r.value=e,l({searchInfo:{companyId:e?e.id:""}})},doSearch:function(){l()}}}});const T=C("新增");S.render=function(e,o,t,n,i,a){const r=j("CompanyTree"),s=j("a-button"),d=j("TableAction"),l=j("BasicTable"),c=j("DeptModal"),p=j("PageWrapper");return b(),h(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x((()=>[g(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),g(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:x((()=>[g(s,{type:"primary",onClick:e.handleCreate},{default:x((()=>[T])),_:1},8,["onClick"])])),action:x((({record:o})=>[g(d,{actions:[{tooltip:"添加子部门",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default S;
