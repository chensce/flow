import{L as l,a as p,v as f,aF as t,o as _,i as I,z as g,l as n,m as a}from"./index.75df828b.js";import{C as u}from"./index.f7065eda.js";import"./index.e72a2c0b.js";import"./index.4ae6698d.js";import{P as C}from"./index.ebf1aaf7.js";import h from"./DynamicInfo.7b57c49a.js";import v from"./BannerInfo.ec8fcc83.js";import y from"./NoticeInfo.1990a525.js";import w from"./ITWikiCard.f9c38876.js";import T from"./ITContactCard.1d263846.js";import B from"./CommonDownCard.42ad1bd7.js";import{dynamicInfoItems as D,bannerList as S,noticeInfoItems as W}from"./data.57897d29.js";import"./index.04511fa8.js";import"./index.9f5ee9cb.js";import"./useRefs.2caae181.js";import"./PlusOutlined.58f79c9c.js";import"./useFlexGapSupport.4972a32f.js";import"./index.c80a7d24.js";import"./index.1274b7b1.js";import"./useSize.f8b8ed9e.js";import"./eagerComputed.117d0821.js";import"./useWindowSizeFn.1b303f48.js";import"./useContentViewHeight.1db0a346.js";import"./ArrowLeftOutlined.ec67e314.js";import"./index.4961ba28.js";import"./transButton.07ac4e4d.js";import"./index.44c3112f.js";import"./index.6bc1332b.js";import"./index.bfd414b8.js";const k=p({components:{PageWrapper:C,DynamicInfo:h,BannerInfo:v,NoticeInfo:y,ITWikiCard:w,ITContactCard:T,CommonDownCard:B,Card:u},setup(){const o=f(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:D,bannerInfoItems:S,noticeInfoItems:W}}}),N={class:"flex mt-4"},P={class:"w-2/3 flex"},$={class:"w-1/3"},b={class:"w-2/3 pl-4"},L={class:"w-1/3 pl-4"},V={class:"flex mt-4"},z={class:"w-1/4 mr-4"},F={class:"w-3/4"};function j(o,q,A,E,G,H){const e=t("ITWikiCard"),r=t("BannerInfo"),i=t("NoticeInfo"),s=t("ITContactCard"),m=t("DynamicInfo"),d=t("CommonDownCard"),c=t("PageWrapper");return _(),I(c,null,{default:g(()=>[n("div",N,[n("div",P,[n("div",$,[a(e,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),n("div",b,[a(r,{dataSource:o.bannerInfoItems,height:"264",class:"enter-y",loading:o.loading},null,8,["dataSource","loading"])])]),n("div",L,[a(i,{dataSource:o.noticeInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),n("div",V,[n("div",z,[a(s,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),n("div",F,[a(m,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"]),a(d,{loading:o.loading,class:"enter-y !mt-4"},null,8,["loading"])])])]),_:1})}var ho=l(k,[["render",j]]);export{ho as default};