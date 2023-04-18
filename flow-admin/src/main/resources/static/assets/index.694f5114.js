var Pe=Object.defineProperty,Ue=Object.defineProperties;var $e=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var je=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var ce=(e,t,a)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))je.call(t,a)&&ce(e,a,t[a]);if(se)for(var a of se(t))me.call(t,a)&&ce(e,a,t[a]);return e},ie=(e,t)=>Ue(e,$e(t));var de=(e,t,a)=>new Promise((y,E)=>{var K=k=>{try{p(a.next(k))}catch(v){E(v)}},r=k=>{try{p(a.throw(k))}catch(v){E(v)}},p=k=>k.done?y(k.value):Promise.resolve(k.value).then(K,r);p((a=a.apply(e,t)).next())});import{eT as He,eU as Ve,eV as Re,eW as Ye,eX as Xe,eY as ze,ek as We,eq as oe,eZ as qe,e_ as Ge,e$ as Je,f0 as Ze,a as be,w as Ae,f1 as Qe,e as et,h as I,a9 as U,o as M,i as j,j as c,aF as tt,l as P,k as G,B as m,C as ue,t as he,dS as nt,r as fe,p as L,f2 as at,ba as lt,F as Z,aE as rt,ch as st,aG as ct,aH as it,f3 as dt,b9 as Q,bo as ot,cI as ut,bw as ht,f4 as ft,bU as yt,aj as ee,f5 as ye,x as pe,ao as X,dv as pt,ar as gt,aA as J,f6 as kt,ey as St,M as H,O as Kt,f7 as xt,dP as Ct,b4 as bt,y as ge,z as ke,bH as At,aC as Lt,eh as Se,cF as vt,dN as Et,bt as Ke,cD as _t}from"./index.7ea10544.js";import{f as Tt}from"./fromPairs.daf93cb7.js";import{b as Bt}from"./index.60e2cd93.js";import{u as wt}from"./useContextMenu.936ed174.js";import{g as Ft}from"./get.4066932b.js";var Dt=200;function Nt(e,t,a,y){var E=-1,K=Ye,r=!0,p=e.length,k=[],v=t.length;if(!p)return k;a&&(t=He(t,Ve(a))),y?(K=Xe,r=!1):t.length>=Dt&&(K=ze,r=!1,t=new Re(t));e:for(;++E<p;){var S=e[E],d=a==null?S:a(S);if(S=y||S!==0?S:0,r&&d===d){for(var n=v;n--;)if(t[n]===d)continue e;k.push(S)}else K(t,d,y)||k.push(S)}return k}var Mt=We(function(e,t){return oe(e)?Nt(e,qe(t,1,oe,!0)):[]}),It=Mt;function te(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((a,y)=>a+te(e,y),""):Object.keys(t).reduce((a,y)=>a+(t[y]?te(e,y):""),""):""}function Ot(e){return(t,a)=>(t&&typeof t!="string"&&(a=t,t=""),t=t?`${e}__${t}`:e,`${t}${te(t,a)}`)}function Le(e){return[Ot(`${Ge}-${e}`)]}const xe=Symbol(),Ce=Symbol();function Pt(e,t){if(!Je(e)||!!e[Ce])return e;const{values:a,required:y,default:E,type:K,validator:r}=e,p=a||r?k=>{let v=!1,S=[];if(a&&(S=[...a,E],v||(v=S.includes(k))),r&&(v||(v=r(k))),!v&&S.length>0){const d=[...new Set(S)].map(n=>JSON.stringify(n)).join(", ");Ze(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${d}], got value ${JSON.stringify(k)}.`)}return v}:void 0;return{type:typeof K=="object"&&Object.getOwnPropertySymbols(K).includes(xe)?K[xe]:K,required:!!y,default:E,validator:p,[Ce]:!0}}const Ut=e=>Tt(Object.entries(e).map(([t,a])=>[t,Pt(a,t)]));var T=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(T||{});const $t=["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],jt=Ut({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1},treeWrapperClassName:String}),mt={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch"},Ht=be({__name:"TreeHeader",props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search"],setup(e,{emit:t}){const a=e,y=Ae(""),[E]=Le("tree-header"),K=Qe(),{t:r}=et(),p=I(()=>{const n=K.headerTitle||a.title;return["mr-1","w-full",{["ml-5"]:n}]}),k=I(()=>{const{checkable:n}=a,s=[{label:r("component.tree.expandAll"),value:T.EXPAND_ALL},{label:r("component.tree.unExpandAll"),value:T.UN_EXPAND_ALL,divider:n}];return n?[{label:r("component.tree.selectAll"),value:T.SELECT_ALL},{label:r("component.tree.unSelectAll"),value:T.UN_SELECT_ALL,divider:n},...s,{label:r("component.tree.checkStrictly"),value:T.CHECK_STRICTLY},{label:r("component.tree.checkUnStrictly"),value:T.CHECK_UN_STRICTLY}]:s});function v(n){var i,o,h,u;const{key:s}=n;switch(s){case T.SELECT_ALL:(i=a.checkAll)==null||i.call(a,!0);break;case T.UN_SELECT_ALL:(o=a.checkAll)==null||o.call(a,!1);break;case T.EXPAND_ALL:(h=a.expandAll)==null||h.call(a,!0);break;case T.UN_EXPAND_ALL:(u=a.expandAll)==null||u.call(a,!1);break;case T.CHECK_STRICTLY:t("strictly-change",!1);break;case T.CHECK_UN_STRICTLY:t("strictly-change",!0);break}}function S(n){t("search",n)}const d=ht(S,200);return U(()=>y.value,n=>{d(n)}),U(()=>a.searchText,n=>{n!==y.value&&(y.value=n)}),(n,s)=>(M(),j("div",{class:fe([c(E)(),"flex px-2 py-1.5 items-center"])},[c(K).headerTitle?tt(n.$slots,"headerTitle",{key:0}):P("",!0),!c(K).headerTitle&&n.title?(M(),G(c(nt),{key:1,helpMessage:n.helpMessage},{default:m(()=>[ue(he(n.title),1)]),_:1},8,["helpMessage"])):P("",!0),n.search||n.toolbar?(M(),j("div",mt,[n.search?(M(),j("div",{key:0,class:fe(c(p))},[L(c(at),{placeholder:c(r)("common.searchText"),size:"small",allowClear:"",value:y.value,"onUpdate:value":s[0]||(s[0]=i=>y.value=i)},null,8,["placeholder","value"])],2)):P("",!0),n.toolbar?(M(),G(c(ut),{key:1,onClick:s[1]||(s[1]=ot(()=>{},["prevent"]))},{overlay:m(()=>[L(c(lt),{onClick:v},{default:m(()=>[(M(!0),j(Z,null,rt(c(k),i=>(M(),j(Z,{key:i.value},[L(c(st),ct(it({key:i.value})),{default:m(()=>[ue(he(i.label),1)]),_:2},1040),i.divider?(M(),G(c(dt),{key:0})):P("",!0)],64))),128))]),_:1})]),default:m(()=>[L(c(Q),{icon:"ion:ellipsis-vertical"})]),_:1})):P("",!0)])):P("",!0)],2))}}),Vt=({icon:e})=>e?ft(e)?yt(Q,{icon:e,class:"mr-1"}):Q:null;function Rt(e,t){function a(d){const n=[],s=d||c(e),{key:i,children:o}=c(t);if(!o||!i)return n;for(let h=0;h<s.length;h++){const u=s[h];n.push(u[i]);const g=u[o];g&&g.length&&n.push(...a(g))}return n}function y(d){const n=[],s=d||c(e),{key:i,children:o}=c(t);if(!o||!i)return n;for(let h=0;h<s.length;h++){const u=s[h];u.disabled!==!0&&u.selectable!==!1&&n.push(u[i]);const g=u[o];g&&g.length&&n.push(...y(g))}return n}function E(d,n){const s=[],i=n||c(e),{key:o,children:h}=c(t);if(!h||!o)return s;for(let u=0;u<i.length;u++){const g=i[u],_=g[h];d===g[o]?(s.push(g[o]),_&&_.length&&s.push(...a(_))):_&&_.length&&s.push(...E(d,_))}return s}function K(d,n,s){if(!d)return;const i=s||c(e),{key:o,children:h}=c(t);if(!(!h||!o))for(let u=0;u<i.length;u++){const g=i[u],_=g[h];if(g[o]===d){i[u]=O(O({},i[u]),n);break}else _&&_.length&&K(d,n,g[h])}}function r(d=1,n,s=1){if(!d)return[];const i=[],o=n||c(e)||[];for(let h=0;h<o.length;h++){const u=o[h],{key:g,children:_}=c(t),z=g?u[g]:"",$=_?u[_]:[];i.push(z),$&&$.length&&s<d&&(s+=1,i.push(...r(d,$,s)))}return i}function p({parentKey:d=null,node:n,push:s="push"}){const i=ee(c(e));if(!d){i[s](n),e.value=i;return}const{key:o,children:h}=c(t);!h||!o||(ye(i,u=>{if(u[o]===d)return u[h]=u[h]||[],u[h][s](n),!0}),e.value=i)}function k({parentKey:d=null,list:n,push:s="push"}){const i=ee(c(e));if(!(!n||n.length<1))if(d){const{key:o,children:h}=c(t);if(!h||!o)return;ye(i,u=>{if(u[o]===d){u[h]=u[h]||[];for(let g=0;g<n.length;g++)u[h][s](n[g]);return e.value=i,!0}})}else for(let o=0;o<n.length;o++)i[s](n[o])}function v(d,n){if(!d)return;const s=n||c(e),{key:i,children:o}=c(t);if(!(!o||!i))for(let h=0;h<s.length;h++){const u=s[h],g=u[o];if(u[i]===d){s.splice(h,1);break}else g&&g.length&&v(d,u[o])}}function S(d,n,s){return!d&&d!==0?null:((n||c(e)).forEach(o=>{if((s==null?void 0:s.key)||(s==null?void 0:s.key)===0)return s;if(o.key===d){s=o;return}o.children&&o.children.length&&(s=S(d,o.children,s))}),s||null)}return{deleteNodeByKey:v,insertNodeByKey:p,insertNodesByKey:k,filterByLevel:r,updateNodeByKey:K,getAllKeys:a,getChildrenKeys:E,getEnabledKeys:y,getSelectedNode:S}}function Yt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!vt(e)}var Zt=be({name:"BasicTree",inheritAttrs:!1,props:jt,emits:$t,setup(e,{attrs:t,slots:a,emit:y,expose:E}){const[K]=Le("tree"),r=pe({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),p=pe({startSearch:!1,searchText:"",searchData:[]}),k=Ae([]),[v]=wt(),S=I(()=>{const{fieldNames:l}=e;return O({children:"children",title:"title",key:"key"},l)}),d=I(()=>{let l=ie(O(O({blockNode:!0},t),e),{expandedKeys:r.expandedKeys,selectedKeys:r.selectedKeys,checkedKeys:r.checkedKeys,checkStrictly:r.checkStrictly,fieldNames:c(S),"onUpdate:expandedKeys":f=>{r.expandedKeys=f,y("update:expandedKeys",f)},"onUpdate:selectedKeys":f=>{r.selectedKeys=f,y("update:selectedKeys",f)},onCheck:(f,b)=>{let x=X(r.checkedKeys);if(pt(x)&&p.startSearch){const A=b.node.eventKey;x=It(x,z(A)),b.checked&&x.push(A),r.checkedKeys=x}else r.checkedKeys=f;const C=X(r.checkedKeys);y("update:value",C),y("check",C,b)},onRightClick:_e});return gt(l,"treeData","class")}),n=I(()=>p.startSearch?p.searchData:c(k)),s=I(()=>!n.value||n.value.length===0),{deleteNodeByKey:i,insertNodeByKey:o,insertNodesByKey:h,filterByLevel:u,updateNodeByKey:g,getAllKeys:_,getChildrenKeys:z,getEnabledKeys:$,getSelectedNode:ve}=Rt(k,S);function Ee(l,f){return!f&&e.renderIcon&&J(e.renderIcon)?e.renderIcon(l):f}function _e(b){return de(this,arguments,function*({event:l,node:f}){var F;const{rightMenuList:x=[],beforeRightClick:C}=e;let A={event:l,items:[]};if(C&&J(C)){let B=yield C(f,l);Array.isArray(B)?A.items=B:Object.assign(A,B)}else A.items=x;!((F=A.items)!=null&&F.length)||(A.items=A.items.filter(B=>!B.hidden),v(A))})}function V(l){r.expandedKeys=l}function Te(){return r.expandedKeys}function ne(l){r.selectedKeys=l}function Be(){return r.selectedKeys}function ae(l){r.checkedKeys=l}function we(){return r.checkedKeys}function le(l){r.checkedKeys=l?$():[]}function W(l){r.expandedKeys=l?_():[]}function Fe(l){r.checkStrictly=l}U(()=>e.searchValue,l=>{l!==p.searchText&&(p.searchText=l)},{immediate:!0}),U(()=>e.treeData,l=>{l&&q(p.searchText)});function q(l){if(l!==p.searchText&&(p.searchText=l),y("update:searchValue",l),!l){p.startSearch=!1;return}const{filterFn:f,checkable:b,expandOnSearch:x,checkOnSearch:C,selectedOnSearch:A}=c(e);p.startSearch=!0;const{title:F,key:B}=c(S),D=[];if(p.searchData=kt(c(k),w=>{var R,Y;const N=f?f(l,w,c(S)):(Y=(R=w[F])==null?void 0:R.includes(l))!=null?Y:!1;return N&&D.push(w[B]),N},c(S)),x){const w=St(p.searchData).map(N=>N[B]);w&&w.length&&V(w)}C&&b&&D.length&&ae(D),A&&D.length&&ne(D)}function De(l,f){if(!(!e.clickRowToExpand||!f||f.length===0))if(!r.expandedKeys.includes(l))V([...r.expandedKeys,l]);else{const b=[...r.expandedKeys],x=b.findIndex(C=>C===l);x!==-1&&b.splice(x,1),V(b)}}H(()=>{k.value=e.treeData}),Kt(()=>{const l=parseInt(e.defaultExpandLevel);l>0?r.expandedKeys=u(l):e.defaultExpandAll&&W(!0)}),H(()=>{r.expandedKeys=e.expandedKeys}),H(()=>{r.selectedKeys=e.selectedKeys}),H(()=>{r.checkedKeys=e.checkedKeys}),U(()=>e.value,()=>{r.checkedKeys=X(e.value||[])},{immediate:!0}),U(()=>r.checkedKeys,()=>{const l=X(r.checkedKeys);y("update:value",l),y("change",l)}),H(()=>{r.checkStrictly=e.checkStrictly});const Ne={setExpandedKeys:V,getExpandedKeys:Te,setSelectedKeys:ne,getSelectedKeys:Be,setCheckedKeys:ae,getCheckedKeys:we,insertNodeByKey:o,insertNodesByKey:h,deleteNodeByKey:i,updateNodeByKey:g,getSelectedNode:ve,checkAll:le,expandAll:W,filterByLevel:l=>{r.expandedKeys=u(l)},setSearchValue:l=>{q(l)},getSearchValue:()=>p.searchText};function Me(l){const{actionList:f}=e;if(!(!f||f.length===0))return f.map((b,x)=>{var A;let C=!0;return J(b.show)?C=(A=b.show)==null?void 0:A.call(b,l):Ke(b.show)&&(C=b.show),C?L("span",{key:x,class:K("action")},[b.render(l)]):null})}const Ie=I(()=>{const l=ee(n.value);return xt(l,(f,b)=>{var re;const x=p.searchText,{highlight:C}=c(e),{title:A,key:F,children:B}=c(S),D=Ee(f,f.icon),w=Ft(f,A),N=x?w.indexOf(x):-1,R=p.startSearch&&!Et(x)&&C&&N!==-1,Y=`color: ${Ke(C)?"#f50":C}`,Oe=R?L("span",{class:(re=c(d))!=null&&re.blockNode?`${K("content")}`:""},[L("span",null,[w.substr(0,N)]),L("span",{style:Y},[x]),L("span",null,[w.substr(N+x.length)])]):w;return f[A]=L("span",{class:`${K("title")} pl-2`,onClick:De.bind(null,f[F],f[B])},[a!=null&&a.title?_t(a,"title",f):L(Z,null,[D&&L(Vt,{icon:D},null),Oe,L("span",{class:K("actions")},[Me(f)])])]),f}),l});return E(Ne),()=>{let l;const{title:f,helpMessage:b,toolbar:x,search:C,checkable:A}=e,F=f||x||C||a.headerTitle,B={height:"calc(100% - 38px)"};return L("div",{class:[K(),"h-full",t.class]},[F&&L(Ht,{checkable:A,checkAll:le,expandAll:W,title:f,search:C,toolbar:x,helpMessage:b,onStrictlyChange:Fe,onSearch:q,searchText:p.searchText},Yt(l=Ct(a))?l:{default:()=>[l]}),L(bt,{wrapperClassName:c(e.treeWrapperClassName),spinning:c(e.loading),tip:"\u52A0\u8F7D\u4E2D..."},{default:()=>[ge(L(At,{style:B},{default:()=>[L(Bt,Lt(c(d),{showIcon:!1,treeData:Ie.value}),null)]}),[[ke,!c(s)]]),ge(L(Se,{image:Se.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[ke,c(s)]])]})])}}});export{Zt as _};