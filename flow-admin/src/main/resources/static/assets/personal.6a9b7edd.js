import{ax as l}from"./index.aeb7d9f7.js";var o;(function(e){e.PersonalPageList="/flow/org/personal/getPagerModel",e.PersonalPageListShowRows="/flow/org/personal/getPagerModelShowRoles",e.AllocationRoles="/flow/org/personalRole/allocationRoles",e.SaveOrUpdate="/flow/org/personal/saveOrUpdate",e.Delete="/flow/org/personal/delete",e.SetLeaderCode="/flow/org/personal/setLeaderCode",e.CheckEntityExist="/flow/org/personal/checkEntityExist",e.DeletePersonalRole="/flow/org/personalRole/deletePersonalRole"})(o||(o={}));const g=e=>{const a=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let s=e||{};const t=e.showRoles;s&&(delete s.pageNum,delete s.pageSize,delete s.showRoles);const r=t?o.PersonalPageListShowRows+`?showRoles=${t}`:o.PersonalPageList,n={query:a,entity:s};return l.post({url:r,params:n})},c=e=>l.post({url:o.SaveOrUpdate,params:e}),i=e=>l.post({url:o.AllocationRoles+"/"+e.personalId,params:e.roles}),p=e=>l.post({url:o.Delete,params:e}),w=e=>l.post({url:o.DeletePersonalRole,params:e}),P=e=>l.post({url:o.SetLeaderCode+`/${e.leaderCode}/${e.id}`}),R=e=>l.post({url:o.CheckEntityExist,params:e});export{i as a,w as b,R as c,p as d,c as e,g,P as s};
