import{B as C}from"./TableImg.8efb1d09.js";import{l as I}from"./BasicForm.57c6e84a.js";import{u as T}from"./useTable.975d5dab.js";import{a as v,i as E,b as D,e as k}from"./dictionary.f5aa7fbb.js";import{P as w}from"./index.fe38133b.js";import{az as M,a as F,w as S,aB as a,o as d,i as A,p as h,B as f,k as B,C as P,l as _,G as R}from"./index.97f55544.js";import{b as $}from"./index.1f9d3a9d.js";import N from"./DictionaryItemModal.0bb8db85.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./useForm.1f0c5dd1.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.8e778cab.js";import"./uuid.2b29000c.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./get.d05ccbd6.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./useSize.eb64bd2e.js";import"./useWindowSizeFn.61edac1b.js";import"./index.4592027a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1fcb5099.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.39a555ee.js";import"./fromPairs.84aabb58.js";import"./scrollTo.b6445e84.js";import"./index.264e2111.js";/* empty css              *//* empty css               */import"./index.12848547.js";import"./transButton.76d507e2.js";import"./index.a512493f.js";import"./index.c0d032c8.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./constantEnum.bf6653fb.js";const{createMessage:V}=R(),U=F({name:"DictionaryItemTable",components:{BasicTable:C,DictionaryItemModal:N,PageWrapper:w,TableAction:I},setup(){const[e,{openModal:n,setModalProps:m}]=$(),t=S(""),[b,{reload:i,setProps:s,setTableData:l}]=T({title:"\u5B57\u5178\u9879\u5217\u8868",api:v,columns:E,formConfig:{labelWidth:120,schemas:D,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action"}});function u(){if(t.value===""){V.warning("\u8BF7\u9009\u62E9\u6570\u636E\u5B57\u5178\uFF01",2);return}m({title:"\u65B0\u589E\u5B57\u5178\u9879"}),n(!0,{record:{mainId:t.value},isUpdate:!1})}function p(o){t.value=o,s({searchInfo:{mainId:t.value}}),i({page:1})}function c(){l([]),t.value=""}function r(o){m({title:"\u4FEE\u6539\u5B57\u5178\u9879"}),n(!0,{record:o,isUpdate:!0})}function y(o){k(o.id).then(()=>{i()})}function g(){setTimeout(()=>{i()},200)}return{dictId:t,registerTable:b,registerModal:e,cleanTableData:c,handleCreate:u,handleEdit:r,filterByDict:p,handleDelete:y,handleSuccess:g}}}),W={class:"bg-white overflow-hidden dictionary"};function x(e,n,m,t,b,i){const s=a("a-button"),l=a("TableAction"),u=a("BasicTable"),p=a("DictionaryItemModal");return d(),A("div",W,[h(u,{onRegister:e.registerTable},{toolbar:f(()=>[e.dictId!==""?(d(),B(s,{key:0,type:"primary",onClick:e.handleCreate},{default:f(()=>[P("\u65B0\u589E")]),_:1},8,["onClick"])):_("",!0)]),bodyCell:f(({column:c,record:r})=>[c.key==="action"?(d(),B(l,{key:0,actions:[{tooltip:"\u4FEE\u6539\u5B57\u5178\u9879",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,r)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,r),placement:"left"}}]},null,8,["actions"])):_("",!0)]),_:1},8,["onRegister"]),h(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var ze=M(U,[["render",x]]);export{ze as default};