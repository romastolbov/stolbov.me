import{J as n,e as c,o as a,E as _,F as o,N as s,O as f,r as u,U as $}from"./entry.b1262bd3.js";import{A as m}from"./constants.add2c060.js";import{u as x}from"./composables.cb63c7ea.js";const N=c({name:"SimpleIconsNuxtdotjs"}),g={xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24"},v=o("path",{fill:"currentColor",d:"M13.464 19.83h8.922c.283 0 .562-.073.807-.21a1.59 1.59 0 0 0 .591-.574a1.53 1.53 0 0 0 .216-.783a1.529 1.529 0 0 0-.217-.782L17.792 7.414a1.59 1.59 0 0 0-.591-.573a1.652 1.652 0 0 0-.807-.21c-.283 0-.562.073-.807.21a1.59 1.59 0 0 0-.59.573L13.463 9.99L10.47 4.953a1.591 1.591 0 0 0-.591-.573a1.653 1.653 0 0 0-.807-.21c-.284 0-.562.073-.807.21a1.591 1.591 0 0 0-.591.573L.216 17.481a1.53 1.53 0 0 0-.217.782c0 .275.074.545.216.783a1.59 1.59 0 0 0 .59.574c.246.137.525.21.808.21h5.6c2.22 0 3.856-.946 4.982-2.79l2.733-4.593l1.464-2.457l4.395 7.382h-5.859Zm-6.341-2.46l-3.908-.002l5.858-9.842l2.923 4.921l-1.957 3.29c-.748 1.196-1.597 1.632-2.916 1.632z"},null,-1),w=[v];function T(e,r,i,p,l,d){return a(),_("svg",g,w)}const y=n(N,[["render",T]]),C=c({name:"TheFooter",components:{SimpleIconsNuxtdotjs:y}});const B={class:"footer"},F={class:"container"},L={class:"footer__inner"},S=o("a",{href:"https://creativecommons.org/licenses/by-nc-sa/4.0/",target:"_blank",class:"footer__copyright"}," CC BY-NC-SA 4.0 ",-1),b={href:"https://nuxt.com/",target:"_blank",class:"footer__powered"};function j(e,r,i,p,l,d){const t=u("SimpleIconsNuxtdotjs");return a(),_("footer",B,[o("div",F,[o("div",L,[S,o("a",b,[s(t),f(" Powered by Nuxt ")])])])])}const k=n(C,[["render",j]]),I=c({name:"DefaultLayout",components:{TheFooter:k},setup(){x({titleTemplate:e=>e?`${e} \u2014 ${m}`:m})}});function A(e,r,i,p,l,d){const t=$,h=u("TheFooter");return a(),_("main",null,[s(t),s(h)])}const O=n(I,[["render",A]]);export{O as default};