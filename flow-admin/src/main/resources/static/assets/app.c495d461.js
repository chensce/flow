import{ax as a}from"./index.9eb02b52.js";var s;(function(e){e.GetAll="/flow/base/app/getApps",e.PageList="/flow/base/app/getPagerModel",e.SaveOrUpdate="/flow/base/app/saveOrUpdate",e.Delete="/flow/base/app/delete",e.CheckEntityExist="/flow/base/app/checkEntityExist",e.RefreshSecretKey="/flow/base/app/refreshSecretKey"})(s||(s={}));const o=e=>a.post({url:s.GetAll,params:e}).then(r=>(r.forEach(t=>{t.label=t.name,t.value=t.sn}),Promise.resolve(r))),n=e=>{const r=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let t=e||{};t&&(delete t.pageNum,delete t.pageSize);const l={query:r,entity:t};return a.post({url:s.PageList,params:l})},c=e=>a.post({url:s.SaveOrUpdate,params:e}),u=e=>a.post({url:s.RefreshSecretKey+"/"+e,params:{}}),f=e=>a.post({url:s.CheckEntityExist,params:e}),g=e=>a.post({url:s.Delete,params:e});export{o as a,f as c,g as d,n as g,u as r,c as s};