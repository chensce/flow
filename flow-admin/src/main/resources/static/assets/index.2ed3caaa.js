import{B as e}from"./index.b519196a.js";import{h as s}from"./index.081912a1.js";import{P as l}from"./index.eb6697bf.js";import{j as c,c4 as n,bP as t,r as a,k as i,l as r,K as u,o,m as d,n as f,x as m,Y as p}from"./vendor.686fd1d4.js";import"./useContentViewHeight.95769b80.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var y=c({components:{BasicDragVerify:e,BugOutlined:n,RightOutlined:t,PageWrapper:l},setup(){const{createMessage:e}=s();return{handleSuccess:function(s){const{time:l}=s;e.success(`校验成功,耗时${l}秒`)},el1:a(null),el2:a(null),el3:a(null),el4:a(null),el5:a(null),handleBtnClick:function(e){e&&e.resume()}}}});const g=m();i("data-v-a0470878");const S={class:"flex justify-center p-4 items-center bg-gray-700"},k=p(" 还原 "),b={class:"flex justify-center p-4 items-center bg-gray-700"},h=p(" 还原 "),j={class:"flex justify-center p-4 items-center bg-gray-700"},x=p(" 还原 "),C={class:"flex justify-center p-4 items-center bg-gray-700"},v=p(" 还原 "),B={class:"flex justify-center p-4 items-center bg-gray-700"},_={key:0},O=p(" 成功 "),P={key:1},V=p(" 拖动 "),W=p(" 还原 ");r();const w=g(((e,s,l,c,n,t)=>{const a=u("BasicDragVerify"),i=u("a-button"),r=u("BugOutlined"),m=u("RightOutlined"),p=u("PageWrapper");return o(),d(p,{title:"拖动校验示例"},{default:g((()=>[f("div",S,[f(a,{ref:"el1",onSuccess:e.handleSuccess},null,8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[1]||(s[1]=s=>e.handleBtnClick(e.el1))},{default:g((()=>[k])),_:1})]),f("div",b,[f(a,{ref:"el2",onSuccess:e.handleSuccess,circle:""},null,8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[2]||(s[2]=s=>e.handleBtnClick(e.el2))},{default:g((()=>[h])),_:1})]),f("div",j,[f(a,{ref:"el3",onSuccess:e.handleSuccess,text:"拖动以进行校验",successText:"校验成功",barStyle:{backgroundColor:"#018ffb"}},null,8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[3]||(s[3]=s=>e.handleBtnClick(e.el3))},{default:g((()=>[x])),_:1})]),f("div",C,[f(a,{ref:"el4",onSuccess:e.handleSuccess},{actionIcon:g((e=>[e?(o(),d(r,{key:0})):(o(),d(m,{key:1}))])),_:1},8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[4]||(s[4]=s=>e.handleBtnClick(e.el4))},{default:g((()=>[v])),_:1})]),f("div",B,[f(a,{ref:"el5",onSuccess:e.handleSuccess},{text:g((e=>[e?(o(),d("div",_,[f(r),O])):(o(),d("div",P,[V,f(m)]))])),_:1},8,["onSuccess"]),f(i,{type:"primary",class:"ml-2",onClick:s[5]||(s[5]=s=>e.handleBtnClick(e.el5))},{default:g((()=>[W])),_:1})])])),_:1})}));y.render=w,y.__scopeId="data-v-a0470878";export default y;