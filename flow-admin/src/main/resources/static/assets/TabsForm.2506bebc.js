var _=(a,n,r)=>new Promise((i,b)=>{var c=s=>{try{u(r.next(s))}catch(o){b(o)}},m=s=>{try{u(r.throw(s))}catch(o){b(o)}},u=s=>s.done?i(s.value):Promise.resolve(s.value).then(c,m);u((r=r.apply(a,n)).next())});import{az as h,a as k,cE as E,w as g,ar as $,aB as f,bS as A,y as T,o as y,k as v,B as p,n as P,p as F,C,i as D,F as w,aE as K,aC as V,dM as S,G as R}from"./index.da587afe.js";import{T as B}from"./index.77df2807.js";import{P as M}from"./index.c0d22213.js";import{B as W}from"./BasicForm.51e3eb56.js";import{u as N}from"./useForm.d201bd46.js";import"./useRefs.1aead304.js";import"./PlusOutlined.3b3e37c8.js";import"./index.a0d7e8a1.js";import"./index.6d85aa5b.js";import"./useSize.dbee3c08.js";import"./eagerComputed.3bbb876f.js";import"./useWindowSizeFn.3fdab581.js";import"./useContentViewHeight.f2db75e2.js";import"./ArrowLeftOutlined.8a04d10c.js";import"./index.25a87437.js";import"./transButton.1d3b575b.js";/* empty css              *//* empty css               */import"./index.a64c8a60.js";import"./index.492229cd.js";import"./Checkbox.9d75a86f.js";import"./index.5aab84c4.js";import"./index.9d0fc194.js";import"./index.447b3242.js";import"./index.d7c8b760.js";import"./index.b3a5d1df.js";import"./get.40c34cfc.js";import"./index.a85fa86f.js";import"./index.3c9c3a6f.js";import"./_baseIteratee.78d8c020.js";import"./DeleteOutlined.690086a4.js";import"./index.d1cda802.js";import"./Form.f8b72655.js";import"./Col.4ac749bb.js";import"./useFlexGapSupport.caa26b6d.js";import"./index.5d1da0c4.js";import"./index.e8eb4b57.js";import"./FullscreenOutlined.3d903e0f.js";import"./index.72d53e09.js";import"./index.813f510f.js";import"./uuid.2b29000c.js";import"./download.75f04d3f.js";import"./base64Conver.08b9f4ec.js";import"./index.9912aa68.js";import"./index.36675b6e.js";import"./uniqBy.f906dabc.js";const j=k({name:"TabsFormDemo",components:{Tabs:B,TabPane:B.TabPane,PageWrapper:M,CollapseContainer:E,BasicForm:W},setup(){const{createMessage:a}=R(),n=g("tabs2"),r=g(!1),i=[],b={showActionButtonGroup:!1,labelWidth:100},c={};for(let o=1;o<=5;++o){const e=`tabs${o}`,l=[],d={};for(let t=1;t<=8;++t)l.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),d[`field${t}`]=`field: ${e}.field${t}, default value`;c[e]=d,i.push({key:e,tab:e,forceRender:!0,Form:N(Object.assign({schemas:l},b))})}function m(){return _(this,null,function*(){for(const o of i){const{resetFields:e}=o.Form[1];yield e()}})}function u(){return _(this,null,function*(){let o="";r.value=!0;try{const e={};for(const l of i){o=l.key;const{validate:d,getFieldsValue:t}=l.Form[1];yield d(),S(e,t())}a.success("\u63D0\u4EA4\u6210\u529F\uFF01\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")}catch(e){n.value=o}finally{r.value=!1}})}function s(){return _(this,null,function*(){for(const o of i){const{setFieldsValue:e}=o.Form[1];yield e(c)}})}return{omit:$,loading:r,activeKey:n,tabsFormSchema:i,handleReset:m,handleSubmit:u,handleSetValues:s}}}),G={class:"mb-4"};function z(a,n,r,i,b,c){const m=f("a-button"),u=f("BasicForm"),s=f("TabPane"),o=f("Tabs"),e=f("CollapseContainer"),l=f("PageWrapper"),d=A("loading");return T((y(),v(l,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[P("div",G,[F(m,{onClick:a.handleReset,class:"mr-2"},{default:p(()=>[C(" \u91CD\u7F6E\u8868\u5355 ")]),_:1},8,["onClick"]),F(m,{onClick:a.handleSetValues,class:"mr-2"},{default:p(()=>[C(" \u8BBE\u7F6E\u9ED8\u8BA4\u503C ")]),_:1},8,["onClick"]),F(m,{onClick:a.handleSubmit,class:"mr-2",type:"primary"},{default:p(()=>[C(" \u63D0\u4EA4\u8868\u5355 ")]),_:1},8,["onClick"])]),F(e,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:p(()=>[F(o,{activeKey:a.activeKey,"onUpdate:activeKey":n[0]||(n[0]=t=>a.activeKey=t)},{default:p(()=>[(y(!0),D(w,null,K(a.tabsFormSchema,t=>(y(),v(s,V({key:t.key},a.omit(t,["Form","key"])),{default:p(()=>[F(u,{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040))),128))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[d,a.loading]])}var Re=h(j,[["render",z]]);export{Re as default};