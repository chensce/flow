import{_ as e}from"./TableImg.2164fbb5.js";import{f as t}from"./BasicForm.6aa2f34f.js";import{u as i}from"./useTable.c766bad0.js";import{d as n}from"./table.543d2066.js";import{j as o,K as d,o as a,m as s,n as r,Q as l}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.d7887b42.js";import"./index.99f998d8.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.e1dd33bd.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.e5d10da7.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b526d419.js";/* empty css              *//* empty css              *//* empty css              */import"./download.9a81d061.js";import"./base64Conver.bb012c73.js";import"./index.4641642c.js";const m=[{title:"编号",dataIndex:"no",width:100},{title:"姓名",dataIndex:"name",auth:"test"},{title:"状态",dataIndex:"status"},{title:"地址",dataIndex:"address",auth:"super",ifShow:e=>!0},{title:"开始时间",dataIndex:"beginTime"},{title:"结束时间",dataIndex:"endTime",width:200}];var p=o({components:{BasicTable:e,TableAction:t},setup(){const[e]=i({title:"TableAction组件及固定列示例",api:n,columns:m,bordered:!0,actionColumn:{width:250,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:e,handleEdit:function(e){},handleDelete:function(e){},handleOpen:function(e){}}}});const c={class:"p-4"};p.render=function(e,t,i,n,o,m){const p=d("TableAction"),b=d("BasicTable");return a(),s("div",c,[r(b,{onRegister:e.registerTable},{action:l((({record:t})=>[r(p,{actions:[{label:"编辑",onClick:e.handleEdit.bind(null,t),auth:"other"},{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,t),auth:"super"}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,t)},ifShow:e=>"enable"!==t.status},{label:"禁用",popConfirm:{title:"是否禁用？",confirm:e.handleOpen.bind(null,t)},ifShow:()=>"enable"===t.status},{label:"同时控制",popConfirm:{title:"是否动态显示？",confirm:e.handleOpen.bind(null,t)},auth:"super",ifShow:()=>!0}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])};export default p;