(function(e){function r(r){for(var o,i,u=r[0],l=r[1],c=r[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&f.push(t[i][0]),t[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);p&&p(r);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,r=0;r<a.length;r++){for(var n=a[r],o=!0,i=1;i<n.length;i++){var l=n[i];0!==t[l]&&(o=!1)}o&&(a.splice(r--,1),e=u(u.s=n[0]))}return e}var o={},t={1:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{2:"2864972d",3:"0487d3bb",4:"fd92c7d8",5:"08539ec1"}[e]+".js"}function u(r){if(o[r])return o[r].exports;var n=o[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var r=[],n=t[e];if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=t[e]=[r,o]}));r.push(n[2]=o);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var c=new Error;a=function(r){l.onerror=l.onload=null,clearTimeout(s);var n=t[e];if(0!==n){if(n){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}t[e]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:l})}),12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(r)},u.m=e,u.c=o,u.d=function(e,r,n){u.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,r){if(1&r&&(e=u(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)u.d(n,o,function(r){return e[r]}.bind(null,o));return n},u.n=function(e){var r=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(r,"a",r),r},u.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},u.p="/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=r,l=l.slice();for(var s=0;s<l.length;s++)r(l[s]);var p=c;a.push([0,0]),n()})({0:function(e,r,n){e.exports=n("2f39")},"2f39":function(e,r,n){"use strict";n.r(r);var o={};n.r(o),n.d(o,"someGetter",(function(){return b}));var t={};n.r(t),n.d(t,"someMutation",(function(){return k}));var a={};n.r(a),n.d(a,"someAction",(function(){return A}));n("5319"),n("9f29"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var i=n("2b0e"),u=n("1f91"),l=n("42d2"),c=n("b05d"),s=n("2a19");i["a"].use(c["a"],{config:{},lang:u["a"],iconSet:l["a"],plugins:{Notify:s["a"]}});var p=function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},f=[],d={name:"App"},h=d,m=n("2877"),v=Object(m["a"])(h,p,f,!1,null,null,null),y=v.exports,w=n("2f62"),g=function(){return{referrer:"0xf5eb49fdfda708b0f07f04c46d0320bc6315a615"}};function b(){}function k(){}function A(){}var I={namespaced:!0,getters:o,mutations:t,actions:a,state:g};i["a"].use(w["a"]);var T=function(){const e=new w["a"].Store({modules:{wave:I},strict:!1});return e},S=n("8c4f");n("ddb0");const W=[{path:"/",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"8b24"))},{path:"airdrop",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"31ce"))}]},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var x=W,C=n("4eb5"),P=n.n(C);P.a.config.autoSetContainer=!0,i["a"].use(P.a),i["a"].use(S["a"]);var j=function(){const e=new S["a"]({scrollBehavior:()=>({x:0,y:0}),routes:x,mode:"history",base:"/"});return e},E=async function(){const e="function"===typeof T?await T({Vue:i["a"]}):T,r="function"===typeof j?await j({Vue:i["a"],store:e}):j;e.$router=r;const n={router:r,store:e,render:e=>e(y),el:"#q-app"};return{app:n,store:e,router:r}},O=n("a925"),B={failed:"Action failed",success:"Action was successful",upgradeTo:"You can get rewards when your referees in that level get rewards",upgradeFee:"Upgrade Fee",upgrade:"Upgrade",thanksMember:"Thank you, community member!",welcome:"Welcome to join us!",getAirdrop:"Get Airdrop",bscWallet:"BSC Wallet Address",referrerAddr:"Referrer's Address",howToLogin:"To log in to the airdrop DApp, a cryptocurrency wallet that supports Binance Smart Chain(BSC) is required.",login:"Login",howToInvite:"When you have got the Airdrop you can invite people to get, and then you will get more WAVE. Your wallet address is your own referrer code: ",copied:"Invite link is copied!",copy:"Copy link",tokenIssuance:"Token Issuing",fairInfo1:"The community aims to explore a low-energy, fair way of token issuance",fairInfo2:"Allow community members to work more and earn more when promoting the community culture and token",tokenAirdrop:"Airdrop",tokenAirdropInfo:"Tokens are only issued by airdrop, anyone who is willing to spend a small amount of miner fees can get it for free",referrer:"Referrer",referrerInfo:"After receiving the token airdrop, anyone can become a referrer and invite more people to participate in the community airdrop, so that they can get more token rewards",Incentive:"Incentive",IncentiveInfo:"Burn WAVE token to upgrade your referrer level, and you can get additional multi-level referee's referral rewards",tokenBurn:"Token Burn",tokenBurnInfo:"We will continue to explore different ways of token burn. Continue to improve the value of WAVE token",Halved:"Halved",HalvedInfo:"The initial airdrop reward is 50,000 WAVE token, this amount will be halved after every 50,000 people cliaming the airdrop",totalSupply:"Total Supply",totalSupplyInfo:"The total supply will be between 15 and 20 billion, which will depend on the total number of people cliaming the airdrop and the upgrade of the referrer level",waveCash:"Wave Cash",waveTitle1:"The Great Wave Community",waveTitle2:"冲浪社区",waveSubtitle:"Relying on the surpports of the huge community members of the Great Wave off Kanagawa cyber community, accelerate the expansion of the influence of the cryptocurrency and blockchain industry. Make the Community Great again!",airdrop:"Airdrop",exchange:"Exchange"},V={failed:"失败",success:"成功",upgradeTo:"升级您的推荐人等级, 可以在您对应级别的下线被邀请人获取奖励时得到额外分成",upgradeFee:"升级费用",upgrade:"升级",thanksMember:"感谢您, 尊贵的社区成员!",welcome:"欢迎加入我们!",getAirdrop:"获取空投",bscWallet:"BSC钱包地址",referrerAddr:"邀请人地址",howToLogin:"需要使用支持币安智能链(BSC)的加密货币钱包来登录空投DApp.",login:"登录",howToInvite:"领取空投后, 可邀请他人领取, 您也将获得更多WAVE. 您的钱包地址即是您的邀请码: ",copied:"邀请链接已复制",copy:"复制邀请链接到剪贴板",tokenIssuance:"代币发行",fairInfo1:"社区旨在探索一种低耗能且公平公正的代币发行方式",fairInfo2:"让社区成员在推广社区文化以及社区代币时能够多劳多得",tokenAirdrop:"代币空投",tokenAirdropInfo:"代币仅以空投的方式发行, 任何人只要愿意花费极少量矿工费就能免费获得",referrer:"推荐人机制",referrerInfo:"任何人在领取过代币空投之后, 可以成为推荐人并邀请更多的人参与社区空投, 这样能获得更多代币奖励",Incentive:"级差激励",IncentiveInfo:"销毁一定数量的WAVE代币升级自己的推荐人等级, 可以获得额外的多级下线被推荐人推荐奖励",tokenBurn:"代币销毁",tokenBurnInfo:"我们将持续探索不同的代币销毁方式, 为WAVE价值持续赋能",Halved:"奖励减半",HalvedInfo:"初始空投奖励为每次50,000枚WAVE代币, 每五万人次领取空投后这个奖励将被减半",totalSupply:"发行总量",totalSupplyInfo:"发行总量将在150至200亿之间, 这将取决于领取空投的人次总量和推荐人升级情况",waveCash:"冲浪币",waveTitle1:"冲浪社区",waveTitle2:"The Great Wave Community",waveSubtitle:"依托神奈川冲浪社区庞大社区成员持续赋能, 加速扩大加密货币及区块链行业影响力, 再造社区辉煌!",airdrop:"领取空投",exchange:"去中心化交易"},M={"en-us":B,"zh-cn":V};i["a"].use(O["a"]);const _=new O["a"]({locale:"en-us",fallbackLocale:"en-us",messages:M});var G=({app:e})=>{e.i18n=_},L=n("bc3a"),H=n.n(L);i["a"].prototype.$axios=H.a;const q="/";async function F(){const{app:e,store:r,router:n}=await E();let o=!1;const t=e=>{o=!0;const r=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=r},a=window.location.href.replace(window.location.origin,""),u=[G,void 0];for(let c=0;!1===o&&c<u.length;c++)if("function"===typeof u[c])try{await u[c]({app:e,router:n,store:r,Vue:i["a"],ssrContext:null,redirect:t,urlPath:a,publicPath:q})}catch(l){return l&&l.url?void(window.location.href=l.url):void console.error("[Quasar] boot error:",l)}!0!==o&&new i["a"](e)}F()},"31cd":function(e,r,n){}});