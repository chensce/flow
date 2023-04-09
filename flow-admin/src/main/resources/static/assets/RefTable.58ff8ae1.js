import{B as w}from"./TableImg.8efb1d09.js";import"./BasicForm.57c6e84a.js";import{getBasicColumns as p,getBasicShortColumns as D}from"./tableData.38d0f3c2.js";import{az as E,a as _,w as S,aB as f,o as A,i as T,n as C,p as u,B as i,C as n,G as h,j as L}from"./index.97f55544.js";import{d as y}from"./table.57204f15.js";import"./index.cbf389d6.js";import"./Checkbox.7df03d8d.js";import"./index.23620c7a.js";import"./index.2043c4f4.js";import"./eagerComputed.009c9352.js";import"./useForm.1f0c5dd1.js";import"./index.fe38133b.js";import"./index.b145dae6.js";import"./index.a43619a6.js";import"./useSize.eb64bd2e.js";import"./useWindowSizeFn.61edac1b.js";import"./useContentViewHeight.f7978643.js";import"./ArrowLeftOutlined.cdba934c.js";import"./index.73fcc7b5.js";import"./transButton.76d507e2.js";import"./index.5e0e80fc.js";import"./index.694ce07d.js";import"./index.8e778cab.js";import"./uuid.2b29000c.js";import"./index.4675f512.js";import"./_baseIteratee.c5a78c1a.js";import"./get.d05ccbd6.js";import"./DeleteOutlined.3429193d.js";import"./index.be63e913.js";import"./useRefs.a0940dd4.js";import"./Form.cdd7ca4e.js";import"./Col.39b2cbe8.js";import"./useFlexGapSupport.a588479c.js";import"./index.1f9d3a9d.js";import"./FullscreenOutlined.b5079cb0.js";import"./index.4592027a.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.1fcb5099.js";import"./index.39a555ee.js";import"./fromPairs.84aabb58.js";import"./scrollTo.b6445e84.js";import"./index.264e2111.js";/* empty css              *//* empty css               */import"./index.12848547.js";import"./index.a512493f.js";import"./index.c0d032c8.js";import"./download.6452e165.js";import"./base64Conver.08b9f4ec.js";import"./index.5fe02a4f.js";import"./index.7c43370c.js";import"./uniqBy.45d4281c.js";const K=_({components:{BasicTable:w},setup(){const o=S(null),{createMessage:a}=h();function e(){const m=L(o);if(!m)throw new Error("tableAction is null");return m}function s(){e().setLoading(!0),setTimeout(()=>{e().setLoading(!1)},1e3)}function r(){e().setColumns(D())}function c(){e().setColumns(p()),e().reload({page:1})}function t(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getColumns()}function l(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getDataSource()}function g(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getRawDataSource()}function d(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getPaginationRef()}function F(){e().setPagination({current:2}),e().reload()}function B(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getSelectRows()}function k(){a.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),e().getSelectRowKeys()}function b(){e().setSelectedRowKeys(["0","1","2"])}function R(){e().clearSelectedRowKeys()}return{tableRef:o,api:y,columns:p(),changeLoading:s,changeColumns:r,reloadTable:c,getColumn:t,getTableData:l,getTableRawData:g,getPagination:d,setPaginationInfo:F,getSelectRowList:B,getSelectRowKeyList:k,setSelectedRowKeyList:b,clearSelect:R}}}),P={class:"p-4"},v={class:"mb-4"},$={class:"mb-4"};function M(o,a,e,s,r,c){const t=f("a-button"),l=f("BasicTable");return A(),T("div",P,[C("div",v,[u(t,{class:"mr-2",onClick:o.reloadTable},{default:i(()=>[n(" \u8FD8\u539F ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeLoading},{default:i(()=>[n(" \u5F00\u542Floading ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.changeColumns},{default:i(()=>[n(" \u66F4\u6539Columns ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getColumn},{default:i(()=>[n(" \u83B7\u53D6Columns ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableData},{default:i(()=>[n(" \u83B7\u53D6\u8868\u683C\u6570\u636E ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getTableRawData},{default:i(()=>[n(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setPaginationInfo},{default:i(()=>[n(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 ")]),_:1},8,["onClick"])]),C("div",$,[u(t,{class:"mr-2",onClick:o.getSelectRowList},{default:i(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getSelectRowKeyList},{default:i(()=>[n(" \u83B7\u53D6\u9009\u4E2D\u884CKey ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.setSelectedRowKeyList},{default:i(()=>[n(" \u8BBE\u7F6E\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.clearSelect},{default:i(()=>[n(" \u6E05\u7A7A\u9009\u4E2D\u884C ")]),_:1},8,["onClick"]),u(t,{class:"mr-2",onClick:o.getPagination},{default:i(()=>[n(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ")]),_:1},8,["onClick"])]),u(l,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:o.api,columns:o.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Mo=E(K,[["render",M]]);export{Mo as default};