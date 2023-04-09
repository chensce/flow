var w=Object.defineProperty;var g=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var B=(t,r,e)=>r in t?w(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,E=(t,r)=>{for(var e in r||(r={}))v.call(r,e)&&B(t,e,r[e]);if(g)for(var e of g(r))P.call(r,e)&&B(t,e,r[e]);return t};var f=(t,r,e)=>new Promise((n,a)=>{var p=i=>{try{s(e.next(i))}catch(u){a(u)}},m=i=>{try{s(e.throw(i))}catch(u){a(u)}},s=i=>i.done?n(i.value):Promise.resolve(i.value).then(p,m);s((e=e.apply(t,r)).next())});import{B as R,a as k}from"./index.1f9d3a9d.js";import{B as C}from"./BasicForm.57c6e84a.js";import{u as I}from"./useForm.1f0c5dd1.js";import{d as N,c as A,s as S}from"./dictionary.f5aa7fbb.js";import{F as V}from"./constantEnum.bf6653fb.js";import{az as $,a as b,w as O,j as h,h as j,aB as y,o as L,k as U,B as x,p as T,aC as q}from"./index.97f55544.js";import"./useWindowSizeFn.61edac1b.js";import"./FullscreenOutlined.b5079cb0.js";/* empty css              *//* empty css               */import"./index.4592027a.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.8e778cab.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.12848547.js";import"./get.d05ccbd6.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./useSize.eb64bd2e.js";import"./transButton.76d507e2.js";import"./index.a512493f.js";import"./index.c0d032c8.js";import"./index.39a555ee.js";import"./uuid.2b29000c.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";const z=b({name:"DictionaryItemModal",components:{BasicModal:R,BasicForm:C},emits:["success","register"],setup(t,{emit:r}){const e=O(!0),[n,{setFieldsValue:a,updateSchema:p,resetFields:m,validate:s}]=I({labelWidth:100,schemas:N,showActionButtonGroup:!1,actionColOptions:{span:23}}),i=o=>[{trigger:"blur",validator:(l,F)=>F?A({id:o.id,field:o.field,fieldValue:F,fieldName:o.fieldName}).then(d=>d?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(d=>Promise.reject(d)):Promise.resolve()}],[u,{setModalProps:c,closeModal:D}]=k(o=>f(this,null,function*(){yield m(),c({confirmLoading:!1}),e.value=!!(o!=null&&o.isUpdate);let l=o.record;yield p([{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(V.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:32,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E32\uFF01"},...i({id:h(e)&&l&&l.id||"",field:"code",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),a(E({},o.record))})),M=j(()=>h(e)?"\u4FEE\u6539":"\u65B0\u589E");function _(){return f(this,null,function*(){try{c({confirmLoading:!0});const o=yield s();yield S(o),D(),r("success")}finally{c({confirmLoading:!1})}})}return{registerModal:u,registerForm:n,getTitle:M,handleSubmit:_}}});function G(t,r,e,n,a,p){const m=y("BasicForm"),s=y("BasicModal");return L(),U(s,q(t.$attrs,{onRegister:t.registerModal,title:t.getTitle,onOk:t.handleSubmit}),{default:x(()=>[T(m,{onRegister:t.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Se=$(z,[["render",G]]);export{Se as default};