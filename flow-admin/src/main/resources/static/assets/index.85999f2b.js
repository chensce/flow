import{M as k,a as C}from"./index.e74d1be8.js";import{P as h}from"./index.37a89528.js";import{A as g,bb as j,r as l,a0 as o,B as V,a1 as D,a6 as r,H as c,w as t,u as b,ae as p}from"./vendor.5879c5ca.js";/* empty css               *//* empty css               *//* empty css               */import{_ as x}from"./index.aeb7d9f7.js";import"./index.309f7e13.js";import"./useWindowSizeFn.6a6adedd.js";/* empty css                *//* empty css                */import"./useContentViewHeight.6345b5e8.js";const M=g({components:{MarkDown:k,PageWrapper:h,MarkdownViewer:C,ACard:j},setup(){const e=l(null),a=l(`
# title

# content
`);function u(){const n=b(e);if(!n)return;n.getVditor().setTheme("dark")}function i(n){a.value=n}function d(){a.value=""}return{value:a,toggleTheme:u,markDownRef:e,handleChange:i,clearValue:d}}}),B=p(" \u9ED1\u6697\u4E3B\u9898 "),F=p(" \u6E05\u7A7A\u5185\u5BB9 "),E={class:"mt-2"};function A(e,a,u,i,d,n){const s=o("a-button"),m=o("MarkDown"),f=o("MarkdownViewer"),_=o("a-card"),v=o("PageWrapper");return V(),D(v,{title:"MarkDown\u7EC4\u4EF6\u793A\u4F8B"},{default:r(()=>[c("div",null,[t(s,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[B]),_:1},8,["onClick"]),t(s,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[F]),_:1},8,["onClick"]),t(m,{value:e.value,"onUpdate:value":a[0]||(a[0]=w=>e.value=w),onChange:e.handleChange,ref:"markDownRef",placeholder:"\u8FD9\u662F\u5360\u4F4D\u6587\u672C"},null,8,["value","onChange"])]),c("div",E,[t(_,{title:"Markdown Viewer \u7EC4\u4EF6\u6F14\u793A"},{default:r(()=>[t(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}var G=x(M,[["render",A]]);export{G as default};
