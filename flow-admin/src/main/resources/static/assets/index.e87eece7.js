var B=(e,u,i)=>new Promise((c,p)=>{var h=o=>{try{n(i.next(o))}catch(a){p(a)}},l=o=>{try{n(i.throw(o))}catch(a){p(a)}},n=o=>o.done?c(o.value):Promise.resolve(o.value).then(h,l);n((i=i.apply(e,u)).next())});import{B as T}from"./TableImg.7ea72800.js";import{l as k}from"./BasicForm.35bf3188.js";import{u as _}from"./useTable.02d43016.js";import{g as F,c as P,s as S,d as y}from"./module.data.1bd82942.js";import{az as D,a as V,an as A,aB as s,o as b,i as R,p as d,B as f,C as w,k as v,l as U,G as $}from"./index.741c5d36.js";import I from"./ModuleModal.dd02f968.js";import N from"./PValueSettingModal.ad196473.js";import{b as E}from"./index.ef1baeca.js";import"./index.d4ff1276.js";import"./Checkbox.2841bc84.js";import"./index.5fb5b3b2.js";import"./index.4960ebac.js";import"./eagerComputed.1e0895dc.js";import"./useForm.8dec0b63.js";import"./index.ffcec715.js";import"./index.6c70cdbc.js";import"./index.f51813a8.js";import"./useSize.aa4022ca.js";import"./useWindowSizeFn.54947215.js";import"./useContentViewHeight.1814e20c.js";import"./ArrowLeftOutlined.20c8fc9b.js";import"./index.0934399d.js";import"./transButton.76f8f88c.js";import"./index.73bb7fa2.js";import"./index.5fd79f94.js";import"./index.abe396df.js";import"./uuid.2b29000c.js";import"./index.46c568bc.js";import"./_baseIteratee.9655ef6b.js";import"./get.9f08d1a5.js";import"./DeleteOutlined.d4d5ebae.js";import"./index.0f0cf900.js";import"./useRefs.31b824e4.js";import"./Form.41e509ff.js";import"./Col.ba611277.js";import"./useFlexGapSupport.28e961f9.js";import"./index.d23d5e7f.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.d982c887.js";import"./FullscreenOutlined.d8f1076a.js";import"./index.ae783029.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.a7aa9d8e.js";import"./index.11816690.js";/* empty css              *//* empty css               */import"./index.249616b7.js";import"./index.7b2c1cea.js";import"./index.847bc6c1.js";import"./download.102dd35e.js";import"./base64Conver.08b9f4ec.js";import"./index.2f746864.js";import"./index.196769f5.js";import"./uniqBy.c3dbbda0.js";import"./appPrivilegeValue.dacb8db2.js";const{createMessage:x}=$(),z=V({name:"Module",components:{BasicTable:T,TableAction:k,ModuleModal:I,PValueSettingModal:N},setup(){const[e,{openModal:u,setModalProps:i}]=E(),[c,{openModal:p}]=E(),[h,{reload:l,expandAll:n}]=_({title:"\u5217\u8868",api:F,columns:P,isTreeTable:!0,formConfig:{labelWidth:120,schemas:S,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,useSearchForm:!0,pagination:!1,bordered:!0,showIndexColumn:!1,actionColumn:{width:170,title:"\u64CD\u4F5C",dataIndex:"action"}});A(()=>{setTimeout(()=>{n()},1e3)});function o(t){i({title:"\u65B0\u589E\u83DC\u5355"}),u(!0,{record:t,isUpdate:!1})}function a(t,m){m.stopPropagation(),i({title:"\u65B0\u589E\u3010"+t.name+"\u3011\u7684\u5B50\u83DC\u5355"}),t={pid:t.id},u(!0,{record:t,isUpdate:!0})}function g(t,m){m.stopPropagation(),p(!0,{record:t,isUpdate:!0})}function C(t,m){m.stopPropagation(),i({title:"\u4FEE\u6539\u83DC\u5355"}),u(!0,{record:t,isUpdate:!0})}function M(t){if(t.children&&t.children.length>0){x.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}y([t.id]).then(()=>{l()})}function r(){return B(this,null,function*(){setTimeout(()=>{l()},200),setTimeout(()=>{n()},100)})}return{registerTable:h,registerModal:e,registerPValueModal:c,handleCreate:o,handleEdit:C,handleEditPValue:g,handleCreateChild:a,handleDelete:M,handleSuccess:r}}});function G(e,u,i,c,p,h){const l=s("a-button"),n=s("Authority"),o=s("TableAction"),a=s("BasicTable"),g=s("ModuleModal"),C=s("PValueSettingModal");return b(),R("div",null,[d(a,{onRegister:e.registerTable},{toolbar:f(()=>[d(n,{value:"Module:0"},{default:f(()=>[d(l,{type:"primary",onClick:e.handleCreate},{default:f(()=>[w(" \u65B0\u589E ")]),_:1},8,["onClick"])]),_:1})]),bodyCell:f(({column:M,record:r})=>[M.key==="action"?(b(),v(o,{key:0,actions:[{auth:"Module:0",tooltip:"\u6DFB\u52A0\u5B50\u83DC\u5355",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,r)},{auth:"Module:6",tooltip:"\u8BBE\u7F6E\u6743\u9650\u503C",icon:"ant-design:setting-outlined",onClick:e.handleEditPValue.bind(null,r)},{auth:"Module:2",tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,r)},{auth:"Module:3",tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:t=>{t.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,r),placement:"left"}}]},null,8,["actions"])):U("",!0)]),_:1},8,["onRegister"]),d(g,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),d(C,{onRegister:e.registerPValueModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var jt=D(z,[["render",G]]);export{jt as default};