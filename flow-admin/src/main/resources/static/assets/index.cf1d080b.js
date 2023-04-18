import{B as D}from"./TableImg.b4edebb6.js";import{l as T}from"./BasicForm.d977d74c.js";import{u as y}from"./useTable.2d6a625d.js";import{g as b,d as g}from"./dept.e9e0eebb.js";import{P as _}from"./index.0b8e7721.js";import w from"./DictTypeTree.182f58d3.js";import B from"./DictionaryTable.e0e72074.js";import S from"./DictionaryItemTable.195d10fd.js";import{az as C,a as x,w as f,aB as i,o as F,k as v,B as I,p as c,G as R}from"./index.7ea10544.js";import{b as M}from"./index.61c914e7.js";import{k,l as P}from"./dictionary.da74d644.js";import"./index.e5a472bb.js";import"./Checkbox.fc744a85.js";import"./index.f8eff8ab.js";import"./index.60e2cd93.js";import"./eagerComputed.087e7096.js";import"./useForm.d5452096.js";import"./index.cca6a300.js";import"./index.c247c1b6.js";import"./index.6954dcaa.js";import"./uuid.2b29000c.js";import"./index.c5147852.js";import"./_baseIteratee.31b374d5.js";import"./get.4066932b.js";import"./DeleteOutlined.f1932d42.js";import"./index.e40c323f.js";import"./useRefs.08da6c2b.js";import"./Form.6886a72a.js";import"./Col.a6a2600f.js";import"./useFlexGapSupport.5af5008f.js";import"./useSize.b4cfb06d.js";import"./useWindowSizeFn.3dc14e02.js";import"./index.5d6fdc93.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.495d4eff.js";import"./FullscreenOutlined.8864dded.js";import"./index.32756aa0.js";import"./fromPairs.daf93cb7.js";import"./scrollTo.17e7a4de.js";import"./index.056b642d.js";/* empty css              *//* empty css               */import"./index.c6794bd1.js";import"./transButton.331b5127.js";import"./index.a8777167.js";import"./index.d3af8cb2.js";import"./download.bfb09172.js";import"./base64Conver.08b9f4ec.js";import"./index.245189e1.js";import"./index.2f8b90c5.js";import"./uniqBy.fea10226.js";import"./index.b58cbcfd.js";import"./index.a5ac6dd4.js";import"./useContentViewHeight.6992291a.js";import"./ArrowLeftOutlined.89ac5398.js";import"./index.9d34ef87.js";import"./index.694f5114.js";import"./useContextMenu.936ed174.js";import"./dicType.132f605a.js";import"./DictionaryModal.b6bfd015.js";import"./constantEnum.bf6653fb.js";import"./DictionaryItemModal.354432e4.js";const{createMessage:W}=R(),$=x({components:{BasicTable:D,PageWrapper:_,DictTypeTree:w,DictionaryTable:B,DictionaryItemTable:S,TableAction:T},setup(){const[o,{openModal:a}]=M(),r=f(),e=f(),[u,{reload:n}]=y({title:"\u5217\u8868",api:b,columns:k,formConfig:{labelWidth:120,schemas:P,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function m(){a(!0,{isUpdate:!1})}function p(t){a(!0,{record:t,isUpdate:!0})}function l(t){if(t.children&&t.children.length>0){W.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}g([t.id]).then(()=>{n()})}function s(){n()}function d(t=""){t?(r.value.filterByDictType(t),e.value.cleanTableData()):r.value.cleanTableData()}function h(t){t?e.value.filterByDict(t):e.value.cleanTableData()}return{dictionaryRef:r,dictionaryItemRef:e,registerTable:u,registerModal:o,handleCreate:m,handleEdit:p,handleDictSelect:h,handleDelete:l,handleSuccess:s,handleDictTypeSelect:d}}});function E(o,a,r,e,u,n){const m=i("DictTypeTree"),p=i("DictionaryTable"),l=i("DictionaryItemTable"),s=i("PageWrapper");return F(),v(s,{dense:"",contentFullHeight:"",contentClass:"flex",class:"p-4"},{default:I(()=>[c(m,{class:"w-1/5 xl:w-1/5",onSelect:o.handleDictTypeSelect},null,8,["onSelect"]),c(p,{ref:"dictionaryRef",onHandleSelect:o.handleDictSelect,class:"w-2/5 xl:w-2/5 ml-2 mr-2"},null,8,["onHandleSelect"]),c(l,{ref:"dictionaryItemRef",class:"w-2/5 xl:w-2/5"},null,512)]),_:1})}var jt=C($,[["render",E]]);export{jt as default};