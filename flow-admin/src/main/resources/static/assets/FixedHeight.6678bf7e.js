import{_ as e}from"./TableImg.f5e002b4.js";import"./BasicForm.4f71108f.js";import{u as s}from"./useTable.38359fc9.js";import{getCustomHeaderColumns as o}from"./tableData.83d6955e.js";import{d as t}from"./table.2a8a22a3.js";import{am as i}from"./index.574e7466.js";import{k as r,bK as a,K as m,o as n,n as d,q as p,Q as c,Y as f}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              */import"./useForm.4c43bf99.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.d0559e60.js";import"./useModal.919850c0.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97253202.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";var j=r({components:{BasicTable:e,FormOutlined:a,BasicHelp:i},setup(){const[e]=s({title:"定高/头部自定义",api:t,columns:o(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const l={class:"p-4"},u=f(" 姓名 "),b=f(" 地址 ");j.render=function(e,s,o,t,i,r){const a=m("BasicHelp"),f=m("FormOutlined"),j=m("BasicTable");return n(),d("div",l,[p(j,{onRegister:e.registerTable},{customTitle:c((()=>[p("span",null,[u,p(a,{class:"ml-2",text:"姓名"})])])),customAddress:c((()=>[b,p(f,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default j;