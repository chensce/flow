import{j as e,bB as r,K as o,o as i,m as s,Q as n,n as t,Y as a}from"./vendor.686fd1d4.js";/* empty css              */import{u as d}from"./index.8f4069d1.js";import p from"./Drawer1.94141dc5.js";import m from"./Drawer2.7a29d4cc.js";import f from"./Drawer3.a4033cd4.js";import c from"./Drawer4.294471d6.js";import w from"./Drawer5.68050fcb.js";import{P as j}from"./index.ddacb028.js";import"./index.29a0a4fb.js";/* empty css              */import"./BasicForm.7c543d71.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.e5b0725d.js";/* empty css              *//* empty css              */import"./index.44f8140f.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.173d4fef.js";import"./base64Conver.bb012c73.js";import"./index.186d815d.js";import"./useForm.42b3028e.js";import"./useContentViewHeight.263bd4fd.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var D=e({components:{Alert:r,PageWrapper:j,Drawer1:p,Drawer2:m,Drawer3:f,Drawer4:c,Drawer5:w},setup(){const[e,{openDrawer:r,setDrawerProps:o}]=d(),[i,{openDrawer:s}]=d(),[n,{openDrawer:t}]=d(),[a,{openDrawer:p}]=d(),[m,{openDrawer:f}]=d();return{register1:e,openDrawer1:r,register2:i,openDrawer2:s,register3:n,openDrawer3:t,register4:a,register5:m,openDrawer5:f,send:function(){p(!0,{data:"content",info:"Info"})},openDrawerLoading:function(){r(),o({loading:!0}),setTimeout((()=>{o({loading:!1})}),2e3)}}}});const l=a(" 打开Drawer "),g=a(" 打开Drawer "),u=a(" 打开Drawer "),b=a(" 打开Drawer并传递数据 "),x=a(" 打开详情Drawer ");D.render=function(e,r,a,d,p,m){const f=o("Alert"),c=o("a-button"),w=o("Drawer1"),j=o("Drawer2"),D=o("Drawer3"),y=o("Drawer4"),R=o("Drawer5"),C=o("PageWrapper");return i(),s(C,{title:"抽屉组件使用示例"},{default:n((()=>[t(f,{message:"使用 useDrawer 进行抽屉操作","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.openDrawerLoading},{default:n((()=>[l])),_:1},8,["onClick"]),t(f,{message:"内外同时控制显示隐藏","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:r[1]||(r[1]=r=>e.openDrawer2(!0))},{default:n((()=>[g])),_:1}),t(f,{message:"自适应高度/显示footer","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:r[2]||(r[2]=r=>e.openDrawer3(!0))},{default:n((()=>[u])),_:1}),t(f,{message:"内外数据交互","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:e.send},{default:n((()=>[b])),_:1},8,["onClick"]),t(f,{message:"详情页模式","show-icon":""}),t(c,{type:"primary",class:"my-4",onClick:r[3]||(r[3]=r=>e.openDrawer5(!0))},{default:n((()=>[x])),_:1}),t(w,{onRegister:e.register1},null,8,["onRegister"]),t(j,{onRegister:e.register2},null,8,["onRegister"]),t(D,{onRegister:e.register3},null,8,["onRegister"]),t(y,{onRegister:e.register4},null,8,["onRegister"]),t(R,{onRegister:e.register5},null,8,["onRegister"])])),_:1})};export default D;