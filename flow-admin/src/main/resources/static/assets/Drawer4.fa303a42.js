import{B as e,a as i}from"./index.9aaa1e13.js";import{_ as s}from"./BasicForm.950a284a.js";import{u as o}from"./useForm.7635a38a.js";import{z as r,Z as t,D as a,F as n,a3 as d,w as m,a0 as p}from"./vendor.11d66826.js";import"./index.1bc1d740.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./index.037585c2.js";import"./useWindowSizeFn.9fecf134.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:12},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:12}}];var f=r({components:{BasicDrawer:e,BasicForm:s},setup(){const[e,{setFieldsValue:s}]=o({labelWidth:120,schemas:c,showActionButtonGroup:!1,actionColOptions:{span:24}}),[r]=i((e=>{s({field2:e.data,field1:e.info})}));return{register:r,schemas:c,registerForm:e}}});f.render=function(e,i,s,o,r,c){const f=t("BasicForm"),l=t("BasicDrawer");return a(),n(l,p(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:d((()=>[m("div",null,[m(f,{onRegister:e.registerForm},null,8,["onRegister"])])])),_:1},16,["onRegister"])};export default f;
