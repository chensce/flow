import{z as e,ac as t,Z as o,D as a,F as n,a3 as r,w as s}from"./vendor.11d66826.js";import i from"./TargetContent.e7924c42.js";import{aV as d}from"./index.1bc1d740.js";import{P as m}from"./index.dfbcae78.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./onMountedOrActivated.17f3c81d.js";import"./useWindowSizeFn.9fecf134.js";import"./useContentViewHeight.a8198af7.js";var p=e({components:{LazyContainer:d,PageWrapper:m,TargetContent:i,Skeleton:t}});const c={class:"lazy-base-demo-wrap"},f=s("h1",null,"向下滚动",-1),l={class:"lazy-base-demo-box"};p.render=function(e,t,i,d,m,p){const j=o("TargetContent"),u=o("Skeleton"),b=o("LazyContainer"),x=o("PageWrapper");return a(),n(x,{title:"懒加载基础示例",content:"向下滚动到可见区域才会加载组件"},{default:r((()=>[s("div",c,[f,s("div",l,[s(b,null,{skeleton:r((()=>[s(u,{rows:10})])),default:r((()=>[s(j)])),_:1})])])])),_:1})};export default p;
