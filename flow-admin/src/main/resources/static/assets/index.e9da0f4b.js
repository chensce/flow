import{P as O}from"./index.37a89528.js";import{_ as W}from"./index.aeb7d9f7.js";import{A,a0 as M,bo as S,B as X,a1 as Y,a6 as D,F,H,ae as V}from"./vendor.5879c5ca.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.6345b5e8.js";const l={event:"mousedown",transition:400},x={beforeMount:(e,t)=>{if(t.value===!1)return;const o=e.getAttribute("ripple-background");z(Object.keys(t.modifiers),l);const i=o||x.background,r=x.zIndex;e.addEventListener(l.event,p=>{q({event:p,el:e,background:i,zIndex:r})})},updated(e,t){var i,r;if(!t.value){(i=e==null?void 0:e.clearRipple)==null||i.call(e);return}const o=e.getAttribute("ripple-background");(r=e==null?void 0:e.setBackground)==null||r.call(e,o)}};function q({event:e,el:t,zIndex:o,background:i}){var j,R;const r=parseInt(getComputedStyle(t).borderWidth.replace("px","")),p=e.clientX||e.touches[0].clientX,f=e.clientY||e.touches[0].clientY,g=t.getBoundingClientRect(),{left:C,top:E}=g,{offsetWidth:_,offsetHeight:b}=t,{transition:L}=l,u=p-C,m=f-E,y=Math.max(u,_-u),w=Math.max(m,b-m),B=window.getComputedStyle(t),h=Math.sqrt(y*y+w*w),$=r>0?r:0,a=document.createElement("div"),n=document.createElement("div");a.className="ripple",Object.assign((j=a.style)!=null?j:{},{marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${L}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:o!=null?o:"9999",backgroundColor:i!=null?i:"rgba(0, 0, 0, 0.12)"}),n.className="ripple-container",Object.assign((R=n.style)!=null?R:{},{position:"absolute",left:`${0-$}px`,top:`${0-$}px`,height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const v=t.style.position.length>0?t.style.position:getComputedStyle(t).position;v!=="relative"&&(t.style.position="relative"),n.appendChild(a),t.appendChild(n),Object.assign(a.style,{marginTop:`${m}px`,marginLeft:`${u}px`});const{borderTopLeftRadius:N,borderTopRightRadius:T,borderBottomLeftRadius:k,borderBottomRightRadius:P}=B;Object.assign(n.style,{width:`${_}px`,height:`${b}px`,direction:"ltr",borderTopLeftRadius:N,borderTopRightRadius:T,borderBottomLeftRadius:k,borderBottomRightRadius:P}),setTimeout(()=>{var d;const s=`${h*2}px`;Object.assign((d=a.style)!=null?d:{},{width:s,height:s,marginLeft:`${u-h}px`,marginTop:`${m-h}px`})},0);function c(){setTimeout(()=>{a.style.backgroundColor="rgba(0, 0, 0, 0)"},250),setTimeout(()=>{var s;(s=n==null?void 0:n.parentNode)==null||s.removeChild(n)},850),t.removeEventListener("mouseup",c,!1),t.removeEventListener("mouseleave",c,!1),t.removeEventListener("dragstart",c,!1),setTimeout(()=>{let s=!0;for(let d=0;d<t.childNodes.length;d++)t.childNodes[d].className==="ripple-container"&&(s=!1);s&&(t.style.position=v!=="static"?v:"")},l.transition+260)}e.type==="mousedown"?(t.addEventListener("mouseup",c,!1),t.addEventListener("mouseleave",c,!1),t.addEventListener("dragstart",c,!1)):c(),t.setBackground=s=>{!s||(a.style.backgroundColor=s)}}function z(e,t){e.forEach(o=>{isNaN(Number(o))?t.event=o:t.transition=o})}const I=A({components:{PageWrapper:O},directives:{Ripple:x}}),G={class:"demo-box"},J=V("content"),K=[J];function Q(e,t,o,i,r,p){const f=M("PageWrapper"),g=S("ripple");return X(),Y(f,{title:"Ripple\u793A\u4F8B"},{default:D(()=>[F(H("div",G,K,512),[[g]])]),_:1})}var nt=W(I,[["render",Q],["__scopeId","data-v-79d0a998"]]);export{nt as default};
