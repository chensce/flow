import{M as e}from"./index.89c22c7b.js";import{P as n}from"./index.e2991800.js";import{j as t,r as a,u as o,K as r,o as s,m as i,Q as d,n as m,Y as u}from"./vendor.686fd1d4.js";import"./index.5dab9bd2.js";import"./index.d939de4e.js";import"./useWindowSizeFn.d82e06bf.js";import"./useContentViewHeight.e8047e09.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var l=t({components:{MarkDown:e,PageWrapper:n},setup(){const e=a(null),n=a("\n# title\n\n# content\n");return{value:n,toggleTheme:function(){const n=o(e);if(!n)return;n.getVditor().setTheme("dark")},markDownRef:e,handleChange:function(e){n.value=e}}}});const p=u(" 黑暗主题 ");l.render=function(e,n,t,a,o,u){const l=r("a-button"),c=r("MarkDown"),f=r("PageWrapper");return s(),i(f,{title:"MarkDown组件示例"},{default:d((()=>[m(l,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:d((()=>[p])),_:1},8,["onClick"]),m(c,{value:e.value,onChange:e.handleChange,ref:"markDownRef"},null,8,["value","onChange"])])),_:1})};export default l;