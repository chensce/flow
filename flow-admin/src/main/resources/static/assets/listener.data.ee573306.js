import{aw as e}from"./index.1bc1d740.js";import{ae as t,b4 as l}from"./vendor.11d66826.js";/* empty css              */var a,s;(s=a||(a={})).GetAll="/flow/flowable/flowListener/getList",s.PageList="/flow/flowable/flowListener/getPagerModel",s.SaveOrUpdate="/flow/flowable/flowListener/saveOrUpdate",s.SaveOrUpdateProperties="/flow/flowable/flowListenerParam/saveOrUpdate",s.Delete="/flow/flowable/flowListener/deleteById",s.DeleteListenerParam="/flow/flowable/flowListenerParam/deleteById",s.CheckEntityExist="/flow/flowable/flowListener/checkEntityExist",s.CheckParamEntityExist="/flow/flowable/flowListenerParam/checkEntityExist",s.GetListenerParamList="/flow/flowable/flowListenerParam/getList";const n=t=>e.post({url:a.GetAll,params:t}).then((e=>Promise.resolve(e))),o=t=>e.get({url:a.GetListenerParamList+"/"+t.listenerId}),i=()=>Promise.resolve([{value:"class",label:"java类"},{value:"expression",label:"表达式"},{value:"delegateExpression",label:"代理表达式"}]),r=()=>Promise.resolve([{value:"taskListener",label:"任务监听"},{value:"executionListener",label:"执行监听"}]),d=t=>e.post({url:a.SaveOrUpdate,params:t}),p=t=>e.post({url:a.SaveOrUpdateProperties,params:t}),f=t=>e.post({url:a.CheckEntityExist,params:t}),m=t=>e.post({url:a.CheckParamEntityExist,params:t}),u=t=>e.post({url:a.Delete+"/"+t}),c=t=>e.post({url:a.DeleteListenerParam+"/"+t}),w=[{title:"监听类型",dataIndex:"listenerType",width:180,align:"left",slots:{customRender:"listenerTypeRender"}},{title:"类型",dataIndex:"type",width:180,align:"left",slots:{customRender:"typeRender"}},{title:"名称",dataIndex:"name",align:"left"},{title:"值",dataIndex:"value",align:"left"},{title:"备注",dataIndex:"remark",align:"left"},{title:"操作",dataIndex:"option",width:150,align:"left",slots:{customRender:"action"}}],b=[{title:"ID",dataIndex:"id",ifShow:!1},{title:"listenerId",dataIndex:"listenerId",ifShow:!1},{title:"操作",dataIndex:"option",align:"center",width:100,slots:{customRender:"action"}},{title:"名称",dataIndex:"name",align:"left",editComponent:"Input",editComponentProps:{size:"small"}},{title:"值",dataIndex:"value",align:"left"},{title:"类型",dataIndex:"type",align:"left",customRender:({record:e})=>{let a="未知",s="default";return"string"===e.type?(a="字符串",s="default"):"expression"===e.type&&(a="表达式",s="processing"),t(l,{color:s},(()=>a))}}],g=[{field:"listenerType",label:"监听类型",component:"Select",labelWidth:80,colProps:{span:4,lg:{span:4,offset:0},sm:{span:6,offset:0},xs:{span:8,offset:0}}},{field:"name",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/标识"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],x=[{field:"id",label:"ID",component:"Input",show:!1},{field:"listenerType",label:"监听类型",required:!0,component:"RadioGroup"},{field:"type",label:"类型",required:!0,component:"RadioGroup",defaultValue:"class"},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:80,message:"字符长度不能大于802！"}]},{field:"value",label:"值",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:300,message:"字符长度不能大于300！"}]},{label:"备注",field:"remark",component:"InputTextArea",rules:[{max:255,message:"字符长度不能大于255！"}]}],I=[{field:"id",label:"ID",component:"Input",show:!1},{field:"listenerId",label:"listenerId",component:"Input",show:!1},{field:"type",label:"类型",required:!0,component:"RadioGroup",defaultValue:"string"},{field:"name",label:"名称",helpMessage:"监听器的属性名",required:!0,component:"Input"},{field:"value",label:"值",helpMessage:"监听器的属性值",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"值不能为空！"},{max:255,message:"字符长度不能大于255！"}]}];export{o as a,i as b,w as c,r as d,u as e,c as f,n as g,x as h,f as i,d as j,I as k,m as l,p as m,b as p,g as s};
