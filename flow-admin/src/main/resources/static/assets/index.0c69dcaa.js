import{B as g}from"./TableImg.b4edebb6.js";import{l as B}from"./BasicForm.d977d74c.js";import{u as b}from"./useTable.2d6a625d.js";import{A,g as F,c as T,s as E,d as k}from"./AreaModal.4e5acbe8.js";import{az as _,a as D,aB as r,o as C,i as M,p as c,B as d,C as S,k as w,l as y,G as R}from"./index.7ea10544.js";import{b as P}from"./index.61c914e7.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useForm.d5452096.js";import"./index.0b8e7721.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useSize.b4cfb06d.js";import"./useWindowSizeFn.3dc14e02.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";import"./transButton.331b5127.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.6954dcaa.js";import"./uuid.2b29000c.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./get.4066932b.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./index.5d6fdc93.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.495d4eff.js";import"./FullscreenOutlined.8864dded.js";import"./index.32756aa0.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.17e7a4de.js";import"./index.056b642d.js";/* empty css              *//* empty css               */import"./index.c6794bd1.js";import"./index.a8777167.js";import"./index.d3af8cb2.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";import"./constantEnum.bf6653fb.js";const{createMessage:v}=R(),$=D({name:"Area",components:{BasicTable:g,TableAction:B,AreaModal:A},setup(){const[e,{openModal:i,setModalProps:a}]=P(),[f,{reload:n}]=b({title:"\u5217\u8868",api:F,columns:T,formConfig:{labelWidth:120,schemas:E,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,isTreeTable:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,showTableSetting:!1,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",fixed:!1}});function h(){a({title:"\u65B0\u589E\u533A\u57DF"}),i(!0,{isUpdate:!1})}function u(t,o){o.stopPropagation(),a({title:"\u4FEE\u6539\u533A\u57DF"}),i(!0,{record:t,isUpdate:!0})}function s(t,o){o.stopPropagation(),a({title:"\u65B0\u589E\u3010"+t.name+"\u3011\u7684\u5B50\u533A\u57DF"}),t={pcode:t.code},i(!0,{record:t,isUpdate:!0})}function l(t,o){if(o.stopPropagation(),t.children&&t.children.length>0){v.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}k(t.code).then(()=>{n()})}function p(){n()}function m(){setTimeout(()=>{n()},200)}return{registerTable:f,registerModal:e,handleCreate:h,handleEdit:u,handleCreateChild:s,handleDelete:l,handleSuccess:m,doSearch:p}}});function x(e,i,a,f,n,h){const u=r("a-button"),s=r("TableAction"),l=r("BasicTable"),p=r("AreaModal");return C(),M("div",null,[c(l,{onRegister:e.registerTable},{toolbar:d(()=>[c(u,{type:"primary",onClick:e.handleCreate},{default:d(()=>[S(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:d(({column:m,record:t})=>[m.key==="action"?(C(),w(s,{key:0,actions:[{tooltip:"\u6DFB\u52A0\u5B50\u8282\u70B9",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,t)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:o=>{o.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,t),placement:"left"}}]},null,8,["actions"])):y("",!0)]),_:1},8,["onRegister"]),c(p,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var xt=_($,[["render",x]]);export{xt as default};