var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,i=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,l=(e,t)=>{for(var a in t||(t={}))r.call(t,a)&&i(e,a,t[a]);if(o)for(var a of o(t))n.call(t,a)&&i(e,a,t[a]);return e},s=(e,t,a)=>new Promise(((o,r)=>{var n=e=>{try{l(a.next(e))}catch(t){r(t)}},i=e=>{try{l(a.throw(e))}catch(t){r(t)}},l=e=>e.done?o(e.value):Promise.resolve(e.value).then(n,i);l((a=a.apply(e,t)).next())}));import{B as d,a as c}from"./index.037585c2.js";import{_ as p}from"./BasicForm.950a284a.js";import{u as m}from"./useForm.7635a38a.js";import{i as u,b as f,a as b}from"./system.cccd6810.js";import{z as g,r as h,j as v,u as w,Z as y,D as P,F as I,a3 as j,w as O,a0 as F}from"./vendor.11d66826.js";const x=[{title:"用户名",dataIndex:"account",width:120},{title:"昵称",dataIndex:"nickname",width:120},{title:"邮箱",dataIndex:"email",width:120},{title:"创建时间",dataIndex:"createTime",width:180},{title:"角色",dataIndex:"role",width:200},{title:"备注",dataIndex:"remark"}],M=[{field:"account",label:"用户名",component:"Input",colProps:{span:8}},{field:"nickname",label:"昵称",component:"Input",colProps:{span:8}}],S=[{field:"account",label:"用户名",component:"Input",helpMessage:["本字段演示异步验证","不能输入带有admin的用户名"],rules:[{required:!0,message:"请输入用户名"},{validator:(e,t)=>new Promise(((e,a)=>{u(t).then((()=>e())).catch((e=>{a(e.message||"验证失败")}))}))}]},{field:"pwd",label:"密码",component:"InputPassword",required:!0,ifShow:!1},{label:"角色",field:"role",component:"ApiSelect",componentProps:{api:f,labelField:"roleName",valueField:"roleValue"},required:!0},{field:"dept",label:"所属部门",component:"TreeSelect",componentProps:{replaceFields:{title:"deptName",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"nickname",label:"昵称",component:"Input",required:!0},{label:"邮箱",field:"email",component:"Input",required:!0},{label:"备注",field:"remark",component:"InputTextArea"}];var k=g({name:"AccountModal",components:{BasicModal:d,BasicForm:p},emits:["success","register"],setup(e,{emit:o}){const r=h(!0),n=h(""),[i,{setFieldsValue:d,updateSchema:p,resetFields:u,validate:f}]=m({labelWidth:100,schemas:S,showActionButtonGroup:!1,actionColOptions:{span:23}}),[g,{setModalProps:y,closeModal:P}]=c((e=>s(this,null,(function*(){u(),y({confirmLoading:!1}),r.value=!!(null==e?void 0:e.isUpdate),w(r)&&(n.value=e.record.id,d(l({},e.record)));const t=yield b();p([{field:"pwd",show:!w(r)},{field:"dept",componentProps:{treeData:t}}])}))));return{registerModal:g,registerForm:i,getTitle:v((()=>w(r)?"编辑账号":"新增账号")),handleSubmit:function(){return s(this,null,(function*(){try{const s=yield f();y({confirmLoading:!0}),P(),o("success",{isUpdate:w(r),values:(e=l({},s),i={id:n.value},t(e,a(i)))})}finally{y({confirmLoading:!1})}var e,i}))}}}});k.render=function(e,t,a,o,r,n){const i=y("BasicForm"),l=y("BasicModal");return P(),I(l,F(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:j((()=>[O(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var B=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:k});export{B as A,k as _,x as c,M as s};
