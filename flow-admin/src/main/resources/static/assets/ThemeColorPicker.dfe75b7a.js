import{az as m,a as l,e1 as c,c as d,aB as u,o as r,i as o,F as C,aE as _,r as p,bp as f,p as k}from"./index.da587afe.js";import{b as h}from"./index.86b68c3c.js";import"./index.a74219c4.js";import"./index.f277a2c9.js";import"./ArrowLeftOutlined.8a04d10c.js";import"./index.a64c8a60.js";import"./index.ba5e1116.js";import"./FullscreenOutlined.3d903e0f.js";import"./index.a912e0ed.js";import"./useWindowSizeFn.3fdab581.js";import"./useContentViewHeight.f2db75e2.js";import"./useFrameKeepAlive.ec663918.js";import"./uniqBy.f906dabc.js";import"./_baseIteratee.78d8c020.js";import"./get.40c34cfc.js";import"./index.77df2807.js";import"./useRefs.1aead304.js";import"./PlusOutlined.3b3e37c8.js";import"./RedoOutlined.46184af0.js";import"./index.4b69e39b.js";import"./lock.25b84ca8.js";const v=l({name:"ThemeColorPicker",components:{CheckOutlined:c},props:{colorList:{type:Array,default:()=>[]},event:{type:Number},def:{type:String}},setup(e){const{prefixCls:i}=d("setting-theme-picker");function n(s){e.event&&h(e.event,s)}return{prefixCls:i,handleClick:n}}}),y=["onClick"];function $(e,i,n,s,g,b){const a=u("CheckOutlined");return r(),o("div",{class:p(e.prefixCls)},[(r(!0),o(C,null,_(e.colorList||[],t=>(r(),o("span",{key:t,onClick:z=>e.handleClick(t),class:p([`${e.prefixCls}__item`,{[`${e.prefixCls}__item--active`]:e.def===t}]),style:f({background:t})},[k(a)],14,y))),128))],2)}var M=m(v,[["render",$]]);export{M as default};
