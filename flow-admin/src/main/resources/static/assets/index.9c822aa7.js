import{_,ah as f}from"./index.9eb02b52.js";import{A as g,r as C,bm as m,a0 as r,B as h,a1 as w,a6 as o,w as t,ae as n,J as F,H as k}from"./vendor.7bee64cc.js";import{P as x}from"./index.77f474a0.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.30e15ddc.js";import"./useContentViewHeight.52836077.js";const S=g({components:{CollapseContainer:f,PageWrapper:x},setup(){const e=C(null),{enter:l,toggle:a,exit:i,isFullscreen:c}=m(),{toggle:d}=m(e);return{enter:l,toggleDom:d,toggle:a,isFullscreen:c,exit:i,domRef:e}}}),b=n(" Enter Window Full Screen "),j=n(" Toggle Window Full Screen "),y=n(" Exit Window Full Screen "),W=n(" Enter Dom Full Screen "),D={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"},B=n(" Exit Dom Full Screen ");function v(e,l,a,i,c,d){const s=r("a-button"),u=r("CollapseContainer"),p=r("PageWrapper");return h(),w(p,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:o(()=>[t(u,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:o(()=>[t(s,{type:"primary",onClick:e.enter,class:"mr-2"},{default:o(()=>[b]),_:1},8,["onClick"]),t(s,{color:"success",onClick:e.toggle,class:"mr-2"},{default:o(()=>[j]),_:1},8,["onClick"]),t(s,{color:"error",onClick:e.exit,class:"mr-2"},{default:o(()=>[y]),_:1},8,["onClick"]),n(" Current State: "+F(e.isFullscreen),1)]),_:1}),t(u,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:o(()=>[t(s,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[W]),_:1},8,["onClick"])]),_:1}),k("div",D,[t(s,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[B]),_:1},8,["onClick"])],512)]),_:1})}var R=_(S,[["render",v]]);export{R as default};