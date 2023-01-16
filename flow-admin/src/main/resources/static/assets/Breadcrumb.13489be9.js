var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,o=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,i=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&o(e,r,t[r]);if(n)for(var r of n(t))l.call(t,r)&&o(e,r,t[r]);return e},u=(e,n)=>t(e,r(n));import{z as c,cr as s,r as d,a as m,ai as p,Z as v,D as h,F as f,w as b,a3 as y,a8 as g,J as C,a9 as O}from"./vendor.11d66826.js";/* empty css              */import{_ as j,p as w,c as x,l as k,r as I,e as P,j as B,R as M,Q as R,y as S,aT as $}from"./index.1bc1d740.js";var A=c({name:"LayoutBreadcrumb",components:{Icon:j,[s.name]:s},props:{theme:w.oneOf(["dark","light"])},setup(){const e=d([]),{currentRoute:t}=m(),{prefixCls:r}=x("layout-breadcrumb"),{getShowBreadCrumbIcon:n}=k(),a=I(),{t:l}=P();function o(e,t){const r=[];return e.forEach((e=>{var n,a;t.includes(e.path)&&r.push(u(i({},e),{name:(null==(n=e.meta)?void 0:n.title)||e.name})),(null==(a=e.children)?void 0:a.length)&&r.push(...o(e.children,t))})),r}return p((()=>{return r=this,n=null,a=function*(){var r,n,a;if(t.value.name===M)return;const l=yield R(),c=t.value.matched,s=null==c?void 0:c[c.length-1];let d=t.value.path;s&&(null==(r=null==s?void 0:s.meta)?void 0:r.currentActiveMenu)&&(d=s.meta.currentActiveMenu);const m=S(l,d),p=o(l.filter((e=>e.path===m[0])),m);if(!p||0===p.length)return;const v=$(p,(e=>{const{meta:t,name:r}=e;if(!t)return!!r;const{title:n,hideBreadcrumb:a,hideMenu:l}=t;return!(!n||a||l)})).filter((e=>{var t,r;return!(null==(t=e.meta)?void 0:t.hideBreadcrumb)||!(null==(r=e.meta)?void 0:r.hideMenu)}));(null==(n=t.value.meta)?void 0:n.currentActiveMenu)&&v.push(u(i({},t.value),{name:(null==(a=t.value.meta)?void 0:a.title)||t.value.name})),e.value=v},new Promise(((e,t)=>{var l=e=>{try{i(a.next(e))}catch(r){t(r)}},o=e=>{try{i(a.throw(e))}catch(r){t(r)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(l,o);i((a=a.apply(r,n)).next())}));var r,n,a})),{routes:e,t:l,prefixCls:r,getIcon:function(e){var t;return e.icon||(null==(t=e.meta)?void 0:t.icon)},getShowBreadCrumbIcon:n,handleClick:function(e,t,r){null==r||r.preventDefault();const{children:n,redirect:l,meta:o}=e;if(!(null==n?void 0:n.length)||l){if(!(null==o?void 0:o.carryParam))if(l&&B(l))a(l);else{let e="";if(1===t.length)e=t[0];else{e=`${t.slice(1).pop()||""}`}e=/^\//.test(e)?e:`/${e}`,a(e)}}else null==r||r.stopPropagation()},hasRedirect:function(e,t){return e.indexOf(t)!==e.length-1}}}});const D={key:1};A.render=function(e,t,r,n,a,l){const o=v("Icon"),i=v("router-link"),u=v("a-breadcrumb");return h(),f("div",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[b(u,{routes:e.routes},{itemRender:y((({route:t,routes:r,paths:n})=>[e.getShowBreadCrumbIcon&&e.getIcon(t)?(h(),f(o,{key:0,icon:e.getIcon(t)},null,8,["icon"])):g("",!0),e.hasRedirect(r,t)?(h(),f(i,{key:2,to:"",onClick:r=>e.handleClick(t,n,r)},{default:y((()=>[O(C(e.t(t.name||t.meta.title)),1)])),_:2},1032,["onClick"])):(h(),f("span",D,C(e.t(t.name||t.meta.title)),1))])),_:1},8,["routes"])],2)};export default A;
