import{B as j}from"./TableImg.56f74f95.js";import{T as b}from"./BasicForm.bfb70ce4.js";import{u as h}from"./useTable.df715f1a.js";import{g,d as x}from"./company.711332d1.js";import{C as B,c as F,s as _}from"./CompanyModal.1355269a.js";import{_ as E,h as T}from"./index.aeb7d9f7.js";import{b as w}from"./index.309f7e13.js";import{A as y,a0 as r,B as M,D as S,w as u,a6 as c,ae as k}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.9d0149a6.js";import"./index.37a89528.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.6345b5e8.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";/* empty css               */import"./useSortable.514a2720.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.661e65ad.js";/* empty css                *//* empty css                *//* empty css                */import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";const{createMessage:D}=T(),A=y({name:"Company",components:{BasicTable:j,TableAction:b,CompanyModal:B},setup(){const[o,{openModal:n,setModalProps:i}]=w(),[f,{reload:a}]=h({title:"\u5217\u8868",api:g,columns:F,formConfig:{labelWidth:120,schemas:_,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function C(){i({title:"\u65B0\u589E\u516C\u53F8"}),n(!0,{isUpdate:!1})}function d(e,s){s.stopPropagation(),i({title:"\u4FEE\u6539\u516C\u53F8"}),n(!0,{record:e,isUpdate:!0})}function l(e,s){s.stopPropagation(),i({title:"\u65B0\u589E\u3010"+e.cname+"\u3011\u7684\u5B50\u516C\u53F8"}),e={pid:e.id,status:1},n(!0,{record:e,isUpdate:!0})}function p(e){if(e.children&&e.children.length>0){D.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}x([e.id]).then(s=>{a()})}function m(){a()}function t(){a()}return{registerTable:f,registerModal:o,handleCreate:C,handleEdit:d,handleCreateChild:l,handleDelete:p,handleSuccess:t,doSearch:m}}}),R=k(" \u65B0\u589E ");function v(o,n,i,f,a,C){const d=r("a-button"),l=r("TableAction"),p=r("BasicTable"),m=r("CompanyModal");return M(),S("div",null,[u(p,{onRegister:o.registerTable},{toolbar:c(()=>[u(d,{type:"primary",onClick:o.handleCreate},{default:c(()=>[R]),_:1},8,["onClick"])]),action:c(({record:t})=>[u(l,{actions:[{tooltip:"\u6DFB\u52A0\u5B50\u516C\u53F8",icon:"ant-design:plus-outlined",onClick:o.handleCreateChild.bind(null,t)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,t)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,t)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),u(m,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var fe=E(A,[["render",v]]);export{fe as default};