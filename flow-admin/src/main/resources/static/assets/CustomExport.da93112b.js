import{_ as e}from"./TableImg.01909c7a.js";import"./BasicForm.eea5fa1e.js";import{E as o}from"./index.33823872.js";import{c as i,d as t,j as s}from"./data.64a756df.js";import{b as a}from"./index.389b283b.js";import{P as r}from"./index.ea4ee88b.js";import{j as d,K as n,o as m,m as p,Q as c,n as j,Y as f}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7a8e214e.js";import"./index.521cc965.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.2c598b04.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65686dd7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.10dab641.js";import"./base64Conver.bb012c73.js";import"./index.98e5d523.js";import"./useContentViewHeight.979ee31e.js";/* empty css              *//* empty css              */var l=d({components:{BasicTable:e,ExpExcelModal:o,PageWrapper:r},setup(){const[e,{openModal:o}]=a();return{defaultHeader:function({filename:e,bookType:o}){s({data:t,filename:e,write2excelOpts:{bookType:o}})},columns:i,data:t,register:e,openModal:o}}});const b=f(" 导出 ");l.render=function(e,o,i,t,s,a){const r=n("a-button"),d=n("BasicTable"),f=n("ExpExcelModal"),l=n("PageWrapper");return m(),p(l,{title:"导出示例",content:"可以选择导出格式"},{default:c((()=>[j(d,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:c((()=>[j(r,{onClick:e.openModal},{default:c((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),j(f,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])),_:1})};export default l;