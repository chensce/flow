import{_ as t}from"./useDrawer.71e98b2d.js";import{k as e,K as a,o as n,n as o,Q as s,q as r,V as d,ah as l,N as u,Y as i}from"./vendor.56d2c57f.js";/* empty css              */import"./index.bfbdc958.js";var f=e({components:{BasicDrawer:t},setup:()=>({handleOk:()=>{}})});const c=i(" btn"),p=i(" btn2"),b=i(" btn3");f.render=function(t,e,i,f,m,h){const k=a("a-button"),w=a("BasicDrawer");return n(),o(w,u(t.$attrs,{title:"Modal Title",width:"50%",showFooter:"",onOk:t.handleOk}),{insertFooter:s((()=>[r(k,null,{default:s((()=>[c])),_:1})])),centerFooter:s((()=>[r(k,null,{default:s((()=>[p])),_:1})])),appendFooter:s((()=>[r(k,null,{default:s((()=>[b])),_:1})])),default:s((()=>[(n(),o(d,null,l(40,(t=>r("p",{class:"h-20",key:t}," 根据屏幕高度自适应 "))),64))])),_:1},16,["onOk"])};export default f;