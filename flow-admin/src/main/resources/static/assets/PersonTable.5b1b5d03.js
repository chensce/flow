import{B as h}from"./TableImg.7ea72800.js";import{l as k}from"./BasicForm.35bf3188.js";import{u as C}from"./useTable.02d43016.js";import{a as w,az as E,aB as r,o as B,i as _,p as u,B as c,C as D}from"./index.741c5d36.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./useForm.8dec0b63.js";import"./index.ffcec715.js";import"./index.6c70cdbc.js";import"./index.f51813a8.js";import"./useSize.aa4022ca.js";import"./useWindowSizeFn.54947215.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";import"./transButton.76f8f88c.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.abe396df.js";import"./uuid.2b29000c.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./index.ef1baeca.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.d23d5e7f.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d982c887.js";import"./index.ae783029.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.a7aa9d8e.js";import"./index.11816690.js";/* empty css              *//* empty css               */import"./index.249616b7.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";const g=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",editRow:!0},{title:"\u5DE5\u53F7",dataIndex:"no",editRow:!0},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"dept",editRow:!0}],T=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}],N=w({components:{BasicTable:h,TableAction:k},setup(){const[n,{getDataSource:e}]=C({columns:g,showIndexColumn:!1,dataSource:T,actionColumn:{width:160,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function a(t){var o;(o=t.onEdit)==null||o.call(t,!0)}function l(t){var o;if((o=t.onEdit)==null||o.call(t,!1),t.isNew){const i=e(),f=i.findIndex(b=>b.key===t.key);i.splice(f,1)}}function s(t){var o;(o=t.onEdit)==null||o.call(t,!1,!0)}function d(t){}function p(){const t=e(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};t.push(o)}function m(t,o){return t.editable?[{label:"\u4FDD\u5B58",onClick:s.bind(null,t,o)},{label:"\u53D6\u6D88",popConfirm:{title:"\u662F\u5426\u53D6\u6D88\u7F16\u8F91",confirm:l.bind(null,t,o)}}]:[{label:"\u7F16\u8F91",onClick:a.bind(null,t)},{label:"\u5220\u9664"}]}return{registerTable:n,handleEdit:a,createActions:m,handleAdd:p,getDataSource:e,handleEditChange:d}}});function x(n,e,a,l,s,d){const p=r("TableAction"),m=r("BasicTable"),t=r("a-button");return B(),_("div",null,[u(m,{onRegister:n.registerTable,onEditChange:n.handleEditChange},{action:c(({record:o,column:i})=>[u(p,{actions:n.createActions(o,i)},null,8,["actions"])]),_:1},8,["onRegister","onEditChange"]),u(t,{block:"",class:"mt-5",type:"dashed",onClick:n.handleAdd},{default:c(()=>[D(" \u65B0\u589E\u6210\u5458 ")]),_:1},8,["onClick"])])}var Tt=E(N,[["render",x]]);export{Tt as default};