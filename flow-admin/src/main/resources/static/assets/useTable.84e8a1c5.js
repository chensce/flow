var e=(e,t,a)=>new Promise(((o,n)=>{var l=e=>{try{i(a.next(e))}catch(t){n(t)}},s=e=>{try{i(a.throw(e))}catch(t){n(t)}},i=e=>e.done?o(e.value):Promise.resolve(e.value).then(l,s);i((a=a.apply(e,t)).next())}));import{ah as t,az as a,au as o}from"./index.1bc1d740.js";import{r as n,ad as l,u as s,Q as i,t as r}from"./vendor.11d66826.js";function u(u){const c=n(null),g=n(!1),d=n(null);let p;function h(){const e=s(c);return e||o("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}return[function(e,o){l((()=>{c.value=null,g.value=null})),s(g)&&t()&&e===s(c)||(c.value=e,d.value=o,u&&e.setProps(a(u)),g.value=!0,null==p||p(),p=i((()=>u),(()=>{u&&e.setProps(a(u))}),{immediate:!0,deep:!0}))},{reload:t=>e(this,null,(function*(){h().reload(t)})),setProps:e=>{h().setProps(e)},redoHeight:()=>{h().redoHeight()},setLoading:e=>{h().setLoading(e)},getDataSource:()=>h().getDataSource(),getColumns:({ignoreIndex:e=!1}={})=>{const t=h().getColumns({ignoreIndex:e})||[];return r(t)},setColumns:e=>{h().setColumns(e)},setTableData:e=>h().setTableData(e),setPagination:e=>h().setPagination(e),deleteSelectRowByKey:e=>{h().deleteSelectRowByKey(e)},getSelectRowKeys:()=>r(h().getSelectRowKeys()),getSelectRows:()=>r(h().getSelectRows()),clearSelectedRowKeys:()=>{h().clearSelectedRowKeys()},setSelectedRowKeys:e=>{h().setSelectedRowKeys(e)},getPaginationRef:()=>h().getPaginationRef(),getSize:()=>r(h().getSize()),updateTableData:(e,t,a)=>h().updateTableData(e,t,a),updateTableDataRecord:(e,t)=>h().updateTableDataRecord(e,t),getRowSelection:()=>r(h().getRowSelection()),getCacheColumns:()=>r(h().getCacheColumns()),getForm:()=>s(d),setShowPagination:t=>e(this,null,(function*(){h().setShowPagination(t)})),getShowPagination:()=>r(h().getShowPagination()),expandAll:()=>{h().expandAll()},collapseAll:()=>{h().collapseAll()}}]}export{u};
