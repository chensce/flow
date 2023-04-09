import{B as C}from"./BasicForm.57c6e84a.js";import{az as B,a as E,cF as F,w as P,aB as p,o as b,k as v,B as t,n as a,p as u,C as l,G as k}from"./index.97f55544.js";import{P as c}from"./index.fe38133b.js";/* empty css              *//* empty css               */import"./index.4592027a.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.8e778cab.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.12848547.js";import"./get.d05ccbd6.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./useSize.eb64bd2e.js";import"./transButton.76d507e2.js";import"./index.a512493f.js";import"./index.1f9d3a9d.js";import"./useWindowSizeFn.61edac1b.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.c0d032c8.js";import"./index.39a555ee.js";import"./uuid.2b29000c.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";const $=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}}],D=E({components:{BasicForm:C,CollapseContainer:F,PageWrapper:c},setup(){const e=P(null),{createMessage:o}=k();return{formElRef:e,schemas:$,handleSubmit:n=>{o.success("click search,values:"+JSON.stringify(n))},setProps(n){const i=e.value;!i||i.setProps(n)}}}}),A={class:"mb-4"},g={class:"mb-4"};function S(e,o,n,i,w,W){const s=p("a-button"),m=p("BasicForm"),d=p("CollapseContainer"),f=p("PageWrapper");return b(),v(f,{title:"Ref\u64CD\u4F5C\u793A\u4F8B"},{default:t(()=>[a("div",A,[u(s,{onClick:o[0]||(o[0]=r=>e.setProps({labelWidth:150})),class:"mr-2"},{default:t(()=>[l(" \u66F4\u6539labelWidth ")]),_:1}),u(s,{onClick:o[1]||(o[1]=r=>e.setProps({labelWidth:120})),class:"mr-2"},{default:t(()=>[l(" \u8FD8\u539FlabelWidth ")]),_:1}),u(s,{onClick:o[2]||(o[2]=r=>e.setProps({size:"large"})),class:"mr-2"},{default:t(()=>[l(" \u66F4\u6539Size ")]),_:1}),u(s,{onClick:o[3]||(o[3]=r=>e.setProps({size:"default"})),class:"mr-2"},{default:t(()=>[l(" \u8FD8\u539FSize ")]),_:1}),u(s,{onClick:o[4]||(o[4]=r=>e.setProps({disabled:!0})),class:"mr-2"},{default:t(()=>[l(" \u7981\u7528\u8868\u5355 ")]),_:1}),u(s,{onClick:o[5]||(o[5]=r=>e.setProps({disabled:!1})),class:"mr-2"},{default:t(()=>[l(" \u89E3\u9664\u7981\u7528 ")]),_:1}),u(s,{onClick:o[6]||(o[6]=r=>e.setProps({compact:!0})),class:"mr-2"},{default:t(()=>[l(" \u7D27\u51D1\u8868\u5355 ")]),_:1}),u(s,{onClick:o[7]||(o[7]=r=>e.setProps({compact:!1})),class:"mr-2"},{default:t(()=>[l(" \u8FD8\u539F\u6B63\u5E38\u95F4\u8DDD ")]),_:1}),u(s,{onClick:o[8]||(o[8]=r=>e.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:t(()=>[l(" \u64CD\u4F5C\u6309\u94AE\u4F4D\u7F6E ")]),_:1})]),a("div",g,[u(s,{onClick:o[9]||(o[9]=r=>e.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:t(()=>[l(" \u9690\u85CF\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(s,{onClick:o[10]||(o[10]=r=>e.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:t(()=>[l(" \u663E\u793A\u64CD\u4F5C\u6309\u94AE ")]),_:1}),u(s,{onClick:o[11]||(o[11]=r=>e.setProps({showResetButton:!1})),class:"mr-2"},{default:t(()=>[l(" \u9690\u85CF\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[12]||(o[12]=r=>e.setProps({showResetButton:!0})),class:"mr-2"},{default:t(()=>[l(" \u663E\u793A\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[13]||(o[13]=r=>e.setProps({showSubmitButton:!1})),class:"mr-2"},{default:t(()=>[l(" \u9690\u85CF\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(s,{onClick:o[14]||(o[14]=r=>e.setProps({showSubmitButton:!0})),class:"mr-2"},{default:t(()=>[l(" \u663E\u793A\u67E5\u8BE2\u6309\u94AE ")]),_:1}),u(s,{onClick:o[15]||(o[15]=r=>e.setProps({resetButtonOptions:{disabled:!0,text:"\u91CD\u7F6ENew"}})),class:"mr-2"},{default:t(()=>[l(" \u4FEE\u6539\u91CD\u7F6E\u6309\u94AE ")]),_:1}),u(s,{onClick:o[16]||(o[16]=r=>e.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:t(()=>[l(" \u4FEE\u6539\u67E5\u8BE2\u6309\u94AE ")]),_:1})]),u(d,{title:"\u4F7F\u7528ref\u8C03\u7528\u8868\u5355\u5185\u90E8\u51FD\u6570\u793A\u4F8B"},{default:t(()=>[u(m,{schemas:e.schemas,ref:"formElRef",labelWidth:100,onSubmit:e.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])]),_:1})]),_:1})}var vo=B(D,[["render",S]]);export{vo as default};