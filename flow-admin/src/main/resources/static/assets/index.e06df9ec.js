import{Q as v}from"./index.50adc31c.js";import{_,ah as E,a$ as b}from"./index.aeb7d9f7.js";import{P as D}from"./index.37a89528.js";import{A as B,r as p,a0 as a,B as q,a1 as w,a6 as t,H as s,w as o,u as F,ae as g,L as A,N as h}from"./vendor.5879c5ca.js";import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.6345b5e8.js";const y="https://www.vvbin.cn",j=B({components:{CollapseContainer:E,QrCode:v,PageWrapper:D},setup(){const e=p(null),r=p(null);function d(){const u=F(e);!u||u.download("\u6587\u4EF6\u540D")}function i(){const u=F(r);!u||u.download("Qrcode")}function c({ctx:u}){u instanceof CanvasRenderingContext2D&&(u.fillStyle="black",u.font='16px "\u5FAE\u8F6F\u96C5\u9ED1"',u.textBaseline="bottom",u.textAlign="center",u.fillText("\u4F60\u5E05\u4F60\u5148\u626B",100,195,200))}return{onQrcodeDone:c,qrCodeUrl:y,LogoImg:b,download:d,downloadDiy:i,qrRef:e,qrDiyRef:r}}}),f=e=>(A("data-v-30bb39e8"),e=e(),h(),e),x={class:"flex flex-wrap"},U=g(" \u4E0B\u8F7D "),k=f(()=>s("div",{class:"msg"},"(\u5728\u7EBFlogo\u4F1A\u5BFC\u81F4\u56FE\u7247\u8DE8\u57DF\uFF0C\u9700\u8981\u4E0B\u8F7D\u56FE\u7247\u9700\u8981\u81EA\u884C\u89E3\u51B3\u8DE8\u57DF\u95EE\u9898)",-1)),I=g(" \u4E0B\u8F7D "),Q=f(()=>s("div",{class:"msg"},"\u8981\u8FDB\u884C\u6269\u5C55\u7ED8\u5236\u5219\u4E0D\u80FD\u5C06tag\u8BBE\u4E3Aimg",-1));function S(e,r,d,i,c,u){const l=a("QrCode"),n=a("CollapseContainer"),m=a("a-button"),C=a("PageWrapper");return q(),w(C,{title:"\u4E8C\u7EF4\u7801\u7EC4\u4EF6\u4F7F\u7528\u793A\u4F8B"},{default:t(()=>[s("div",x,[o(n,{title:"\u57FA\u7840\u793A\u4F8B",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl},null,8,["value"])]),_:1}),o(n,{title:"\u6E32\u67D3\u6210img\u6807\u7B7E\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])]),_:1}),o(n,{title:"\u914D\u7F6E\u6837\u5F0F\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])]),_:1}),o(n,{title:"\u672C\u5730logo\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])]),_:1}),o(n,{title:"\u5728\u7EBFlogo\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])]),_:1}),o(n,{title:"logo\u914D\u7F6E\u793A\u4F8B",class:"text-center mb-6 qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])]),_:1}),o(n,{title:"\u4E0B\u8F7D\u793A\u4F8B",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),o(m,{class:"mb-2",type:"primary",onClick:e.download},{default:t(()=>[U]),_:1},8,["onClick"]),k]),_:1}),o(n,{title:"\u914D\u7F6E\u5927\u5C0F\u793A\u4F8B",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,width:300},null,8,["value"])]),_:1}),o(n,{title:"\u6269\u5C55\u7ED8\u5236\u793A\u4F8B",class:"text-center qrcode-demo-item"},{default:t(()=>[o(l,{value:e.qrCodeUrl,width:200,options:{margin:5},ref:"qrDiyRef",logo:e.LogoImg,onDone:e.onQrcodeDone},null,8,["value","logo","onDone"]),o(m,{class:"mb-2",type:"primary",onClick:e.downloadDiy},{default:t(()=>[I]),_:1},8,["onClick"]),Q]),_:1})])]),_:1})}var G=_(j,[["render",S],["__scopeId","data-v-30bb39e8"]]);export{G as default};
