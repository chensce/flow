import{cd as o,ay as d,bw as a}from"./index.97f55544.js";function m(r,s=150,n){let e=()=>{r()};e=a(e,s);const t=()=>{n&&n.immediate&&e(),window.addEventListener("resize",e)},i=()=>{window.removeEventListener("resize",e)};return o(()=>{t()}),d(()=>{i()}),[t,i]}export{m as u};