import{e as _,J as c,o as a,E as u,F as e,M as m,N as o,L as s,I as x,O as N,r as f}from"./entry.bdb45715.js";import D from"./ContentDoc.eac9264d.js";import y from"./ContentRenderer.ba78f7cd.js";import"./composables.3e5028d5.js";import"./ContentQuery.9de9e460.js";import"./asyncData.4d5fa1cf.js";import"./utils.d0fd233a.js";import"./ContentRendererMarkdown.af1a1db5.js";import"./_commonjsHelpers.fed2a411.js";const P=_({name:"Post",props:{post:{type:Object,default:()=>{}}}});const C={class:"post"},F={class:"post__header"},B=["datetime"];function b(t,i,p,r,d,l){const n=y;return a(),u("article",C,[e("header",F,[e("h1",null,m(t.post.title),1),e("time",{datetime:t.post.date,class:"post__date"},m(t.post.date),9,B)]),o(n,{value:t.post,class:"post__content"},null,8,["value"])])}const k=c(P,[["render",b]]),E=_({name:"NotFound"}),L=""+globalThis.__publicAssetsURL("vincent.gif");const V={class:"not-found"},O=e("img",{class:"not-found__image",src:L,alt:"\u041E\u0437\u0430\u0434\u0430\u0447\u0435\u043D\u043D\u044B\u0439 \u0412\u0438\u043D\u0441\u0435\u043D\u0442"},null,-1),R=[O];function T(t,i,p,r,d,l){return a(),u("div",V,R)}const j=c(E,[["render",T]]),w=_({name:"PostPage",components:{Post:k,NotFound:j}}),A={class:"container container--small"};function I(t,i,p,r,d,l){const n=x,$=f("Post"),h=f("NotFound"),v=D;return a(),u("section",null,[e("div",A,[o(n,{to:"/"},{default:s(()=>[N(" \u041D\u0430\u0437\u0430\u0434 ")]),_:1}),o(v,null,{default:s(({doc:g})=>[o($,{post:g},null,8,["post"])]),"not-found":s(()=>[o(h)]),_:1})])])}const Q=c(w,[["render",I]]);export{Q as default};