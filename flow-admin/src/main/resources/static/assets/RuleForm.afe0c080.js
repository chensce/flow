var f=(e,o,r)=>new Promise((m,i)=>{var d=u=>{try{l(r.next(u))}catch(s){i(s)}},t=u=>{try{l(r.throw(u))}catch(s){i(s)}},l=u=>u.done?m(u.value):Promise.resolve(u.value).then(d,t);l((r=r.apply(e,o)).next())});import{B as b}from"./BasicForm.d977d74c.js";import{u as g}from"./useForm.d5452096.js";import{az as A,a as P,cE as E,aB as B,o as _,k,B as n,n as v,p,C as c,G as D}from"./index.7ea10544.js";import{P as h}from"./index.0b8e7721.js";import{i as V}from"./system.4c6c82c4.js";/* empty css              *//* empty css               */import"./index.5d6fdc93.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.6954dcaa.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.c6794bd1.js";import"./get.4066932b.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./useSize.b4cfb06d.js";import"./transButton.331b5127.js";import"./index.a8777167.js";import"./index.61c914e7.js";import"./useWindowSizeFn.3dc14e02.js";import"./FullscreenOutlined.8864dded.js";import"./index.d3af8cb2.js";import"./index.32756aa0.js";import"./uuid.2b29000c.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";const C=[{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"\u5B57\u6BB52",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"\u5B57\u6BB533",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"\u9A8C\u8BC1\u7801",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]},rules:[{required:!0,message:"\u8BF7\u8F93\u5165aa",type:"array"}]},{field:"field441",component:"Input",label:"\u81EA\u5B9A\u4E49\u6821\u9A8C",colProps:{span:8},rules:[{required:!0,validator:(e,o)=>f(void 0,null,function*(){return o?o==="1"?Promise.reject("\u503C\u4E0D\u80FD\u4E3A1"):Promise.resolve():Promise.reject("\u503C\u4E0D\u80FD\u4E3A\u7A7A")}),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]},rules:[{required:!0,message:"\u8986\u76D6\u9ED8\u8BA4\u751F\u6210\u7684\u6821\u9A8C\u4FE1\u606F"}]},{field:"field8",component:"Input",label:"\u540E\u7AEF\u5F02\u6B65\u9A8C\u8BC1",colProps:{span:8},helpMessage:["\u672C\u5B57\u6BB5\u6F14\u793A\u5F02\u6B65\u9A8C\u8BC1","\u672C\u5730\u89C4\u5219\uFF1A\u5FC5\u987B\u586B\u5199","\u540E\u7AEF\u89C4\u5219\uFF1A\u4E0D\u80FD\u5305\u542Badmin"],rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u6570\u636E"},{validator(e,o){return new Promise((r,m)=>{V(o).then(()=>r()).catch(i=>{m(i.message||"\u9A8C\u8BC1\u5931\u8D25")})})}}]}],q=P({components:{BasicForm:b,CollapseContainer:E,PageWrapper:h},setup(){const{createMessage:e}=D(),[o,{validateFields:r,clearValidate:m,getFieldsValue:i,resetFields:d,setFieldsValue:t}]=g({labelWidth:120,schemas:C,actionColOptions:{span:24}});function l(){return f(this,null,function*(){try{const a=yield r()}catch(a){}})}function u(){return f(this,null,function*(){m()})}function s(){const a=i();e.success("values:"+JSON.stringify(a))}function F(){t({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})}return{register:o,schemas:C,handleSubmit:a=>{e.success("click search,values:"+JSON.stringify(a))},getFormValues:s,setFormValues:F,validateForm:l,resetValidate:u,resetFields:d}}}),y={class:"mb-4"};function S(e,o,r,m,i,d){const t=B("a-button"),l=B("BasicForm"),u=B("CollapseContainer"),s=B("PageWrapper");return _(),k(s,{title:"\u8868\u5355\u6821\u9A8C\u793A\u4F8B"},{default:n(()=>[v("div",y,[p(t,{onClick:e.validateForm,class:"mr-2"},{default:n(()=>[c(" \u624B\u52A8\u6821\u9A8C\u8868\u5355 ")]),_:1},8,["onClick"]),p(t,{onClick:e.resetValidate,class:"mr-2"},{default:n(()=>[c(" \u6E05\u7A7A\u6821\u9A8C\u4FE1\u606F ")]),_:1},8,["onClick"]),p(t,{onClick:e.getFormValues,class:"mr-2"},{default:n(()=>[c(" \u83B7\u53D6\u8868\u5355\u503C ")]),_:1},8,["onClick"]),p(t,{onClick:e.setFormValues,class:"mr-2"},{default:n(()=>[c(" \u8BBE\u7F6E\u8868\u5355\u503C ")]),_:1},8,["onClick"]),p(t,{onClick:e.resetFields,class:"mr-2"},{default:n(()=>[c(" \u91CD\u7F6E ")]),_:1},8,["onClick"])]),p(u,{title:"\u8868\u5355\u6821\u9A8C"},{default:n(()=>[p(l,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])]),_:1})]),_:1})}var ke=A(q,[["render",S]]);export{ke as default};