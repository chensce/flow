import{L as d,a as p,v as l,aF as n,o as f,i as I,z as _,l as t,m as a}from"./index.c5d747fc.js";import{C as u}from"./index.88e0a121.js";import"./index.296ee04a.js";import"./index.57253b57.js";import{P as g}from"./index.f8f7d8f4.js";import C from"./DynamicInfo.6eae3cd3.js";import h from"./BannerInfo.30966a33.js";import v from"./NoticeInfo.9c0e5fd2.js";import y from"./ITWikiCard.f39bbbe2.js";import w from"./ITContactCard.c7f44e38.js";import B from"./CommonDownCard.e469ede9.js";import{dynamicInfoItems as D,bannerList as S,noticeInfoItems as N}from"./data.84a6d0ce.js";import"./index.d8a8c0df.js";import"./index.4287c510.js";import"./useRefs.42a2da00.js";import"./PlusOutlined.20270b2a.js";import"./useFlexGapSupport.6f7d1d35.js";import"./index.3ad95a08.js";import"./index.efb43125.js";import"./useSize.cc8786ae.js";import"./eagerComputed.10c3fbd5.js";import"./useWindowSizeFn.86d1b816.js";import"./useContentViewHeight.2f7e7c9f.js";import"./ArrowLeftOutlined.871d1f86.js";import"./index.6c8974ca.js";import"./transButton.4255c41b.js";import"./index.74cde479.js";import"./index.91d52ab6.js";import"./index.eca2a50c.js";const T=p({components:{PageWrapper:g,DynamicInfo:C,BannerInfo:h,NoticeInfo:v,ITWikiCard:y,ITContactCard:w,CommonDownCard:B,Card:u},setup(){const o=l(!0);return setTimeout(()=>{o.value=!1},1500),{loading:o,dynamicInfoItems:D,bannerInfoItems:S,noticeInfoItems:N}}}),P={class:"flex mt-4"},W={class:"w-2/3"},$={class:"w-1/3 pl-4"},b={class:"flex mt-4"},k={class:"w-1/4 mr-4"},L={class:"w-3/4"};function V(o,z,F,j,q,A){const e=n("BannerInfo"),r=n("NoticeInfo"),i=n("ITContactCard"),s=n("DynamicInfo"),m=n("CommonDownCard"),c=n("PageWrapper");return f(),I(c,null,{default:_(()=>[t("div",P,[t("div",W,[a(e,{dataSource:o.bannerInfoItems,height:"270",class:"enter-y",loading:o.loading},null,8,["dataSource","loading"])]),t("div",$,[a(r,{dataSource:o.noticeInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"])])]),t("div",b,[t("div",k,[a(i,{loading:o.loading,class:"enter-y"},null,8,["loading"])]),t("div",L,[a(s,{dataSource:o.dynamicInfoItems,loading:o.loading,class:"enter-y"},null,8,["dataSource","loading"]),a(m,{loading:o.loading,class:"enter-y !mt-4"},null,8,["loading"])])])]),_:1})}var uo=d(T,[["render",V]]);export{uo as default};
