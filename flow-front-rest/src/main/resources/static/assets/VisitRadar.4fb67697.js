import{a as r,v as i,K as s,L as u,aF as n,o as d,i as l,z as m,l as p,b0 as f}from"./index.c5d747fc.js";import{C as c}from"./index.88e0a121.js";import"./index.296ee04a.js";import"./index.57253b57.js";import{u as h}from"./useECharts.bdf81571.js";import"./index.d8a8c0df.js";import"./index.4287c510.js";import"./useRefs.42a2da00.js";import"./PlusOutlined.20270b2a.js";import"./useFlexGapSupport.6f7d1d35.js";const x=r({components:{Card:c},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(t){const e=i(null),{setOptions:a}=h(e);return s(()=>t.loading,()=>{t.loading||a({legend:{bottom:0,data:["\u8BBF\u95EE","\u8D2D\u4E70"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"\u7535\u8111",max:100},{text:"\u5145\u7535\u5668",max:100},{text:"\u8033\u673A",max:100},{text:"\u624B\u673A",max:100},{text:"Ipad",max:100},{text:"\u8033\u673A",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"\u8BBF\u95EE",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"\u8D2D\u4E70",itemStyle:{color:"#5ab1ef"}}]}]})},{immediate:!0}),{chartRef:e}}});function g(t,e,a,y,B,C){const o=n("Card");return d(),l(o,{title:"\u8F6C\u5316\u7387",loading:t.loading},{default:m(()=>[p("div",{ref:"chartRef",style:f({width:t.width,height:t.height})},null,4)]),_:1},8,["loading"])}var A=u(x,[["render",g]]);export{A as default};
