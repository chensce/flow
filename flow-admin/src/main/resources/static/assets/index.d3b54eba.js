import{h as d,B as c}from"./BasicForm.bfb70ce4.js";import{_ as l,h as j}from"./index.aeb7d9f7.js";import{u as x}from"./useForm.9d0149a6.js";import{P as f}from"./index.37a89528.js";import{A as g,bM as r,a0 as o,B as F,a1 as B,a6 as _,w as s}from"./vendor.5879c5ca.js";/* empty css                */import{u as t}from"./upload.3afb4177.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.661e65ad.js";/* empty css                *//* empty css                */import"./index.309f7e13.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";/* empty css                *//* empty css                */import"./useContentViewHeight.6345b5e8.js";const b=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:t}}],h=g({components:{BasicUpload:d,BasicForm:c,PageWrapper:f,[r.name]:r},setup(){const{createMessage:e}=j(),[a]=x({labelWidth:120,schemas:b,actionColOptions:{span:16}});return{handleChange:i=>{e.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(i)}`)},uploadApi:t,register:a}}});function C(e,a,i,A,E,P){const n=o("a-alert"),p=o("BasicUpload"),m=o("BasicForm"),u=o("PageWrapper");return F(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:_(()=>[s(n,{message:"\u57FA\u7840\u793A\u4F8B"}),s(p,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),s(n,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),s(m,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var oe=l(h,[["render",C]]);export{oe as default};
