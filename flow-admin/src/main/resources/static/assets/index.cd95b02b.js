import{A as m,br as r,a0 as s,B as e,a1 as n,a6 as i,H as c,w as j,D as l,ap as b,ab as x,K as f,al as u}from"./vendor.7bee64cc.js";/* empty css               */import{_,W as B}from"./index.9eb02b52.js";import{s as S}from"./data.08d7c751.js";import g from"./BaseSetting.9e8d16c5.js";import y from"./SecureSetting.458af32a.js";import C from"./AccountBind.3a5873e1.js";import v from"./MsgNotify.a0eb73b2.js";/* empty css               */import"./BasicForm.6afa01de.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                */import"./index.30115123.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";import"./useForm.1fd322f5.js";import"./index.07c98deb.js";/* empty css                *//* empty css                */import"./header.d801b988.js";import"./account.ac47cd39.js";import"./upload.91330ad5.js";/* empty css                */const T=m({components:{ScrollContainer:B,Tabs:r,TabPane:r.TabPane,BaseSetting:g,SecureSetting:y,AccountBind:C,MsgNotify:v},setup(){return{prefixCls:"account-setting",settingList:S,tabBarStyle:{width:"220px"}}}});function w(t,k,h,F,N,P){const a=s("TabPane"),p=s("Tabs"),d=s("ScrollContainer");return e(),n(d,null,{default:i(()=>[c("div",{ref:"wrapperRef",class:f(t.prefixCls)},[j(p,{"tab-position":"left",tabBarStyle:t.tabBarStyle},{default:i(()=>[(e(!0),l(x,null,b(t.settingList,o=>(e(),n(a,{key:o.key,tab:o.name},{default:i(()=>[(e(),n(u(o.component)))]),_:2},1032,["tab"]))),128))]),_:1},8,["tabBarStyle"])],2)]),_:1})}var be=_(T,[["render",w]]);export{be as default};