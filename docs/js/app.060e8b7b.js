(function(){"use strict";var e={4173:function(e,n,o){var t=o(9242),r=o(3396);function a(e,n,o,t,a,i){const u=(0,r.up)("NavBar"),l=(0,r.up)("router-view"),c=(0,r.up)("FooterBar");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u,{logo:a.logo_src,alt:a.app_name},null,8,["logo","alt"]),(0,r.Wm)(l),(0,r.Wm)(c)],64)}const i=e=>((0,r.dD)("data-v-7e29c020"),e=e(),(0,r.Cn)(),e),u=i((()=>(0,r._)("p",null,"Burger Maker © 2023",-1))),l=[u];function c(e,n,o,t,a,i){return(0,r.wg)(),(0,r.iD)("footer",null,l)}var s={name:"FooterBar"},d=o(89);const p=(0,d.Z)(s,[["render",c],["__scopeId","data-v-7e29c020"]]);var m=p;const f=["src","alt"];function h(e,n,o,t,a,i){const u=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",null,[(0,r.Wm)(u,{id:"logo-router",to:"/"},{default:(0,r.w5)((()=>[(0,r._)("img",{src:o.logo,alt:o.alt,id:"logo"},null,8,f)])),_:1}),(0,r.Wm)(u,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("Home")])),_:1}),(0,r.Wm)(u,{to:"/pedidos"},{default:(0,r.w5)((()=>[(0,r.Uk)("Pedidos")])),_:1}),(0,r.Wm)(u,{to:"/contato"},{default:(0,r.w5)((()=>[(0,r.Uk)("Contato")])),_:1})])}var g={name:"NavBar",props:["logo","alt"]};const v=(0,d.Z)(g,[["render",h],["__scopeId","data-v-16940e6a"]]);var b=v,_={name:"App",components:{NavBar:b,FooterBar:m},data(){return{logo_src:"/img/logo.png",app_name:"Burger Maker"}}};const y=(0,d.Z)(_,[["render",a]]);var w=y,k=o(2483);const C=(0,r._)("h1",null,"Crie o seu hamburguer",-1);function D(e,n,o,t,a,i){const u=(0,r.up)("BannerHome"),l=(0,r.up)("BurgerForm");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(u),(0,r._)("main",null,[C,(0,r.Wm)(l)])],64)}const O=e=>((0,r.dD)("data-v-ca0ae04c"),e=e(),(0,r.Cn)(),e),S={id:"banner"},B=O((()=>(0,r._)("h1",null,"burger maker",-1))),j=[B];function H(e,n,o,t,a,i){return(0,r.wg)(),(0,r.iD)("div",S,j)}var N={name:"BannerHome"};const E=(0,d.Z)(N,[["render",H],["__scopeId","data-v-ca0ae04c"]]);var P=E,T=o(7139);const x=e=>((0,r.dD)("data-v-2e148b65"),e=e(),(0,r.Cn)(),e),F={class:"input-container"},U=x((()=>(0,r._)("label",{for:"nome"},"Nome do cliente:",-1))),A={class:"input-container"},M=x((()=>(0,r._)("label",{for:"pao"},"Escolha o pão:",-1))),W=x((()=>(0,r._)("option",{disabled:"",value:null},"Selecione o seu pão...",-1))),Z=["value"],I={class:"input-container"},V=x((()=>(0,r._)("label",{for:"carne"},"Escolha a carne:",-1))),Y=x((()=>(0,r._)("option",{disabled:"",value:null},"Selecione o tipo da carne...",-1))),z=["value"],L={id:"opcionais-container",class:"input-container"},K=x((()=>(0,r._)("label",{id:"opcionais-title",for:"opcionais"},"Seleção de opcionais:",-1))),q=["value"],J=["onUpdate:modelValue"],$={id:"opcionais-container",class:"input-container"},G=x((()=>(0,r._)("label",{id:"opcionais-title",for:"molhos"},"Seleção de molhos:",-1))),Q=["value"],R=["onUpdate:modelValue"],X=x((()=>(0,r._)("div",{class:"input-container"},[(0,r._)("input",{type:"submit",class:"submit-btn",value:"Criar Hamburguer"})],-1)));function ee(e,n,o,a,i,u){const l=(0,r.up)("CriarMsg");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("section",null,[(0,r._)("form",{id:"burger-form",onSubmit:n[3]||(n[3]=(...e)=>u.criarHamburguer&&u.criarHamburguer(...e))},[(0,r._)("div",F,[U,(0,r.wy)((0,r._)("input",{type:"text",id:"nome",name:"nome","onUpdate:modelValue":n[0]||(n[0]=e=>i.nome=e),placeholder:"Digite o seu nome..."},null,512),[[t.nr,i.nome]])]),(0,r._)("div",A,[M,(0,r.wy)((0,r._)("select",{name:"pao",id:"pao","onUpdate:modelValue":n[1]||(n[1]=e=>i.pao=e)},[W,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.paes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.tipo},(0,T.zw)(e.tipo),9,Z)))),128))],512),[[t.bM,i.pao]])]),(0,r._)("div",I,[V,(0,r.wy)((0,r._)("select",{name:"carne",id:"carne","onUpdate:modelValue":n[2]||(n[2]=e=>i.carne=e),required:""},[Y,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.carnes,(e=>((0,r.wg)(),(0,r.iD)("option",{key:e.id,value:e.tipo},(0,T.zw)(e.tipo),9,z)))),128))],512),[[t.bM,i.carne]])]),(0,r._)("div",L,[K,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.opcionaisdata,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"checkbox-container",key:e.id,value:e.tipo},[(0,r.wy)((0,r._)("input",{type:"checkbox",name:"opcionais","onUpdate:modelValue":n=>i.opcionais[e.tipo]=n},null,8,J),[[t.e8,i.opcionais[e.tipo]]]),(0,r._)("span",null,(0,T.zw)(e.tipo),1)],8,q)))),128))]),(0,r._)("div",$,[G,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.molhosdata,(e=>((0,r.wg)(),(0,r.iD)("div",{class:"checkbox-container",key:e.id,value:e.tipo},[(0,r.wy)((0,r._)("input",{type:"checkbox",name:"molhos","onUpdate:modelValue":n=>i.molhos[e.tipo]=n},null,8,R),[[t.e8,i.molhos[e.tipo]]]),(0,r._)("span",null,(0,T.zw)(e.tipo),1)],8,Q)))),128)),X])],32)]),(0,r._)("div",null,[(0,r.wy)((0,r.Wm)(l,{msg:i.msg},null,8,["msg"]),[[t.F8,i.msg]])])],64)}var ne=o(2479),oe={name:"BurgerForm",components:{CriarMsg:ne.Z},data(){return{paes:null,carnes:null,opcionaisdata:null,molhosdata:null,nome:null,pao:null,carne:null,opcionais:[],molhos:[],msg:null}},methods:{async getIngredientes(){const e=await fetch("http://localhost:3000/ingredientes"),n=await e.json();this.paes=n.paes,this.carnes=n.carnes,this.opcionaisdata=n.opcionais,this.molhosdata=n.molhos},async criarHamburguer(e){e.preventDefault();const n={nome:this.nome,pao:this.pao,carne:this.carne,opcionais:Object.keys(this.opcionais),molhos:Object.keys(this.molhos),statusList:"Solicitado"},o=JSON.stringify(n),t=await fetch("http://localhost:3000/burgers",{method:"POST",headers:{"Content-Type":"application/json"},body:o}),r=await t.json();this.msg=`Pedido N° ${r.id} realizado com sucesso!`,setTimeout((()=>{this.msg=""}),3e3),this.nome="",this.carne="",this.pao="",this.opcionais="",this.molhos=""}},mounted(){this.getIngredientes()}};const te=(0,d.Z)(oe,[["render",ee],["__scopeId","data-v-2e148b65"]]);var re=te,ae={name:"HomeView",components:{BannerHome:P,BurgerForm:re}};const ie=(0,d.Z)(ae,[["render",D]]);var ue=ie;const le=[{path:"/",name:"home",component:ue},{path:"/pedidos",name:"Pedidos",component:()=>o.e(550).then(o.bind(o,6091))},{path:"/contato",name:"contato",component:()=>o.e(884).then(o.bind(o,5884))}],ce=(0,k.p7)({history:(0,k.PO)("/"),routes:le});var se=ce;(0,t.ri)(w).use(se).mount("#app")},2479:function(e,n,o){o.d(n,{Z:function(){return c}});var t=o(3396),r=o(7139);function a(e,n,o,a,i,u){return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("p",null,(0,r.zw)(o.msg),1)])}var i={name:"CriarMsg",props:{msg:String}},u=o(89);const l=(0,u.Z)(i,[["render",a],["__scopeId","data-v-114957f8"]]);var c=l}},n={};function o(t){var r=n[t];if(void 0!==r)return r.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(n,t,r,a){if(!t){var i=1/0;for(s=0;s<e.length;s++){t=e[s][0],r=e[s][1],a=e[s][2];for(var u=!0,l=0;l<t.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((function(e){return o.O[e](t[l])}))?t.splice(l--,1):(u=!1,a<i&&(i=a));if(u){e.splice(s--,1);var c=r();void 0!==c&&(n=c)}}return n}a=a||0;for(var s=e.length;s>0&&e[s-1][2]>a;s--)e[s]=e[s-1];e[s]=[t,r,a]}}(),function(){o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,{a:n}),n}}(),function(){o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(n,t){return o.f[t](e,n),n}),[]))}}(),function(){o.u=function(e){return"js/"+(550===e?"pedidos":e)+"."+{550:"49ccbcb1",884:"98a3905b"}[e]+".js"}}(),function(){o.miniCssF=function(e){return"css/pedidos.75c11eea.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="criar_hamburguer_v3:";o.l=function(t,r,a,i){if(e[t])e[t].push(r);else{var u,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==t||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(l=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.setAttribute("data-webpack",n+a),u.src=t),e[t]=[r];var p=function(n,o){u.onerror=u.onload=null,clearTimeout(m);var r=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(o)})),n)return n(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),l&&document.head.appendChild(u)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,o,t,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(o){if(a.onerror=a.onload=null,"load"===o.type)t();else{var i=o&&("load"===o.type?"missing":o.type),u=o&&o.target&&o.target.href||n,l=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=u,a.parentNode&&a.parentNode.removeChild(a),r(l)}};return a.onerror=a.onload=i,a.href=n,o?o.parentNode.insertBefore(a,o.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var o=document.getElementsByTagName("link"),t=0;t<o.length;t++){var r=o[t],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){r=i[t],a=r.getAttribute("data-href");if(a===e||a===n)return r}},t=function(t){return new Promise((function(r,a){var i=o.miniCssF(t),u=o.p+i;if(n(i,u))return r();e(t,u,null,r,a)}))},r={143:0};o.f.miniCss=function(e,n){var o={550:1};r[e]?n.push(r[e]):0!==r[e]&&o[e]&&n.push(r[e]=t(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};o.f.j=function(n,t){var r=o.o(e,n)?e[n]:void 0;if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(o,t){r=e[n]=[o,t]}));t.push(r[2]=a);var i=o.p+o.u(n),u=new Error,l=function(t){if(o.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};o.l(i,l,"chunk-"+n,n)}},o.O.j=function(n){return 0===e[n]};var n=function(n,t){var r,a,i=t[0],u=t[1],l=t[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)o.o(u,r)&&(o.m[r]=u[r]);if(l)var s=l(o)}for(n&&n(t);c<i.length;c++)a=i[c],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(s)},t=self["webpackChunkcriar_hamburguer_v3"]=self["webpackChunkcriar_hamburguer_v3"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=o.O(void 0,[998],(function(){return o(4173)}));t=o.O(t)})();
//# sourceMappingURL=app.060e8b7b.js.map