import{B as r,a as e}from"./index.9aaa1e13.js";import{z as a,Z as s,D as t,F as o,a3 as i,w as n,a0 as d,a9 as c}from"./vendor.11d66826.js";import"./index.1bc1d740.js";/* empty css              */var l=a({components:{BasicDrawer:r},setup(){const[r,{closeDrawer:a}]=e();return{register:r,closeDrawer:a}}});const w=c(" Drawer Info. "),f=c(" 内部关闭drawer ");l.render=function(r,e,a,c,l,p){const m=s("a-button"),u=s("BasicDrawer");return t(),o(u,d(r.$attrs,{onRegister:r.register,title:"Drawer Title",width:"50%"}),{default:i((()=>[w,n(m,{type:"primary",onClick:r.closeDrawer},{default:i((()=>[f])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default l;
