var f=(n,c,t)=>new Promise((o,s)=>{var l=e=>{try{a(t.next(e))}catch(i){s(i)}},r=e=>{try{a(t.throw(e))}catch(i){s(i)}},a=e=>e.done?o(e.value):Promise.resolve(e.value).then(l,r);a((t=t.apply(n,c)).next())});import{A as _,aP as m,r as d,_ as v,a0 as g,bo as h,F as T,B as y,D as B,w as D,$ as b,u}from"./vendor.5879c5ca.js";import{_ as w}from"./Tree.vue_vue_type_style_index_0_lang.6dd32286.js";import{g as C}from"./category.9a93d905.js";import{_ as j,bd as x}from"./index.aeb7d9f7.js";import"./useContextMenu.c42040e5.js";/* empty css               */const $=_({name:"FlowCategoryTree",components:{BasicTree:w,Spin:m},emits:["select"],setup(n,{emit:c}){const t=d([]),o=d(!1),s=d(null);function l(){return f(this,null,function*(){o.value=!0,C().then(a=>{t.value=a,b(()=>{var e;u(t).length<10&&((e=u(s))==null||e.filterByLevel(1))})}).finally(()=>{o.value=!1})})}function r(a,e){const i=x(t.value,p=>p.id===a[0],{id:"id",pid:"pid",children:"children"});c("select",i)}return v(()=>{l()}),{treeData:t,treeLoading:o,basicTreeRef:s,handleSelect:r}}}),k={class:"bg-white m-4 mr-0 overflow-hidden"};function S(n,c,t,o,s,l){const r=g("BasicTree"),a=h("loading");return T((y(),B("div",k,[D(r,{title:"\u6D41\u7A0B\u5206\u7C7B",toolbar:"",search:"",clickRowToExpand:!1,treeData:n.treeData,replaceFields:{key:"id",title:"name"},onSelect:n.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])],512)),[[a,n.treeLoading]])}var P=j($,[["render",S]]);export{P as default};
