import{L as r,a as i,v as s,K as n,aF as l,o as d,i as m,z as p,l as u,b0 as c}from"./index.c5d747fc.js";import{C as f}from"./index.88e0a121.js";import"./index.296ee04a.js";import"./index.57253b57.js";import{u as h}from"./useECharts.bdf81571.js";import"./index.d8a8c0df.js";import"./index.4287c510.js";import"./useRefs.42a2da00.js";import"./PlusOutlined.20270b2a.js";import"./useFlexGapSupport.6f7d1d35.js";const x=i({components:{Card:f},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(t){const e=s(null),{setOptions:a}=h(e);return n(()=>t.loading,()=>{t.loading||a({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),{chartRef:e}}});function g(t,e,a,y,S,w){const o=l("Card");return d(),m(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:t.loading},{default:p(()=>[u("div",{ref:"chartRef",style:c({width:t.width,height:t.height})},null,4)]),_:1},8,["loading"])}var V=r(x,[["render",g]]);export{V as default};
