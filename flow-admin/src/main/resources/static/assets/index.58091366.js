import{z as e,bD as r,Z as o,D as a,F as i,a3 as s,w as t,a9 as n}from"./vendor.11d66826.js";/* empty css              */import{u as p}from"./index.9aaa1e13.js";import m from"./Drawer1.fb1146c3.js";import d from"./Drawer2.88719d3c.js";import c from"./Drawer3.8660aa42.js";import f from"./Drawer4.fa303a42.js";import w from"./Drawer5.e7f3602a.js";import{P as D}from"./index.dfbcae78.js";import"./index.1bc1d740.js";/* empty css              */import"./BasicForm.950a284a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              */import"./index.037585c2.js";import"./useWindowSizeFn.9fecf134.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";import"./useForm.7635a38a.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.17f3c81d.js";import"./useContentViewHeight.a8198af7.js";var j=e({components:{Alert:r,PageWrapper:D,Drawer1:m,Drawer2:d,Drawer3:c,Drawer4:f,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=p(),[a,{openDrawer:i}]=p(),[s,{openDrawer:t}]=p(),[n,{openDrawer:m}]=p(),[d,{openDrawer:c}]=p();return{register1:e,openDrawer1:r,register2:a,openDrawer2:i,register3:s,openDrawer3:t,register4:n,register5:d,openDrawer5:c,send:function(){m(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const l=n(" 打开Drawer "),g=n(" 打开Drawer "),u=n(" 打开Drawer "),x=n(" 打开Drawer并传递数据 "),b=n(" 打开详情Drawer ");j.render=function(e,r,n,p,m,d){const c=o("Alert"),f=o("a-button"),w=o("Drawer1"),D=o("Drawer2"),j=o("Drawer3"),y=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return a(),i(C,{title:"抽屉组件使用示例"},{default:s((()=>[t(c,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:s((()=>[l])),_:1},8,["onClick"]),t(c,{message:"内外同时控制显示隐藏","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:s((()=>[g])),_:1}),t(c,{message:"自适应高度/显示footer","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:s((()=>[u])),_:1}),t(c,{message:"内外数据交互","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:e.send},{default:s((()=>[x])),_:1},8,["onClick"]),t(c,{message:"详情页模式","show-icon":""}),t(f,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:s((()=>[b])),_:1}),t(w,{onRegister:e.register1},null,8,["onRegister"]),t(D,{onRegister:e.register2},null,8,["onRegister"]),t(j,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default j;
