import{V,a as D,H as $,am as b,K as E,h as o,w as B,a9 as H,al as K,p,_ as f,U as S,F as L,a8 as M,T as R}from"./index.97f55544.js";import{u as U}from"./useFlexGapSupport.a588479c.js";var W={small:8,middle:16,large:24},k=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:$.oneOf(b("horizontal","vertical")).def("horizontal"),align:$.oneOf(b("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function q(n){return typeof n=="string"?W[n]:n||0}var J=D({compatConfig:{MODE:3},name:"ASpace",props:k(),slots:["split"],setup:function(t,F){var c=F.slots,d=E("space",t),l=d.prefixCls,G=d.space,z=d.direction,_=U(),i=o(function(){var a,e,r;return(a=(e=t.size)!==null&&e!==void 0?e:(r=G.value)===null||r===void 0?void 0:r.size)!==null&&a!==void 0?a:"small"}),m=B(),s=B();H(i,function(){var a=(Array.isArray(i.value)?i.value:[i.value,i.value]).map(function(r){return q(r)}),e=M(a,2);m.value=e[0],s.value=e[1]},{immediate:!0});var x=o(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),I=o(function(){var a;return R(l.value,"".concat(l.value,"-").concat(t.direction),(a={},S(a,"".concat(l.value,"-rtl"),z.value==="rtl"),S(a,"".concat(l.value,"-align-").concat(x.value),x.value),a))}),P=o(function(){return z.value==="rtl"?"marginLeft":"marginRight"}),j=o(function(){var a={};return _.value&&(a.columnGap="".concat(m.value,"px"),a.rowGap="".concat(s.value,"px")),f(f({},a),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-s.value,"px")})});return function(){var a,e,r=t.wrap,h=t.direction,O=h===void 0?"horizontal":h,w=K((a=c.default)===null||a===void 0?void 0:a.call(c)),C=w.length;if(C===0)return null;var u=(e=c.split)===null||e===void 0?void 0:e.call(c),A="".concat(l.value,"-item"),N=m.value,g=C-1;return p("div",{class:I.value,style:j.value},[w.map(function(T,y){var v={};return _.value||(O==="vertical"?y<g&&(v={marginBottom:"".concat(N/(u?2:1),"px")}):v=f(f({},y<g&&S({},P.value,"".concat(N/(u?2:1),"px"))),r&&{paddingBottom:"".concat(s.value,"px")})),p(L,null,[p("div",{class:A,style:v},[T]),y<g&&u&&p("span",{class:"".concat(A,"-split"),style:v},[u])])})])}}}),Y=V(J);export{Y as S};