import{B as g}from"./TableImg.b4edebb6.js";import{l as B}from"./BasicForm.d977d74c.js";import{u as b}from"./useTable.2d6a625d.js";import{g as F,d as E}from"./company.e6d4a15b.js";import{C as k,c as y,s as _}from"./CompanyModal.5b4176a4.js";import{az as T,a as M,aB as r,o as h,i as S,p as c,B as d,C as w,k as D,l as A,G as R}from"./index.7ea10544.js";import{b as v}from"./index.61c914e7.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useForm.d5452096.js";import"./index.0b8e7721.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useSize.b4cfb06d.js";import"./useWindowSizeFn.3dc14e02.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";import"./transButton.331b5127.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.6954dcaa.js";import"./uuid.2b29000c.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./get.4066932b.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./index.5d6fdc93.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.495d4eff.js";import"./FullscreenOutlined.8864dded.js";import"./index.32756aa0.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.17e7a4de.js";import"./index.056b642d.js";/* empty css              *//* empty css               */import"./index.c6794bd1.js";import"./index.a8777167.js";import"./index.d3af8cb2.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";const{createMessage:P}=R(),$=M({name:"Company",components:{BasicTable:g,TableAction:B,CompanyModal:k},setup(){const[o,{openModal:i,setModalProps:n}]=v(),[C,{reload:a}]=b({title:"\u5217\u8868",api:F,columns:y,formConfig:{labelWidth:120,schemas:_,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",fixed:!1}});function f(){n({title:"\u65B0\u589E\u516C\u53F8"}),i(!0,{isUpdate:!1})}function u(t,e){e.stopPropagation(),n({title:"\u4FEE\u6539\u516C\u53F8"}),i(!0,{record:t,isUpdate:!0})}function s(t,e){e.stopPropagation(),n({title:"\u65B0\u589E\u3010"+t.cname+"\u3011\u7684\u5B50\u516C\u53F8"}),t={pid:t.id,status:1},i(!0,{record:t,isUpdate:!0})}function p(t){if(t.children&&t.children.length>0){P.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}E([t.id]).then(e=>{a()})}function l(){a()}function m(){setTimeout(()=>{a()},200)}return{registerTable:C,registerModal:o,handleCreate:f,handleEdit:u,handleCreateChild:s,handleDelete:p,handleSuccess:m,doSearch:l}}});function x(o,i,n,C,a,f){const u=r("a-button"),s=r("TableAction"),p=r("BasicTable"),l=r("CompanyModal");return h(),S("div",null,[c(p,{onRegister:o.registerTable},{toolbar:d(()=>[c(u,{type:"primary",onClick:o.handleCreate},{default:d(()=>[w(" \u65B0\u589E ")]),_:1},8,["onClick"])]),bodyCell:d(({column:m,record:t})=>[m.key==="action"?(h(),D(s,{key:0,actions:[{tooltip:"\u6DFB\u52A0\u5B50\u516C\u53F8",icon:"ant-design:plus-outlined",onClick:o.handleCreateChild.bind(null,t)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,t)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,t),placement:"left"}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister"]),c(l,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var xt=T($,[["render",x]]);export{xt as default};