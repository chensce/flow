import{_ as e}from"./TableImg.2184ae21.js";import"./BasicForm.f3cb7023.js";import"./index.7e778b63.js";import{c as o,d as a,a as i,b as t,e as s}from"./data.7abc2931.js";import{P as r}from"./index.cf1d4223.js";import{y as n,Z as d,B as m,F as c,a2 as p,v as f,a9 as j}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.c6cb6ef5.js";import"./index.a33a5e4d.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.98d9f37c.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.1c9ace8f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.08ac3aaf.js";/* empty css              *//* empty css              *//* empty css              */import"./download.2ac02f88.js";import"./base64Conver.bb012c73.js";import"./index.ce488518.js";/* empty css              *//* empty css              */import"./useContentViewHeight.d4b428eb.js";var x=n({components:{BasicTable:e,PageWrapper:r},setup:()=>({aoaToExcel:function(){i({data:t,header:s,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:a})});const b=j(" 导出 ");x.render=function(e,o,a,i,t,s){const r=d("a-button"),n=d("BasicTable"),j=d("PageWrapper");return m(),c(j,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:p((()=>[f(n,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:p((()=>[f(r,{onClick:e.aoaToExcel},{default:p((()=>[b])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default x;