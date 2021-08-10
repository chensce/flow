import{_ as e}from"./TableImg.01909c7a.js";import{f as t}from"./BasicForm.eea5fa1e.js";import{u as o}from"./useTable.01292fb5.js";import{g as i}from"./system.ceb52c6e.js";import{P as n}from"./index.ea4ee88b.js";import s from"./DeptTree.e6ed67c0.js";import{b as a}from"./index.389b283b.js";import{_ as r,c as d,s as c}from"./AccountModal.e8cec7cc.js";import{j as l,K as m,o as p,m as u,Q as f,n as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7a8e214e.js";import"./index.521cc965.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.2c598b04.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65686dd7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.10dab641.js";import"./base64Conver.bb012c73.js";import"./index.98e5d523.js";import"./useContentViewHeight.979ee31e.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.ab3c02da.js";import"./useContextMenu.7355e9cb.js";var x=l({name:"AccountManagement",components:{BasicTable:e,PageWrapper:n,DeptTree:s,AccountModal:r,TableAction:t},setup(){const[e,{openModal:t}]=a(),[n,{reload:s,updateTableDataRecord:r}]=o({title:"账号列表",api:i,rowKey:"id",columns:d,formConfig:{labelWidth:120,schemas:c},useSearchForm:!0,showTableSetting:!0,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:n,registerModal:e,handleCreate:function(){t(!0,{isUpdate:!1})},handleEdit:function(e){t(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function({isUpdate:e,values:t}){if(e){r(t.id,t)}else s()},handleSelect:function(e=""){s({searchInfo:{deptId:e}})}}}});const g=j("新增账号");x.render=function(e,t,o,i,n,s){const a=m("DeptTree"),r=m("a-button"),d=m("TableAction"),c=m("BasicTable"),l=m("AccountModal"),j=m("PageWrapper");return p(),u(j,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:f((()=>[b(a,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),b(c,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:f((()=>[b(r,{type:"primary",onClick:e.handleCreate},{default:f((()=>[g])),_:1},8,["onClick"])])),action:f((({record:t})=>[b(d,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default x;