import{_ as e}from"./TableImg.5efff65a.js";import"./BasicForm.950a284a.js";import{u as a}from"./useTable.84e8a1c5.js";import{P as t}from"./index.dfbcae78.js";import{z as l,aY as i,b5 as d,an as s,bo as n,cf as r,bk as o,Z as u,D as f,F as m,a3 as p,w as b,a9 as c}from"./vendor.11d66826.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{refundTimeTableSchema as _,refundTimeTableData as j}from"./data.f7bb4395.js";/* empty css              *//* empty css              */import"./useForm.7635a38a.js";import"./index.1bc1d740.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./index.037585c2.js";import"./onMountedOrActivated.17f3c81d.js";import"./useSortable.072b7c77.js";/* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";/* empty css              *//* empty css              */import"./useContentViewHeight.a8198af7.js";var x=l({components:{BasicTable:e,PageWrapper:t,[i.name]:i,[d.name]:d,Empty:s,[n.name]:n,[n.Item.name]:n.Item,[r.name]:r,[r.Step.name]:r.Step,[o.name]:o,[o.TabPane.name]:o.TabPane},setup(){const[e]=a({title:"退货进度",columns:_,pagination:!1,dataSource:j,showIndexColumn:!1,scroll:{y:300}});return{registerTimeTable:e}}});const g=c(" 操作一 "),T=c(" 操作二 "),y=c(" 主操作 "),v={class:"pt-4 m-4 desc-wrap"},k=c(" 曲丽丽 "),w=c(" XX 服务 "),X=c(" 2017-01-10 "),h=b("a",null,"12421",-1),C=c(" 2017-07-07 ~ 2017-08-08 "),P=c(" 请于两个工作日内确认 "),S=b("div",null,"Vben",-1),z=c(),B=b("p",null,"2016-12-12 12:32",-1),F=b("p",null,"Chad",-1),I=c(" 付小小 "),W=c(" XX 32943898021309809423 "),Y=c(" 3321944288191034921 "),E=c(" 18112345678 "),M=c(" 曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口 "),R=c(" 111 "),V=c(" 2017-08-08 "),A=c(" 725 "),D=c(" 2017-08-08 "),H=b("h4",null,"信息组",-1),N=c(" 林东东 "),O=c(" 1234567 "),Z=c(" XX公司 - YY部 "),q=c(" 2017-08-08 "),G=c(" 这段描述很长很长很长很长很长很长很长很长很长很长很长很长很长很长... "),J=c(" Citrullus lanatus (Thunb.) Matsum. et Nakai一年生蔓生藤本；茎、枝粗壮，具明显的棱。卷须较粗.. "),K=c(" 付小小 "),L=c(" 1234568 ");x.render=function(e,a,t,l,i,d){const s=u("a-button"),n=u("a-tab-pane"),r=u("a-tabs"),o=u("a-descriptions-item"),c=u("a-descriptions"),_=u("a-step"),j=u("a-steps"),x=u("a-card"),Q=u("a-divider"),U=u("Empty"),$=u("BasicTable"),ee=u("PageWrapper");return f(),m(ee,{title:"单号：234231029431",contentBackground:""},{extra:p((()=>[b(s,null,{default:p((()=>[g])),_:1}),b(s,null,{default:p((()=>[T])),_:1}),b(s,{type:"primary"},{default:p((()=>[y])),_:1})])),footer:p((()=>[b(r,{"default-active-key":"1"},{default:p((()=>[b(n,{key:"1",tab:"详情"}),b(n,{key:"2",tab:"规则"})])),_:1})])),default:p((()=>[b("div",v,[b(c,{size:"small",column:2},{default:p((()=>[b(o,{label:"创建人"},{default:p((()=>[k])),_:1}),b(o,{label:"订购产品"},{default:p((()=>[w])),_:1}),b(o,{label:"创建时间"},{default:p((()=>[X])),_:1}),b(o,{label:"关联单据"},{default:p((()=>[h])),_:1}),b(o,{label:"生效日期"},{default:p((()=>[C])),_:1}),b(o,{label:"备注"},{default:p((()=>[P])),_:1})])),_:1}),b(x,{title:"流程进度",bordered:!1},{default:p((()=>[b(j,{current:1,"progress-dot":"",size:"small"},{default:p((()=>[b(_,{title:"创建项目"},{description:p((()=>[S,z,B])),_:1}),b(_,{title:"部门初审"},{description:p((()=>[F])),_:1}),b(_,{title:"财务复核"}),b(_,{title:"完成"})])),_:1})])),_:1}),b(x,{title:"用户信息",bordered:!1,class:"mt-5"},{default:p((()=>[b(c,{column:3},{default:p((()=>[b(o,{label:"用户姓名"},{default:p((()=>[I])),_:1}),b(o,{label:"会员卡号"},{default:p((()=>[W])),_:1}),b(o,{label:"身份证"},{default:p((()=>[Y])),_:1}),b(o,{label:"联系方式"},{default:p((()=>[E])),_:1}),b(o,{label:"联系地址",span:2},{default:p((()=>[M])),_:1})])),_:1}),b(c,{title:"信息组",column:3},{default:p((()=>[b(o,{label:"某某数据"},{default:p((()=>[R])),_:1}),b(o,{label:"该数据更新时间"},{default:p((()=>[V])),_:1}),b(o,{label:"某某数据"},{default:p((()=>[A])),_:1}),b(o,{label:"该数据更新时间"},{default:p((()=>[D])),_:1})])),_:1}),H,b(x,{title:"多层级信息组"},{default:p((()=>[b(c,{title:"组名称",column:3},{default:p((()=>[b(o,{label:"负责人"},{default:p((()=>[N])),_:1}),b(o,{label:"角色码"},{default:p((()=>[O])),_:1}),b(o,{label:"所属部门"},{default:p((()=>[Z])),_:1}),b(o,{label:"过期时间"},{default:p((()=>[q])),_:1}),b(o,{label:"描述",span:2},{default:p((()=>[G])),_:1})])),_:1}),b(Q),b(c,{title:"组名称",column:1},{default:p((()=>[b(o,{label:"学名"},{default:p((()=>[J])),_:1})])),_:1}),b(Q),b(c,{title:"组名称",column:1},{default:p((()=>[b(o,{label:"负责人"},{default:p((()=>[K])),_:1}),b(o,{label:"角色码"},{default:p((()=>[L])),_:1})])),_:1})])),_:1})])),_:1}),b(x,{title:"用户近半年来电记录",class:"my-5"},{default:p((()=>[b(U)])),_:1}),b($,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])),_:1})};export default x;
