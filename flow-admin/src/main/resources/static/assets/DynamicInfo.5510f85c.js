import{a as u,b9 as f,az as I,aB as e,i as L,l as C,C as t,q as o,D as n,t as i,p as h,aC as M}from"./index.ef013507.js";import{C as y}from"./index.0a407472.js";import"./index.09ae92e2.js";/* empty css               */import{L as s}from"./index.14709bfa.js";import{d as B}from"./data.8ddc77c3.js";import{h as $}from"./header.d801b988.js";import"./index.c6737256.js";import"./index.4e2ec58e.js";import"./Col.55ed0272.js";import"./useFlexGapSupport.e51c8524.js";import"./useRefs.5ed2b70f.js";import"./PlusOutlined.95fc7300.js";import"./eagerComputed.487f958f.js";const v=u({components:{Card:y,List:s,ListItem:s.Item,ListItemMeta:s.Item.Meta,Icon:f},setup(){return{items:B,headerImg:$}}}),x=["innerHTML"];function z(r,b,g,k,D,N){const m=e("a-button"),c=e("Icon"),p=e("ListItemMeta"),_=e("ListItem"),d=e("List"),l=e("Card");return L(),C(l,M({title:"\u6700\u65B0\u52A8\u6001"},r.$attrs),{extra:t(()=>[o(m,{type:"link",size:"small"},{default:t(()=>[n("\u66F4\u591A")]),_:1})]),default:t(()=>[o(d,{"item-layout":"horizontal","data-source":r.items},{renderItem:t(({item:a})=>[o(_,null,{default:t(()=>[o(p,null,{description:t(()=>[n(i(a.date),1)]),title:t(()=>[n(i(a.name)+" ",1),h("span",{innerHTML:a.desc},null,8,x)]),avatar:t(()=>[o(c,{icon:a.avatar,size:30},null,8,["icon"])]),_:2},1024)]),_:2},1024)]),_:1},8,["data-source"])]),_:1},16)}var O=I(v,[["render",z]]);export{O as default};