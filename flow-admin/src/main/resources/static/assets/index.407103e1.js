import{_ as e}from"./TableImg.2164fbb5.js";import{f as o}from"./BasicForm.6aa2f34f.js";import{u as i}from"./useTable.c766bad0.js";import{b as t}from"./index.e1dd33bd.js";import{_ as n,c as d,s as a}from"./JobGradeTypeModal.978d7c3e.js";import{a as r,d as s}from"./jobGradeType.ec145fd1.js";import{j as c,K as l,o as m,m as p,n as b,Q as f,Y as u}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.d7887b42.js";import"./index.99f998d8.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e5d10da7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b526d419.js";/* empty css              *//* empty css              *//* empty css              */import"./download.9a81d061.js";import"./base64Conver.bb012c73.js";import"./index.4641642c.js";var j=c({name:"JobGradeType",components:{BasicTable:e,TableAction:o,JobGradeTypeModal:n},setup(){const[e,{openModal:o}]=t(),[n,{reload:c}]=i({title:"列表",api:r,columns:d,formConfig:{labelWidth:120,schemas:a,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,pagination:!1,showIndexColumn:!1,isTreeTable:!0,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{registerTable:n,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){s(e.id).then((()=>{c()}))},handleSuccess:function(){c()}}}});const x=u(" 新增 ");j.render=function(e,o,i,t,n,d){const a=l("a-button"),r=l("TableAction"),s=l("BasicTable"),c=l("JobGradeTypeModal");return m(),p("div",null,[b(s,{onRegister:e.registerTable},{toolbar:f((()=>[b(a,{type:"primary",onClick:e.handleCreate},{default:f((()=>[x])),_:1},8,["onClick"])])),action:f((({record:o})=>[b(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),b(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;