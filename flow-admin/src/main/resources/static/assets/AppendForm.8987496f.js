var j=(n,s,t)=>new Promise((l,r)=>{var o=e=>{try{a(t.next(e))}catch(p){r(p)}},i=e=>{try{a(t.throw(e))}catch(p){r(p)}},a=e=>e.done?l(e.value):Promise.resolve(e.value).then(o,i);a((t=t.apply(n,s)).next())});import{B as C}from"./BasicForm.bfb70ce4.js";import{u as v}from"./useForm.9d0149a6.js";import{_ as h,ah as F,ar as $}from"./index.aeb7d9f7.js";import{A as g,ao as B,r as P,a0 as u,B as c,a1 as f,a6 as d,w as b,ad as _,ae as x}from"./vendor.5879c5ca.js";import{P as k}from"./index.37a89528.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.661e65ad.js";/* empty css                *//* empty css                *//* empty css                */import"./index.309f7e13.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";/* empty css                *//* empty css                */import"./useContentViewHeight.6345b5e8.js";const I=g({components:{BasicForm:C,CollapseContainer:F,PageWrapper:k,[B.name]:B,Button:$},setup(){const[n,{appendSchemaByField:s,removeSchemaByFiled:t,validate:l}]=v({schemas:[{field:"field0a",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"field0b",component:"Input",label:"\u5B57\u6BB50",colProps:{span:8},required:!0},{field:"0",component:"Input",label:" ",colProps:{span:8},slot:"add"}],labelWidth:100,actionColOptions:{span:24}});function r(){return j(this,null,function*(){try{const e=yield l();console.log(e)}catch(e){console.log(e)}})}const o=P(1);function i(){s({field:`field${o.value}a`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),s({field:`field${o.value}b`,component:"Input",label:"\u5B57\u6BB5"+o.value,colProps:{span:8},required:!0},""),s({field:`${o.value}`,component:"Input",label:" ",colProps:{span:8},slot:"add"},""),o.value++}function a(e){t([`field${e}a`,`field${e}b`,`${e}`]),o.value--}return{register:n,handleSubmit:r,add:i,del:a}}}),S=x("+"),w=x("-");function y(n,s,t,l,r,o){const i=u("Button"),a=u("BasicForm"),e=u("CollapseContainer"),p=u("PageWrapper");return c(),f(p,{title:"\u8868\u5355\u589E\u5220\u793A\u4F8B"},{default:d(()=>[b(e,{title:"\u8868\u5355\u589E\u5220"},{default:d(()=>[b(a,{onRegister:n.register,onSubmit:n.handleSubmit},{add:d(({field:m})=>[Number(m)===0?(c(),f(i,{key:0,onClick:n.add},{default:d(()=>[S]),_:1},8,["onClick"])):_("",!0),m>0?(c(),f(i,{key:1,onClick:W=>n.del(m)},{default:d(()=>[w]),_:2},1032,["onClick"])):_("",!0)]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}var re=h(I,[["render",y]]);export{re as default};
