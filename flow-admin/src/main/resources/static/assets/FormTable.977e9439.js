import{B as j}from"./TableImg.56f74f95.js";import"./BasicForm.bfb70ce4.js";import{u as b}from"./useTable.df715f1a.js";import{getBasicColumns as g,getFormConfig as h}from"./tableData.3f3da3f1.js";import{A as x,bM as _,r as F,a0 as n,B as i,a1 as C,a6 as o,w as r,D as c,H as k,J as B,ab as y,ae as a}from"./vendor.5879c5ca.js";/* empty css                */import{d as T}from"./table.20c78bd7.js";import{_ as w}from"./index.aeb7d9f7.js";/* empty css                *//* empty css              */import"./useForm.9d0149a6.js";import"./index.37a89528.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.6345b5e8.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./index.309f7e13.js";/* empty css               */import"./useSortable.514a2720.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.661e65ad.js";/* empty css                *//* empty css                */import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";const S=x({components:{BasicTable:j,AAlert:_},setup(){const e=F([]),[t,{getForm:m}]=b({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:T,columns:g(),useSearchForm:!0,formConfig:h(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id"});function u(){console.log(m().getFieldsValue())}function d(s){console.log(s),e.value=s}return{registerTable:t,getFormValues:u,checkedKeys:e,onSelectChange:d}}}),D=a(" custom-slot "),E=a("\u6E05\u7A7A"),A={key:1},V=a("\u83B7\u53D6\u8868\u5355\u6570\u636E");function v(e,t,m,u,d,s){const l=n("a-button"),p=n("a-alert"),f=n("BasicTable");return i(),C(f,{onRegister:e.registerTable,rowSelection:{type:"checkbox",selectedRowKeys:e.checkedKeys,onChange:e.onSelectChange}},{"form-custom":o(()=>[D]),headerTop:o(()=>[r(p,{type:"info","show-icon":""},{message:o(()=>[e.checkedKeys.length>0?(i(),c(y,{key:0},[k("span",null,"\u5DF2\u9009\u4E2D"+B(e.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),r(l,{type:"link",onClick:t[0]||(t[0]=K=>e.checkedKeys=[]),size:"small"},{default:o(()=>[E]),_:1})],64)):(i(),c("span",A,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:o(()=>[r(l,{type:"primary",onClick:e.getFormValues},{default:o(()=>[V]),_:1},8,["onClick"])]),_:1},8,["onRegister","rowSelection"])}var fe=w(S,[["render",v]]);export{fe as default};
