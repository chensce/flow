import{ax as a,bc as l,aV as c}from"./index.aeb7d9f7.js";var t;(function(e){e.GetJobGrades="/flow/org/jobGrade/getJobGrades",e.GetJobGradeTree="/flow/org/jobGrade/getJobGradeTree",e.SaveOrUpdate="/flow/org/jobGrade/saveOrUpdate",e.BatchSaveJobGradeTypeAndJobGrade="/flow/org/jobGrade/batchSaveJobGradeTypeAndJobGrade",e.Delete="/flow/org/jobGrade/delete",e.CheckEntityExist="/flow/org/jobGrade/checkEntityExist"})(t||(t={}));const b=e=>{const o=a.post({url:t.GetJobGradeTree,params:e});return Promise.resolve(o).then(d=>{const s=l(d,{id:"id",children:"children",pid:"pid"});return c(s,r=>{r.showName=`${r.name} (${r.code})`,r.sourceType==="1"&&(r.selectable=!1,r.disabled=!0),r.children.length===0&&delete r.children},{id:"id",children:"children",pid:"pid"}),s})},n=e=>a.post({url:t.GetJobGrades,params:e}),G=e=>a.post({url:t.SaveOrUpdate,params:e}),h=e=>a.post({url:t.CheckEntityExist,params:e}),p=e=>a.post({url:t.Delete,params:e});export{b as a,h as c,p as d,n as g,G as s};
