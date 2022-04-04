import{r as f,o as d,c as b,a as h,b as c,w as i,d as u,e as k,F as E,p as I,f as $,g as l,h as x,i as N,j as L}from"./vendor.1b5c9484.js";const P=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const t of r.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}};P();var p=(s,a)=>{const n=s.__vccOpts||s;for(const[o,e]of a)n[o]=e;return n};const V={};function w(s,a){const n=f("RouterView");return d(),b(n)}var O=p(V,[["render",w]]);const S="modulepreload",m={},A="/profiledelia/",_=function(a,n){return!n||n.length===0?a():Promise.all(n.map(o=>{if(o=`${A}${o}`,o in m)return;m[o]=!0;const e=o.endsWith(".css"),r=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":S,e||(t.as="script",t.crossOrigin=""),t.href=o,document.head.appendChild(t),e)return new Promise((y,g)=>{t.addEventListener("load",y),t.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>a())};const B={name:"NavBar"},R={class:"navbar navbar-expand-lg bg-transparent justify-content-center"},C=u("Home"),T=u("About"),D=u("Portfolio"),H=u("Contact");function F(s,a,n,o,e,r){const t=f("router-link");return d(),h("nav",R,[c(t,{class:"y nav-link",to:"/"},{default:i(()=>[C]),_:1}),c(t,{class:"y nav-link",to:"/about"},{default:i(()=>[T]),_:1}),c(t,{class:"y nav-link",to:"/portfolio"},{default:i(()=>[D]),_:1}),c(t,{class:"y nav-link",to:"/contact"},{default:i(()=>[H]),_:1})])}var W=p(B,[["render",F],["__scopeId","data-v-e1c49834"]]);const j=s=>(I("data-v-ba43625e"),s=s(),$(),s),q=j(()=>l("div",{class:"y"},[l("h3",{class:"m"},"Assalamu'alaikum"),l("h1",{class:"h"},"I'm Delia Putri"),l("h2",{class:"m"},"I\u2019am a Collage Student & Web Designer soon xixi")],-1)),z={setup(s){return k(()=>{document.getElementsByTagName("body")[0].style.backgroundImage="url('src/assets/home.svg')",document.getElementsByTagName("body")[0].style.backgroundSize="cover"}),(a,n)=>(d(),h(E,null,[c(W),q],64))}};var K=p(z,[["__scopeId","data-v-ba43625e"]]);const M=x({history:N("/profiledelia/"),routes:[{path:"/",name:"home",component:K},{path:"/about",name:"about",component:()=>_(()=>import("./AboutView.f4f118b6.js"),["assets/AboutView.f4f118b6.js","assets/AboutView.7c901c9f.css","assets/vendor.1b5c9484.js"])},{path:"/portfolio",name:"portfolio",component:()=>_(()=>import("./portfolioView.ec8f13b3.js"),["assets/portfolioView.ec8f13b3.js","assets/portfolioView.7d00a08f.css","assets/vendor.1b5c9484.js"])},{path:"/contact",name:"contact",component:()=>_(()=>import("./contactView.9f5241c3.js"),["assets/contactView.9f5241c3.js","assets/contactView.c2619094.css","assets/vendor.1b5c9484.js"])},{path:"/blog",name:"blog",component:()=>_(()=>import("./blogView.dc98a054.js"),["assets/blogView.dc98a054.js","assets/blogView.13bd9b9e.css","assets/vendor.1b5c9484.js"])}]});const v=L(O);v.use(M);v.mount("#app");export{W as N,p as _};
