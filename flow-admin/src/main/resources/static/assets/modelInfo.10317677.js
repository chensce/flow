import{ax as t}from"./index.9eb02b52.js";var o;(function(e){e.ModelInfoPageList="/flow/flowable/modelInfo/getPagerModel",e.GetById="/flow/flowable/modelInfo/get",e.GetByModelId="/flow/flowable/modelInfo/getByModelId",e.PublishBpmn="/flow/flowable/bpmn/publishBpmn",e.StopBpmn="/flow/flowable/bpmn/stopBpmn",e.SaveOrUpdate="/flow/flowable/modelInfo/saveOrUpdateModelInfo",e.Delete="/flow/flowable/modelInfo/deleteByIds",e.CheckEntityExist="/flow/flowable/modelInfo/checkEntityExist",e.GetBpmnByModelKey="/flow/flowable/bpmn/getBpmnByModelKey"})(o||(o={}));const d=e=>{const n=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let l=e||{};l&&(delete l.pageNum,delete l.pageSize);const s={query:n,entity:l};return t.post({url:o.ModelInfoPageList,params:s})};function f(e){return t.get({url:o.GetBpmnByModelKey+"/"+e.modelKey,params:{}})}const p=e=>t.post({url:o.SaveOrUpdate,params:e}),m=e=>t.post({url:o.PublishBpmn+"/"+e}),r=e=>t.post({url:o.StopBpmn+"/"+e}),y=e=>t.get({url:o.GetByModelId+"/"+e}),B=e=>t.post({url:o.Delete,params:e}),u=e=>t.post({url:o.CheckEntityExist,params:e});export{y as a,d as b,r as c,B as d,u as e,f as g,m as p,p as s};