import{B as f}from"./TableImg.00c4ed04.js";import{l as h}from"./BasicForm.51e3eb56.js";import{u as b}from"./useTable.412b054f.js";import{d as C}from"./system.9a5fb3a3.js";import{u as g}from"./index.a74219c4.js";import{M as T,c as D,s as _}from"./MenuDrawer.9978fafb.js";import{az as w,a as S,aB as t,o as B,i as F,p as r,B as p,C as M,an as k}from"./index.da587afe.js";import"./index.492229cd.js";import"./Checkbox.9d75a86f.js";import"./index.5aab84c4.js";import"./index.a85fa86f.js";import"./eagerComputed.3bbb876f.js";import"./useForm.d201bd46.js";import"./index.c0d22213.js";import"./index.a0d7e8a1.js";import"./index.6d85aa5b.js";import"./useSize.dbee3c08.js";import"./useWindowSizeFn.3fdab581.js";import"./useContentViewHeight.f2db75e2.js";import"./ArrowLeftOutlined.8a04d10c.js";import"./index.25a87437.js";import"./transButton.1d3b575b.js";import"./index.447b3242.js";import"./index.d7c8b760.js";import"./index.9d0fc194.js";import"./uuid.2b29000c.js";import"./index.3c9c3a6f.js";import"./_baseIteratee.78d8c020.js";import"./get.40c34cfc.js";import"./DeleteOutlined.690086a4.js";import"./index.d1cda802.js";import"./useRefs.1aead304.js";import"./Form.f8b72655.js";import"./Col.4ac749bb.js";import"./useFlexGapSupport.caa26b6d.js";import"./index.e8eb4b57.js";import"./FullscreenOutlined.3d903e0f.js";import"./index.a64c8a60.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.46184af0.js";import"./index.813f510f.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.37d32e36.js";import"./index.176a852f.js";/* empty css              *//* empty css               */import"./index.b3a5d1df.js";import"./index.5d1da0c4.js";import"./index.72d53e09.js";import"./download.75f04d3f.js";import"./base64Conver.08b9f4ec.js";import"./index.9912aa68.js";import"./index.36675b6e.js";import"./uniqBy.f906dabc.js";import"./index.f277a2c9.js";const R=S({name:"MenuManagement",components:{BasicTable:f,MenuDrawer:T,TableAction:h},setup(){const[e,{openDrawer:i}]=g(),[c,{reload:l,expandAll:u}]=b({title:"\u83DC\u5355\u5217\u8868",api:C,columns:D,formConfig:{labelWidth:120,schemas:_},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function d(){i(!0,{isUpdate:!1})}function n(o){i(!0,{record:o,isUpdate:!0})}function a(o){}function s(){l()}function m(){k(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:n,handleDelete:a,handleSuccess:s,onFetchSuccess:m}}});function A(e,i,c,l,u,d){const n=t("a-button"),a=t("TableAction"),s=t("BasicTable"),m=t("MenuDrawer");return B(),F("div",null,[r(s,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[r(n,{type:"primary",onClick:e.handleCreate},{default:p(()=>[M(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),action:p(({record:o})=>[r(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),r(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var ve=w(R,[["render",A]]);export{ve as default};
