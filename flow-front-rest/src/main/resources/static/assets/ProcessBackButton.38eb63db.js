import{y as t,aM as n,bt as o,Z as a,B as e,F as s,a1 as r,v as c}from"./vendor.3dc066e5.js";import{r as i}from"./index.f77a0916.js";var u=t({name:"ActionButtons",components:{Button:n,LeftOutlined:o},setup(t,{emit:n}){const o=i();return{doBack:function(){history.state.back?history.back():o("/process/launch")}}}});u.render=function(t,n,o,i,u,d){const f=a("LeftOutlined"),l=a("Button");return e(),s(l,{onClick:t.doBack,type:"link",title:"返回"},{icon:r((()=>[c(f)])),_:1},8,["onClick"])};export default u;