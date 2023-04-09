import{p as u,s as $,V as j,a as F,K as H,w as N,x as R,a9 as U,an as O,O as z,cy as M,fd as W,N as Q,_ as T,U as w,d_ as X,y as q,z as G,bQ as J,dk as Y,az as Z,bv as E,bF as K,fF as tt,c as et,h as A,aB as _,o as S,i as ot,k as P,l as B,r as rt,F as nt,j as b,bN as L}from"./index.97f55544.js";import{c as V,u as it}from"./index.4415f340.js";import at from"./SessionTimeoutLogin.81bd2c04.js";import{s as st,g as ct}from"./scrollTo.b6445e84.js";import{t as lt}from"./throttleByAnimationFrame.029207f5.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.b13d8a2e.js";import"./useWindowSizeFn.61edac1b.js";import"./useContentViewHeight.f7978643.js";import"./useFrameKeepAlive.2f750e97.js";import"./uniqBy.45d4281c.js";import"./_baseIteratee.c5a78c1a.js";import"./get.d05ccbd6.js";import"./index.e08e2820.js";import"./index.5a1f8886.js";import"./useRefs.a0940dd4.js";import"./PlusOutlined.6cde877a.js";import"./RedoOutlined.1fcb5099.js";import"./index.08ddde58.js";import"./lock.ac5e7169.js";import"./Login.abaa2b5b.js";import"./LoginForm.b7ae5ed5.js";import"./index.23620c7a.js";import"./Checkbox.7df03d8d.js";/* empty css              *//* empty css               */import"./index.4592027a.js";import"./LoginFormTitle.70986f33.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./useSize.eb64bd2e.js";import"./GithubFilled.b9579709.js";import"./WechatFilled.90e6ab7c.js";import"./index.7c43370c.js";import"./ForgetPasswordForm.dfb11748.js";import"./index.12848547.js";import"./RegisterForm.a3bad8f1.js";import"./index.5fe02a4f.js";import"./MobileForm.677a353f.js";import"./QrCodeForm.3ba7a788.js";import"./index.df769c44.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"}}]},name:"vertical-align-top",theme:"outlined"},pt=ut;function x(t){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(o);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(o).filter(function(n){return Object.getOwnPropertyDescriptor(o,n).enumerable}))),r.forEach(function(n){mt(t,n,o[n])})}return t}function mt(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var C=function(e,o){var r=x({},e,o.attrs);return u($,x({},r,{icon:pt}),null)};C.displayName="VerticalAlignTopOutlined";C.inheritAttrs=!1;var gt=C,vt=function(){return{visibilityHeight:{type:Number,default:400},duration:{type:Number,default:450},target:Function,prefixCls:String,onClick:Function}},ft=F({compatConfig:{MODE:3},name:"ABackTop",inheritAttrs:!1,props:vt(),setup:function(e,o){var r=o.slots,n=o.attrs,d=o.emit,p=H("back-top",e),c=p.prefixCls,g=p.direction,a=N(),v=R({visible:!1,scrollEvent:null}),D=function(){return a.value&&a.value.ownerDocument?a.value.ownerDocument:window},I=function(s){var l=e.target,m=l===void 0?D:l,f=e.duration;st(0,{getContainer:m,duration:f}),d("click",s)},h=lt(function(i){var s=e.visibilityHeight,l=ct(i.target,!0);v.visible=l>s}),y=function(){var s=e.target,l=s||D,m=l();v.scrollEvent=Y(m,"scroll",function(f){h(f)}),h({target:m})},k=function(){v.scrollEvent&&v.scrollEvent.remove(),h.cancel()};return U(function(){return e.target},function(){k(),O(function(){y()})}),z(function(){O(function(){y()})}),M(function(){O(function(){y()})}),W(function(){k()}),Q(function(){k()}),function(){var i,s,l=u("div",{class:"".concat(c.value,"-content")},[u("div",{class:"".concat(c.value,"-icon")},[u(gt,null,null)])]),m=T(T({},n),{},{onClick:I,class:(i={},w(i,"".concat(c.value),!0),w(i,"".concat(n.class),n.class),w(i,"".concat(c.value,"-rtl"),g.value==="rtl"),i)}),f=X("fade");return u(J,f,{default:function(){return[q(u("div",T(T({},m),{},{ref:a}),[((s=r.default)===null||s===void 0?void 0:s.call(r))||l]),[[G,v.visible]])]}})}}}),dt=j(ft);const Tt=F({name:"LayoutFeatures",components:{BackTop:dt,LayoutLockPage:V(()=>E(()=>import("./index.f788d943.js"),["assets/index.f788d943.js","assets/index.97f55544.js","assets/index.9fda4ac4.css","assets/LockPage.291b0498.js","assets/LockPage.ad5cabd1.css","assets/lock.ac5e7169.js","assets/header.d801b988.js"])),SettingDrawer:V(()=>E(()=>import("./index.25054041.js").then(function(t){return t.i}),["assets/index.25054041.js","assets/index.b662b60c.js","assets/index.c39445e0.css","assets/index.97f55544.js","assets/index.9fda4ac4.css","assets/index.e08e2820.js","assets/index.464798c8.css","assets/ArrowLeftOutlined.cdba934c.js","assets/index.4592027a.js","assets/index.3a3c1369.css","assets/index.4415f340.js","assets/index.d7032874.css","assets/FullscreenOutlined.b5079cb0.js","assets/index.b13d8a2e.js","assets/index.39422f85.css","assets/useWindowSizeFn.61edac1b.js","assets/useContentViewHeight.f7978643.js","assets/useFrameKeepAlive.2f750e97.js","assets/uniqBy.45d4281c.js","assets/_baseIteratee.c5a78c1a.js","assets/get.d05ccbd6.js","assets/index.5a1f8886.js","assets/index.b34048aa.css","assets/useRefs.a0940dd4.js","assets/PlusOutlined.6cde877a.js","assets/RedoOutlined.1fcb5099.js","assets/index.08ddde58.js","assets/lock.ac5e7169.js"])),SessionTimeoutLogin:at},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e,getSettingButtonPosition:o,getFullContent:r}=K(),n=tt(),{prefixCls:d}=et("setting-drawer-feature"),{getShowHeader:p}=it(),c=A(()=>n.getSessionTimeout),g=A(()=>{if(!b(e))return!1;const a=b(o);return a===L.AUTO?!b(p)||b(r):a===L.FIXED});return{getTarget:()=>document.body,getUseOpenBackTop:t,getIsFixedSettingDrawer:g,prefixCls:d,getIsSessionTimeout:c}}});function _t(t,e,o,r,n,d){const p=_("LayoutLockPage"),c=_("BackTop"),g=_("SettingDrawer"),a=_("SessionTimeoutLogin");return S(),ot(nt,null,[u(p),t.getUseOpenBackTop?(S(),P(c,{key:0,target:t.getTarget},null,8,["target"])):B("",!0),t.getIsFixedSettingDrawer?(S(),P(g,{key:1,class:rt(t.prefixCls)},null,8,["class"])):B("",!0),t.getIsSessionTimeout?(S(),P(a,{key:2})):B("",!0)],64)}var ue=Z(Tt,[["render",_t]]);export{ue as default};