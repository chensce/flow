import{_ as e}from"./TableImg.f24934a9.js";import"./BasicForm.4b5e3079.js";import{u as o}from"./useTable.7ec4da22.js";import{getBasicColumns as t,getTreeTableData as s}from"./tableData.83d6955e.js";import{k as i,K as r,o as a,n,q as p,Q as d,Y as l}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.c00e8219.js";import"./index.734d8392.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.b121dc3d.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.f6024f8f.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.b71977b9.js";/* empty css              *//* empty css              */import"./download.48c86db0.js";import"./StrengthMeter.14956067.js";var m=i({components:{BasicTable:e},setup(){const[e,{expandAll:i,collapseAll:r}]=o({title:"树形表格",isTreeTable:!0,rowSelection:{type:"checkbox"},titleHelpMessage:"树形组件不能和序列号列同时存在",columns:t(),dataSource:s(),rowKey:"id"});return{register:e,expandAll:i,collapseAll:r}}});const c={class:"p-4"},j=l("展开全部"),b=l("折叠全部");m.render=function(e,o,t,s,i,l){const m=r("a-button"),f=r("BasicTable");return a(),n("div",c,[p(f,{onRegister:e.register},{toolbar:d((()=>[p(m,{type:"primary",onClick:e.expandAll},{default:d((()=>[j])),_:1},8,["onClick"]),p(m,{type:"primary",onClick:e.collapseAll},{default:d((()=>[b])),_:1},8,["onClick"])])),_:1},8,["onRegister"])])};export default m;