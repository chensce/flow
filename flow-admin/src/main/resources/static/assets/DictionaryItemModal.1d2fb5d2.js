var v=Object.defineProperty;var g=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var B=(t,r,e)=>r in t?v(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,E=(t,r)=>{for(var e in r||(r={}))w.call(r,e)&&B(t,e,r[e]);if(g)for(var e of g(r))C.call(r,e)&&B(t,e,r[e]);return t};var f=(t,r,e)=>new Promise((n,a)=>{var p=i=>{try{s(e.next(i))}catch(u){a(u)}},m=i=>{try{s(e.throw(i))}catch(u){a(u)}},s=i=>i.done?n(i.value):Promise.resolve(i.value).then(p,m);s((e=e.apply(t,r)).next())});import{B as P,a as R}from"./index.a492e5cd.js";import{B as k}from"./BasicForm.027cbf67.js";import{u as I}from"./useForm.81406efc.js";import{d as N,c as A,s as S}from"./dictionary.ae0290c0.js";import{F as V}from"./constantEnum.bf6653fb.js";import{az as $,a as b,x as O,k as h,h as x,aB as y,i as L,l as U,C as j,q,aC as T}from"./index.e61ad282.js";import"./useWindowSizeFn.27de1b1b.js";import"./FullscreenOutlined.3a424424.js";/* empty css              *//* empty css               */import"./index.9f50e000.js";import"./index.ce1ab63a.js";import"./Checkbox.bb68ead3.js";import"./index.99ef178c.js";import"./index.6e0a0264.js";import"./index.8f86dec4.js";import"./index.9f299dd3.js";import"./index.9233793b.js";import"./get.bca7403a.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./index.6749d186.js";import"./_baseIteratee.7ece590b.js";import"./DeleteOutlined.3b47e95d.js";import"./index.114515de.js";import"./useRefs.0c428178.js";import"./Form.8b25370b.js";import"./Col.f72eb8d0.js";import"./useFlexGapSupport.ed2a5fc1.js";import"./useSize.5a37866d.js";import"./transButton.2c723edc.js";import"./index.8ba0bfed.js";import"./index.dbdde179.js";import"./index.e8295ad9.js";import"./uuid.2b29000c.js";import"./download.810571da.js";import"./base64Conver.08b9f4ec.js";import"./index.ebd81f61.js";import"./index.6d7de824.js";import"./uniqBy.8c214189.js";const z=b({name:"DictionaryItemModal",components:{BasicModal:P,BasicForm:k},emits:["success","register"],setup(t,{emit:r}){const e=O(!0),[n,{setFieldsValue:a,updateSchema:p,resetFields:m,validate:s}]=I({labelWidth:100,schemas:N,showActionButtonGroup:!1,actionColOptions:{span:23}}),i=o=>[{trigger:"blur",validator:(c,F)=>F?A({id:o.id,field:o.field,fieldValue:F,fieldName:o.fieldName}).then(d=>d?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(d=>Promise.reject(d)):Promise.resolve()}],[u,{setModalProps:l,closeModal:D}]=R(o=>f(this,null,function*(){yield m(),l({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate);let c=o.record;yield p([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(V.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:32,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E32\uFF01"},...i({id:h(e)&&c&&c.id||"",field:"code",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),a(E({},o.record))})),M=x(()=>h(e)?"\u4FEE\u6539":"\u65B0\u589E");function _(){return f(this,null,function*(){try{l({confirmLoading:!0});const o=yield s();yield S(o),D(),r("success")}finally{l({confirmLoading:!1})}})}return{registerModal:u,registerForm:n,getTitle:M,handleSubmit:_}}});function G(t,r,e,n,a,p){const m=y("BasicForm"),s=y("BasicModal");return L(),U(s,T(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:j(()=>[q(m,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Se=$(z,[["render",G]]);export{Se as default};