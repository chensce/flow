var D=Object.defineProperty;var g=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var B=(r,t,e)=>t in r?D(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,E=(r,t)=>{for(var e in t||(t={}))v.call(t,e)&&B(r,e,t[e]);if(g)for(var e of g(t))R.call(t,e)&&B(r,e,t[e]);return r};var f=(r,t,e)=>new Promise((u,a)=>{var p=i=>{try{s(e.next(i))}catch(n){a(n)}},m=i=>{try{s(e.throw(i))}catch(n){a(n)}},s=i=>i.done?u(i.value):Promise.resolve(i.value).then(p,m);s((e=e.apply(r,t)).next())});import{B as P,a as k}from"./index.ef1baeca.js";import{B as C}from"./BasicForm.35bf3188.js";import{u as N}from"./useForm.8dec0b63.js";import{f as $,g as A,h as S}from"./dictionary.4c084eb9.js";import{F as V}from"./constantEnum.bf6653fb.js";import{az as b,a as O,w as j,j as h,h as L,aB as y,o as U,k as x,B as T,p as q,aC as z}from"./index.741c5d36.js";import"./useWindowSizeFn.54947215.js";import"./FullscreenOutlined.d8f1076a.js";/* empty css              *//* empty css               */import"./index.d23d5e7f.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.abe396df.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.249616b7.js";import"./get.9f08d1a5.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./useSize.aa4022ca.js";import"./transButton.76f8f88c.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./index.ae783029.js";import"./uuid.2b29000c.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";const G=O({name:"DictionaryModal",components:{BasicModal:P,BasicForm:C},emits:["success","register"],setup(r,{emit:t}){const e=j(!0),[u,{setFieldsValue:a,updateSchema:p,resetFields:m,validate:s}]=N({labelWidth:100,schemas:$,showActionButtonGroup:!1,actionColOptions:{span:23}}),i=o=>[{trigger:"blur",validator:(c,F)=>F?A({id:o.id,field:o.field,fieldValue:F,fieldName:o.fieldName}).then(d=>d?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(d=>Promise.reject(d)):Promise.resolve()}],[n,{setModalProps:l,closeModal:w}]=k(o=>f(this,null,function*(){yield m(),l({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate);let c=o.record;yield p([{field:"code",dynamicRules:()=>[{whitespace:!0,required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(V.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{pattern:new RegExp("^.{1,32}$"),type:"string",message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E32\uFF01"},...i({id:h(e)&&c&&c.id||"",field:"code",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),a(E({},o.record))})),M=L(()=>h(e)?"\u4FEE\u6539":"\u65B0\u589E");function _(){return f(this,null,function*(){try{l({confirmLoading:!0});const o=yield s();yield S(o),w(),t("success")}finally{l({confirmLoading:!1})}})}return{registerModal:n,registerForm:u,getTitle:M,handleSubmit:_}}});function I(r,t,e,u,a,p){const m=y("BasicForm"),s=y("BasicModal");return U(),x(s,z(r.$attrs,{onRegister:r.registerModal,title:r.getTitle,onOk:r.handleSubmit}),{default:T(()=>[q(m,{onRegister:r.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Se=b(G,[["render",I]]);export{Se as default};