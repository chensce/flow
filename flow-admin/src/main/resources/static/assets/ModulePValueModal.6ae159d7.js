var _=Object.defineProperty;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var d=(e,t,o)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,f=(e,t)=>{for(var o in t||(t={}))w.call(t,o)&&d(e,o,t[o]);if(u)for(var o of u(t))v.call(t,o)&&d(e,o,t[o]);return e};var c=(e,t,o)=>new Promise((n,p)=>{var l=r=>{try{i(o.next(r))}catch(s){p(s)}},a=r=>{try{i(o.throw(r))}catch(s){p(s)}},i=r=>r.done?n(r.value):Promise.resolve(r.value).then(l,a);i((o=o.apply(e,t)).next())});import{B as k,a as C}from"./index.4ff668bf.js";import{B as $}from"./BasicForm.d8aa86d3.js";import{u as b}from"./useForm.d7bb3373.js";import{f as y,b as R}from"./module.data.c6baaa5f.js";import{az as S,a as E,x as L,k as g,h as O,aB as h,i as P,l as U,C as V,q as T,aC as q}from"./index.ef013507.js";import"./useWindowSizeFn.37be93ea.js";import"./FullscreenOutlined.d97e6502.js";/* empty css              *//* empty css               */import"./index.8a7cb11f.js";import"./index.64234a26.js";import"./Checkbox.d561740d.js";import"./index.d845ac75.js";import"./index.0b0495b0.js";import"./index.4822de2c.js";import"./index.7f88299e.js";import"./index.0e08ed6e.js";import"./get.fbc063d7.js";import"./index.4dfcf0e9.js";import"./eagerComputed.487f958f.js";import"./index.ac5849f2.js";import"./_baseIteratee.39b06e56.js";import"./DeleteOutlined.fda42126.js";import"./index.7e4b5f10.js";import"./useRefs.5ed2b70f.js";import"./Form.36fbea16.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useSize.55446702.js";import"./transButton.750f7635.js";import"./index.edd8ff4a.js";import"./index.0bfe1343.js";import"./index.27c2d820.js";import"./uuid.2b29000c.js";import"./download.c25570af.js";import"./base64Conver.08b9f4ec.js";import"./index.30e1f68c.js";import"./index.4e2ec58e.js";import"./uniqBy.4bac5850.js";const z=E({name:"ModuleModal",components:{BasicModal:k,BasicForm:$},emits:["success","register"],setup(e,{emit:t}){const o=L(!0),[n,{resetFields:p,setFieldsValue:l,updateSchema:a,validate:i}]=b({labelWidth:100,schemas:y,showActionButtonGroup:!1}),[r,{setModalProps:s,closeModal:B}]=C(m=>c(this,null,function*(){p(),s({confirmLoading:!1}),o.value=!!(m!=null&&m.isUpdate),g(o)?(l(f({},m.record)),a([{field:"component",show:!1},{field:"url",show:!1}])):a([{field:"component",show:!0},{field:"url",show:!0}])})),M=O(()=>g(o)?"\u4FEE\u6539":"\u65B0\u589E");function F(){return c(this,null,function*(){try{s({confirmLoading:!0});const m=yield i();yield R(m),B(),t("success")}finally{s({confirmLoading:!1})}})}return{registerModal:r,registerForm:n,getTitle:M,handleSubmit:F}}});function A(e,t,o,n,p,l){const a=h("BasicForm"),i=h("BasicModal");return P(),U(i,q(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:V(()=>[T(a,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var yo=S(z,[["render",A]]);export{yo as default};