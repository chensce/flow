import{B as b}from"./TableImg.513742d5.js";import{T as x}from"./BasicForm.0ba2e15f.js";import{u as T}from"./useTable.6e5baa13.js";import{g as h,d as y}from"./dept.2ea41d4f.js";import{P as D}from"./index.ea14bdae.js";import _ from"./DictTypeTree.6359a7fa.js";import g from"./DictionaryTable.df3187e4.js";import w from"./DictionaryItemTable.2433627b.js";import{_ as C,h as S}from"./index.e84e956c.js";import{b as B}from"./index.c505e96f.js";import{k as F,l as v}from"./dictionary.0d5e02ca.js";import{A as I,r as u,a0 as i,B as M,a1 as R,a6 as H,w as m}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";/* empty css                *//* empty css                */import"./useContentViewHeight.ccc8749b.js";import"./Tree.vue_vue_type_style_index_0_lang.128b82eb.js";import"./useContextMenu.44cd9a61.js";import"./dicType.fa4263ef.js";import"./DictionaryModal.61dc6b26.js";import"./DictionaryItemModal.c0a221b2.js";const{createMessage:W}=S(),P=I({components:{BasicTable:b,PageWrapper:D,DictTypeTree:_,DictionaryTable:g,DictionaryItemTable:w,TableAction:x},setup(){const[t,{openModal:n}]=B(),o=u(),a=u(),[p,{reload:s}]=T({title:"\u5217\u8868",api:h,columns:F,formConfig:{labelWidth:120,schemas:v,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function r(){n(!0,{isUpdate:!1})}function c(e){console.log(e),n(!0,{record:e,isUpdate:!0})}function l(e){if(e.children&&e.children.length>0){W.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}y([e.id]).then(()=>{s()})}function d(){s()}function f(e=""){e?(o.value.filterByDictType(e),a.value.cleanTableData()):o.value.cleanTableData()}function j(e){e&&a.value.filterByDict(e)}return{dictionaryRef:o,dictionaryItemRef:a,registerTable:p,registerModal:t,handleCreate:r,handleEdit:c,handleDictSelect:j,handleDelete:l,handleSuccess:d,handleDictTypeSelect:f}}});function $(t,n,o,a,p,s){const r=i("DictTypeTree"),c=i("DictionaryTable"),l=i("DictionaryItemTable"),d=i("PageWrapper");return M(),R(d,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:H(()=>[m(r,{class:"w-1/5 xl:w-1/5",onSelect:t.handleDictTypeSelect},null,8,["onSelect"]),m(c,{ref:"dictionaryRef",onHandleSelect:t.handleDictSelect,class:"w-2/5 xl:w-2/5"},null,8,["onHandleSelect"]),m(l,{ref:"dictionaryItemRef",class:"w-2/5 xl:w-2/5"},null,512)]),_:1})}var we=C(P,[["render",$]]);export{we as default};