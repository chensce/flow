var x=Object.defineProperty;var h=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var E=(a,t,e)=>t in a?x(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,b=(a,t)=>{for(var e in t||(t={}))_.call(t,e)&&E(a,e,t[e]);if(h)for(var e of h(t))j.call(t,e)&&E(a,e,t[e]);return a};var g=(a,t,e)=>new Promise((s,l)=>{var c=u=>{try{n(e.next(u))}catch(i){l(i)}},r=u=>{try{n(e.throw(u))}catch(i){l(i)}},n=u=>u.done?s(u.value):Promise.resolve(u.value).then(c,r);n((e=e.apply(a,t)).next())});import{B as C,a as P}from"./index.309f7e13.js";import{B as S}from"./BasicForm.bfb70ce4.js";import{u as v}from"./useForm.9d0149a6.js";import{z as A,ba as N,A as R,r as q,u as B,j as k,a0 as I,B as $,a1 as K,a6 as L,w as O,a4 as T}from"./vendor.5879c5ca.js";/* empty css               */import{e as V,s as U}from"./modelInfo.8dec6c05.js";import{a as W}from"./app.19f09dd6.js";import{_ as z,r as G}from"./index.aeb7d9f7.js";import{F as Y}from"./constantEnum.82824ec7.js";const ie=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"KEY",dataIndex:"modelKey",width:100,align:"left"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"categoryName",width:100,align:"left"},{title:"\u7CFB\u7EDF",dataIndex:"appName",width:100,align:"left"},{title:"\u5E94\u7528\u8303\u56F4",dataIndex:"appliedRangeName",width:100,align:"left"},{title:"\u72B6\u6001",dataIndex:"statusName",width:70,align:"center",customRender:({record:a})=>{const{status:t,statusName:e}=a;var s="";return~~t==2?s="yellow":~~t==3?s="green":~~t==4?s="red":s="gray",A(N,{color:s},()=>e)}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",width:120,align:"left"}],de=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"appSn",label:"\u7CFB\u7EDF",component:"Select",labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],H=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"categoryCode",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:200,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E200\uFF01"}]},{field:"modelKey",label:"\u6807\u8BC6",component:"Input",required:!0},{field:"appSn",label:"\u6240\u5C5E\u7CFB\u7EDF",component:"Select",componentProps:{getPopupContainer:()=>document.body},required:!0}],J=R({name:"ModelInfoModal",components:{BasicModal:C,BasicForm:S},emits:["success","register"],setup(a,{emit:t}){const e=q(!0),s=G(),[l,{setFieldsValue:c,updateSchema:r,resetFields:n,validate:u}]=v({labelWidth:100,schemas:H,showActionButtonGroup:!1,actionColOptions:{span:23}}),i=o=>[{trigger:"blur",validator:(d,m)=>m?V({id:o.id,field:o.field,fieldValue:m,fieldName:o.fieldName}).then(F=>F?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(F=>Promise.reject(F)):Promise.resolve()}],[w,{setModalProps:f,changeLoading:p,closeModal:y}]=P(o=>g(this,null,function*(){n(),f({confirmLoading:!1}),e.value=!!(o==null?void 0:o.isUpdate),p(!0);let d=null;try{d=yield W()}finally{p(!1)}let m=o.record;yield r([{field:"appSn",componentProps:{options:d,labelField:"id"}},{field:"modelKey",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(Y.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:150,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E150\uFF01"},...i({id:B(e)&&m&&m.id||"",field:"modelKey",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),B(e)&&c(b({},o.record))})),D=k(()=>B(e)?"\u7F16\u8F91":"\u65B0\u589E");function M(){return g(this,null,function*(){try{f({confirmLoading:!0});const o=yield u(),d=yield U(o);s("/flowable/bpmn/designer?modelId="+d.modelId),y(),t("success")}finally{p(!1),f({confirmLoading:!1})}})}return{registerModal:w,registerForm:l,getTitle:D,handleSubmit:M}}});function Q(a,t,e,s,l,c){const r=I("BasicForm"),n=I("BasicModal");return $(),K(n,T(a.$attrs,{onRegister:a.registerModal,title:a.getTitle,onOk:a.handleSubmit}),{default:L(()=>[O(r,{onRegister:a.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var X=z(J,[["render",Q]]),me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:X});export{X as M,me as a,ie as c,de as s};
