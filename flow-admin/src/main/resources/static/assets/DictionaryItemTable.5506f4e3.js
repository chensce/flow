import{B as g}from"./TableImg.56f74f95.js";import{T as x}from"./BasicForm.bfb70ce4.js";import{u as C}from"./useTable.df715f1a.js";import{a as I,i as T,b as _,e as y}from"./dictionary.8f0edb7c.js";import{P as E}from"./index.37a89528.js";import{_ as w,h as D}from"./index.aeb7d9f7.js";import{b as v}from"./index.309f7e13.js";import F from"./DictionaryItemModal.21123ebb.js";import{A as M,r as S,a0 as n,B as b,D as k,w as m,a6 as p,a1 as A,ad as R,ae as P}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.9d0149a6.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               */import"./useSortable.514a2720.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.661e65ad.js";/* empty css                *//* empty css                *//* empty css                */import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";/* empty css                *//* empty css                */import"./useContentViewHeight.6345b5e8.js";import"./constantEnum.82824ec7.js";const{createMessage:V}=D(),$=M({name:"DictionaryItemTable",components:{BasicTable:g,DictionaryItemModal:F,PageWrapper:E,TableAction:x},setup(){const[e,{openModal:s,setModalProps:r}]=v(),t=S(""),[f,{reload:i,setProps:d,setTableData:u}]=C({title:"\u5B57\u5178\u9879\u5217\u8868",api:I,columns:T,formConfig:{labelWidth:120,schemas:_,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function c(){if(t.value===""){V.warning("\u8BF7\u9009\u62E9\u6570\u636E\u5B57\u5178\uFF01",2);return}r({title:"\u65B0\u589E\u5B57\u5178\u9879"}),s(!0,{record:{mainId:t.value},isUpdate:!1})}function l(o){t.value=o,d({searchInfo:{mainId:t.value}}),i({page:1})}function a(){u([]),t.value=""}function j(o){r({title:"\u4FEE\u6539\u5B57\u5178\u9879"}),s(!0,{record:o,isUpdate:!0})}function h(o){y(o.id).then(()=>{i()})}function B(){i()}return{dictId:t,registerTable:f,registerModal:e,cleanTableData:a,handleCreate:c,handleEdit:j,filterByDict:l,handleDelete:h,handleSuccess:B}}}),N={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},W=P("\u65B0\u589E");function U(e,s,r,t,f,i){const d=n("a-button"),u=n("TableAction"),c=n("BasicTable"),l=n("DictionaryItemModal");return b(),k("div",N,[m(c,{onRegister:e.registerTable},{toolbar:p(()=>[e.dictId!==""?(b(),A(d,{key:0,type:"primary",onClick:e.handleCreate},{default:p(()=>[W]),_:1},8,["onClick"])):R("",!0)]),action:p(({record:a})=>[m(u,{actions:[{tooltip:"\u4FEE\u6539\u5B57\u5178\u9879",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,a)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,a)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),m(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Ie=w($,[["render",U]]);export{Ie as default};
