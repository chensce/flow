var l=(o,r,e)=>new Promise((s,a)=>{var n=t=>{try{i(e.next(t))}catch(p){a(p)}},c=t=>{try{i(e.throw(t))}catch(p){a(p)}},i=t=>t.done?s(t.value):Promise.resolve(t.value).then(n,c);i((e=e.apply(o,r)).next())});import{_ as m}from"./index.0ba11515.js";import{g as f}from"./dicType.d4a63538.js";import{az as u,a as d,x as _,o as h,aB as T,i as B,j as D,q as v}from"./index.e61ad282.js";import"./fromPairs.84aabb58.js";import"./index.d92fc3ac.js";import"./eagerComputed.d3c262c3.js";import"./useContextMenu.87346ca1.js";import"./index.9f50e000.js";import"./get.bca7403a.js";const w=d({name:"DictTypeTree",components:{BasicTree:m},emits:["select"],setup(o,{emit:r}){const e=_([]);function s(){return l(this,null,function*(){e.value=yield f()})}function a(n,c){r("select",n[0])}return h(()=>{s()}),{treeData:e,handleSelect:a}}}),$={class:"bg-white mr-0 overflow-hidden"};function x(o,r,e,s,a,n){const c=T("BasicTree");return B(),D("div",$,[v(c,{title:"\u6570\u636E\u5206\u7C7B",toolbar:"",search:"",treeWrapperClassName:"h-[calc(100%-35px)] overflow-auto",clickRowToExpand:!1,treeData:o.treeData,onSelect:o.handleSelect},null,8,["treeData","onSelect"])])}var z=u(w,[["render",x]]);export{z as default};