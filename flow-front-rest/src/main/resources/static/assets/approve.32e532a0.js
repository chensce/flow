import{P as I}from"./index.f8f7d8f4.js";import{L as h,a as F,cV as C,v as m,bA as P,bQ as k,h as B,aF as o,o as S,i as V,z as r,m as t,B as s,t as b,l as a}from"./index.c5d747fc.js";import{S as x}from"./index.f9690192.js";import{T as E}from"./index.b45865a4.js";import R from"./FormContainer.94ab246b.js";import T from"./ActionButtons.d995668a.js";import w from"./BaseActionButtons.c2e93ed3.js";import H from"./ApproveActionButtons.1df2e657.js";import N from"./ProcessBackButton.53556bd3.js";import $ from"./ApprovalHistory.1dfd9831.js";import{c as D,d as W}from"./process.fa055655.js";import"./index.3ad95a08.js";import"./index.efb43125.js";import"./useSize.cc8786ae.js";import"./eagerComputed.10c3fbd5.js";import"./useWindowSizeFn.86d1b816.js";import"./useContentViewHeight.2f7e7c9f.js";import"./ArrowLeftOutlined.871d1f86.js";import"./index.6c8974ca.js";import"./transButton.4255c41b.js";import"./useFlexGapSupport.6f7d1d35.js";import"./index.7c3356b9.js";import"./index.57253b57.js";import"./index.16c68724.js";import"./CopyOutlined.a4c2206d.js";import"./index.96abfac9.js";import"./index.c60d4cb3.js";import"./index.63b45b0c.js";import"./get.5c495707.js";import"./index.4287c510.js";import"./index.7e116144.js";import"./FullscreenOutlined.1623eefe.js";import"./index.89a0cdb4.js";import"./index.79382cfd.js";import"./throttleByAnimationFrame.11bcb571.js";import"./Viewer.91f06516.js";import"./PlusOutlined.20270b2a.js";import"./ApartmentOutlined.1457bb61.js";import"./index.74cde479.js";import"./FlowDiagramModal.c4d9bc7b.js";import"./ClockCircleOutlined.22ebb599.js";const K=F({components:{LeftOutlined:C,PageWrapper:I,FormContainer:R,ActionButtons:T,BaseActionButtons:w,ApproveActionButtons:H,ApprovalHistory:$,ProcessBackButton:N,Space:x,Tag:E},setup(){const n=m(),c=m({}),u=m({}),f=m(""),_=P(),{currentRoute:d}=k(),{params:{modelKey:l},query:{procInstId:p}}=B(d);D({modelKey:l}).then(e=>{c.value=e}),p&&W({procInstId:p}).then(e=>{u.value=e,B(n).setStartorBaseInfo(e)});function i(){history.state.back?history.back():_("/process/todo")}return{currentView:f,modelBaseInfo:c,formContainerRef:n,startorBaseInfo:u,doBack:i}}}),L={class:"pb-2"},M={class:"desc-wrap"},q={class:"desc-wrap mt-2"};function z(n,c,u,f,_,d){const l=o("ProcessBackButton"),p=o("BaseActionButtons"),i=o("Tag"),e=o("Space"),v=o("FormContainer"),A=o("ApprovalHistory"),y=o("ApproveActionButtons"),g=o("PageWrapper");return S(),V(g,{class:"!mt-4 process-container"},{title:r(()=>[t(l),s(" "+b(n.startorBaseInfo.formName||n.modelBaseInfo.name||"-")+" ",1),t(p)]),extra:r(()=>[]),footer:r(()=>[a("div",L,[t(e,null,{default:r(()=>[a("span",null,[s(" \u6D41\u7A0BBP\uFF1A"),t(i,null,{default:r(()=>[s("\u5F20\u4E09")]),_:1})]),a("span",null,[s(" \u5F52\u5C5E\u90E8\u95E8\uFF1A"),t(i,null,{default:r(()=>[s("\u674E\u56DB")]),_:1})])]),_:1})])]),default:r(()=>[a("div",M,[t(v,{ref:"formContainerRef"},null,512)]),a("div",q,[t(A,{ref:"approvalHistoryRef"},null,512)]),t(y)]),_:1})}var To=h(K,[["render",z]]);export{To as default};
