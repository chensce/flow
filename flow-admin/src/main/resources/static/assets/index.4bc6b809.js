import{_ as e}from"./TableImg.b2cbcdc7.js";import{f as i}from"./BasicForm.5f023be7.js";import{u as o}from"./useTable.3d3628a5.js";import{g as t,d as n}from"./appPrivilegeValue.792b96ba.js";import{P as a}from"./perEnum.9a5ef72f.js";import{_ as r,c as s}from"./AppPrivilegeValueModal.bdbe9958.js";import{b as d}from"./index.8fb54afb.js";import{A as l}from"./index.61c8ffd1.js";import{j as m,K as c,o as p,m as u,n as f,Q as b,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.a5bb66b5.js";import"./index.566a0f72.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.daf56be4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.aab58ddb.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d803bd00.js";import"./base64Conver.bb012c73.js";import"./index.2b41fb21.js";var x=m({name:"AppPrivilegeValue",components:{BasicTable:e,TableAction:i,AppModal:r,Authority:l},setup(){const[e,{openModal:i}]=d(),[r,{reload:l}]=o({title:"列表",api:t,columns:s,canColDrag:!0,useSearchForm:!1,pagination:!1,bordered:!0,showIndexColumn:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:a,registerTable:r,registerModal:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n([e.id]).then((e=>{l()}))},handleSuccess:function(){l()}}}});const h=j(" 新增 ");x.render=function(e,i,o,t,n,a){const r=c("a-button"),s=c("Authority"),d=c("TableAction"),l=c("BasicTable"),m=c("AppModal");return p(),u("div",null,[f(l,{onRegister:e.registerTable},{toolbar:b((()=>[f(s,{value:this.$options.name+":"+e.PerEnum.ADD},{default:b((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:b((()=>[h])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:b((({record:i})=>[f(d,{actions:[{auth:this.$options.name+":"+e.PerEnum.UPDATE,title:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{auth:this.$options.name+":"+e.PerEnum.DELETE,title:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),f(m,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;