import{I as e}from"./index.6237fa09.js";import{_ as t}from"./TableImg.51b451b7.js";import"./BasicForm.e292c287.js";import{P as s}from"./index.2ec2ebc0.js";import{j as o,r as i,K as a,o as r,m as d,Q as n,n as m,V as c,ah as p,Y as f}from"./vendor.686fd1d4.js";import"./index.f769efd5.js";import"./index.393263b2.js";import"./useWindowSizeFn.d82e06bf.js";import"./useForm.10272283.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.27d623ea.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.9bee2b44.js";/* empty css              *//* empty css              *//* empty css              */import"./download.d628f07d.js";import"./base64Conver.bb012c73.js";import"./index.48620b65.js";import"./useContentViewHeight.528cd165.js";/* empty css              *//* empty css              */var u=o({components:{BasicTable:t,ImpExcel:e,PageWrapper:s},setup(){const e=i([]);return{loadDataSuccess:function(t){e.value=[];for(const s of t){const{header:t,results:o,meta:{sheetName:i}}=s,a=[];for(const e of t)a.push({title:e,dataIndex:e});e.value.push({title:i,dataSource:o,columns:a})}},tableListRef:e}}});const l=f(" 导入Excel ");u.render=function(e,t,s,o,i,f){const u=a("a-button"),j=a("ImpExcel"),b=a("BasicTable"),x=a("PageWrapper");return r(),d(x,{title:"excel数据导入示例"},{default:n((()=>[m(j,{onSuccess:e.loadDataSuccess},{default:n((()=>[m(u,{class:"m-3"},{default:n((()=>[l])),_:1})])),_:1},8,["onSuccess"]),(r(!0),d(c,null,p(e.tableListRef,((e,t)=>(r(),d(b,{key:t,title:e.title,columns:e.columns,dataSource:e.dataSource},null,8,["title","columns","dataSource"])))),128))])),_:1})};export default u;