import{B as s}from"./BasicForm.d977d74c.js";import{az as u,a as l,cE as c,aB as r,o as d,k as f,B as i,p,bU as _,G as C}from"./index.7ea10544.js";import{M as h}from"./index.39da4a34.js";import{P as b}from"./index.0b8e7721.js";/* empty css              *//* empty css               */import"./index.5d6fdc93.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.6954dcaa.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.c6794bd1.js";import"./get.4066932b.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./useSize.b4cfb06d.js";import"./transButton.331b5127.js";import"./index.a8777167.js";import"./index.61c914e7.js";import"./useWindowSizeFn.3dc14e02.js";import"./FullscreenOutlined.8864dded.js";import"./index.d3af8cb2.js";import"./index.32756aa0.js";import"./uuid.2b29000c.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";const g=[{field:"title",component:"Input",label:"title",defaultValue:"\u6807\u9898",rules:[{required:!0}]},{field:"markdown",component:"Input",label:"markdown",defaultValue:"defaultValue",rules:[{required:!0,trigger:"blur"}],render:({model:o,field:t})=>_(h,{value:o[t],onChange:e=>{o[t]=e}})}],k=l({components:{BasicForm:s,CollapseContainer:c,PageWrapper:b},setup(){const{createMessage:o}=C();return{schemas:g,handleSubmit:t=>{o.success("click search,values:"+JSON.stringify(t))}}}});function B(o,t,e,w,F,M){const a=r("BasicForm"),m=r("CollapseContainer"),n=r("PageWrapper");return d(),f(n,{title:"MarkDown\u7EC4\u4EF6\u5D4C\u5165Form\u793A\u4F8B"},{default:i(()=>[p(m,{title:"MarkDown\u8868\u5355"},{default:i(()=>[p(a,{labelWidth:100,schemas:o.schemas,actionColOptions:{span:24},onSubmit:o.handleSubmit},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var Co=u(k,[["render",B]]);export{Co as default};