(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0d35":function(t,e,n){t.exports=n.p+"img/coin@200x200.9fb606dc.png"},1:function(t,e){},10:function(t,e){},2:function(t,e){},3:function(t,e){},"31ce":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"flex flex-center column"},[a("q-parallax",{style:{margin:.12*-t.fullHeight+"px 0px 0px"},attrs:{height:1.12*t.fullHeight},scopedSlots:t._u([{key:"media",fn:function(){return[a("img",{staticStyle:{"object-fit":"cover"},attrs:{src:n("b506")}})]},proxy:!0},{key:"content",fn:function(e){return[a("div",{staticClass:"q-pa-sm absolute column items-center",style:{top:60*e.percentScrolled+"%",left:0,right:0}},[t.Logined?a("div",[t.isRegistered?a("div",[a("q-card",{staticClass:" my-card bg-white text-gray",staticStyle:{"max-width":"500px","min-width":"200px"}},[a("q-card-section",[a("q-badge",{attrs:{rounded:"",color:"primary",floating:""}},[t._v(t._s(t.address.substring(0,8)+"..."+t.address.substring(t.address.length-6,t.address.length)))]),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",[a("img",{staticStyle:{"max-width":"32px","min-width":"32px"},attrs:{src:n("0d35")}})])],1),a("q-item-section",[a("q-item-label",[t._v("\n                      "+t._s(t.formatAmount(t.wave))),a("a",{staticClass:"text-dark"},[t._v(" WAVE")])]),a("q-item-label",{attrs:{caption:""}},[t._v("\n                      The Great Wave\n                    ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",[t._v(t._s(t.formatAmount(t.earned))+" EARNED")]),a("q-item-label",{attrs:{caption:""}},[t._v("\n                      "+t._s(t.formatAmount(t.missed))+" MISSED\n                    ")])],1)],1)],1),a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"mdi-rocket-launch"}},[a("q-badge",{attrs:{align:"bottom",rounded:"",color:"primary"}},[t._v("Lv "+t._s(t.level))])],1)],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.$t("upgradeTo")))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n                      "+t._s(t.$t("upgradeFee"))+": "+t._s(t.formatAmount(t.fee))+" WAVE\n                    ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-btn",{attrs:{outline:"",rounded:"",color:"primary"},on:{click:function(e){return t.upgradeTransaction()}}},[t._v(t._s(t.$t("upgrade")))])],1)],1)],1),a("q-card-section",[t._v("\n                "+t._s(t.$t("howToInvite"))+"\n                "),a("a",[t._v("\n                  https://wave.cash?ref="+t._s(t.address)+"\n                ")])]),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{outline:"",color:"primary"},on:{click:function(e){return t.doCopy("https://wave.cash?ref="+t.address)}}},[t._v(t._s(t.$t("copy")))])],1)],1)],1):a("q-card",{staticClass:"my-card bg-white text-gray",staticStyle:{"max-width":"500px","min-width":"200px"}},[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("img",{staticStyle:{"max-width":"32px","min-width":"32px"},attrs:{src:n("0d35")}})]),a("q-item-section",[a("q-item-label",[t._v(t._s(t.address.substring(0,8)+"..."+t.address.substring(t.address.length-6,t.address.length)))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n                    "+t._s(t.$t("bscWallet"))+"\n                  ")])],1)],1)],1),a("q-card-section",[t._v("\n              "+t._s(t.$t("waveSubtitle"))+"\n            ")]),a("q-separator",{attrs:{dark:""}}),a("q-input",{staticStyle:{"max-width":"360px",margin:"0 auto"},attrs:{"bottom-slots":"",autogrow:"",label:t.$t("referrerAddr"),placeholder:"0x...",hint:t.referrerHint,dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[""!==t.referrer?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(e){t.referrer=""}}}):t._e()]},proxy:!0},{key:"hint",fn:function(){return[t._v("\n                Field hint\n              ")]},proxy:!0}],null,!0),model:{value:t.referrer,callback:function(e){t.referrer=e},expression:"referrer"}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{outline:"",color:"primary"},on:{click:function(e){return t.registerTransaction()}}},[t._v(t._s(t.$t("getAirdrop")))])],1)],1)],1):t._e(),t.Logined?t._e():a("q-card",{staticClass:"my-card bg-white text-gray",staticStyle:{"max-width":"500px","min-width":"200px"}},[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{size:"md"}},[a("img",{staticStyle:{"max-width":"32px","min-width":"32px"},attrs:{src:n("0d35")}})])],1),a("q-item-section",[a("q-item-label",{staticClass:"text-h6"},[t._v(t._s(t.$t("welcome")))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n                  "+t._s(t.$t("waveTitle2"))+"\n                ")])],1)],1)],1),a("q-card-section",[t._v("\n            "+t._s(t.$t("howToLogin"))+"\n          ")]),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{flat:""},on:{click:function(e){return t.login()}}},[t._v(t._s(t.$t("login")))]),a("q-btn",{attrs:{flat:""},on:{click:function(e){return t.openURL("https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x46cbe14f4ab4c665e084a0a868c49098f0ce7704")}}},[t._v(t._s(t.$t("exchange")))])],1)],1),t.Logined?a("q-btn",{attrs:{flat:"",color:"white",icon:"mdi-chevron-down",size:"xl"},on:{click:function(e){return t.handleScroll("overview")}}}):t._e()],1)]}}])}),a("br"),a("br"),a("br"),t.Logined?a("div",{attrs:{id:"overview"}},[a("div",{staticClass:"q-pa-md text-h5 text-center text-bold"},[a("span",[t._v(t._s(t.$t("tokenIssuance")))]),a("br")]),a("q-card",{staticClass:"my-card bg-white text-gray",staticStyle:{"max-width":"500px","min-width":"360px"}},[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",[a("q-icon",{attrs:{color:"primary",name:"mdi-gift",size:"md"}})],1)],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.formatAmount(t.dapp.reward))+" "),a("a",{staticClass:"text-grey"},[t._v(" WAVE")])]),a("q-item-label",{attrs:{caption:""}},[t._v("\n              "+t._s(t.$t("AirdropReward"))+"\n            ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",[t._v(t._s(t.formatAmount(t.dapp.totalUsers,"wei")))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n              "+t._s(t.$t("TotalClaimed"))+"\n            ")])],1)],1),a("q-linear-progress",{attrs:{size:"25px",value:t.halvedProgress,color:"primary"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"primary",label:t.halvedProgressText}})],1)])],1),a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{size:"md"}},[a("img",{staticStyle:{"max-width":"50px","min-width":"50px"},attrs:{src:n("0d35")}})])],1),a("q-item-section",[a("q-item-label",[t._v(t._s(t.formatAmount(t.token.totalSupply))+" "),a("a",{staticClass:"text-grey"},[t._v(" WAVE")])]),a("q-item-label",{attrs:{caption:""}},[t._v("\n              "+t._s(t.$t("TotalSupply"))+"\n            ")])],1)],1)],1),a("q-card-section",[a("q-item",[a("q-item-section",[a("q-item-label",[t._v(t._s(t.formatAmount(t.burnt))+" "),a("a",{staticClass:"text-grey"},[t._v(" WAVE")])]),a("q-item-label",{attrs:{caption:""}},[t._v("\n              "+t._s(t.$t("TotalBurnt"))+"\n            ")])],1),a("q-item-section",{attrs:{side:""}},[a("q-circular-progress",{staticStyle:{"max-width":"128px",position:"relative",right:"10px",bottom:"10px"},attrs:{"show-value":"","font-size":"12px",value:100-t.burntPercent,size:"108px",thickness:.33,color:"primary","track-color":"grey-3"}},[t._v("\n              "+t._s(t.burntPercent)+"%\n            ")])],1)],1)],1)],1)],1):t._e(),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],1)},i=[],s=n("b06b"),r=n("cdde"),o=n("0831"),l=n("768b"),p=n.n(l),u=n("5835"),c=n("8e54"),d=n("99e5"),y=n.n(d),m=n("399f"),b=n.n(m),f=n("7464");const{getScrollTarget:h,setScrollPosition:w}=o["a"];var g={name:"PageAirdrop",data:()=>({feeMessage:"",Logined:null,web3Handler:null,injectedWeb3:null,web3:null,address:"",id:"",userInfo:null,balance:"",wave:"0",relayFee:"2000000000000000",gasLimit:"200000",gasPrice:"7500000000",dapp:{contract:"0xcf5cb782633f527395d106a4388889e23ea13ddd",totalUsers:"",reward:"",blacklist:p.a},token:{contract:"0x46cbe14f4ab4c665e084a0a868c49098f0ce7704",totalSupply:""},registerScan:null,referrer:"",referrerHint:"",isRegistered:!1}),computed:{onBlacklist(){const t=p.a;let e=!1;for(let n=0;n<t.length;n++){const a=t[n];this.referrer===a&&(e=!0)}return e},halvedProgress(){return(1-this.dapp.totalUsers%5e4/5e4)/1},halvedProgressText(){return this.$t("remainingAirdrop")+": "+(100*this.halvedProgress).toFixed(2)+"%"},minted(){if(!this.dapp.totalUsers)return"";const t=Math.floor(this.dapp.totalUsers/5e4);let e=0,n=5e4;for(let a=0;a<t+1;a++){let i=n;for(let t=0;t<11;t++)i+=n/2**t;e+=i*(a>=t?this.dapp.totalUsers:5e4),n/=2,console.log("Round 1 mount",5e4*i)}return console.log("minted: ",e),this.web3.utils.toWei(e.toString(),"ether")},burnt(){if(this.minted&&this.token.totalSupply){const t=new b.a(this.minted),e=new b.a(this.token.totalSupply);return console.log("burnt: ",t.sub(e).toString()),t.sub(e)}return""},burntPercent(){if(this.burnt&&this.minted){const t=this.web3.utils.fromWei(this.burnt,"ether"),e=this.web3.utils.fromWei(this.minted,"ether");console.log("burnt",t),console.log("minted",e);const n=(t/e*100).toFixed(2);return console.log("burnt percent",n,"%"),parseFloat(n)}return 0},missed(){return this.userInfo?this.userInfo.missed:""},earned(){return this.userInfo?this.userInfo.earned:""},level(){return this.userInfo?this.userInfo.level:""},fee(){if(this.userInfo){const t=5e3*(10-this.userInfo.level)*4**this.userInfo.level;return this.web3.utils.toWei(t.toString(),"ether")}return""},fullHeight(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},fullWidth(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},created(){const t=this.$route.query.ref;t?(this.referrer=t,console.log("Referrer: #",t)):this.referrer=this.$store.state.wave.referrer,console.log("Referrer: #",this.referrer)},mounted(){this.web3Handler=setInterval((()=>{(window.ethereum||window.web3)&&(clearInterval(this.web3Handler),this.login())}),500),this.registerScan=setInterval((()=>{this.isRegistered?clearInterval(this.registerScan):this.getIsRegistered()}),1e3),this.waveScan=setInterval((()=>{this.getWaveBalance()}),1e3),this.referScan=setInterval((()=>{this.getRefferInfo()}),5e3),this.tokenInfoScan=setInterval((()=>{this.token.totalSupply?clearInterval(this.tokenInfoScan):this.getTokenInfo()}),1e3),this.airdropInfoScan=setInterval((()=>{this.dapp.totalUsers&&this.dapp.reward?clearInterval(this.airdropInfoScan):this.getAirdropInfo()}),1e3)},methods:{handleScroll(t){const e=document.getElementById(t),n=h(e),a=e.offsetTop-e.scrollHeight,i=1e3;w(n,a,i)},formatAmount(t,e="ether"){let n=this.web3.utils.fromWei(t,e);const a=n.toString().split(".")[0],i=n.toString().split(".")[1],s=a?a.length:0,r=i?i.length:0;r>6&&(n=parseFloat(n).toFixed(2)),s>=8&&r>2&&(n=parseFloat(n).toFixed(2));const o=Object(f["a"])(n);return o},getTokenInfo(){if(!this.web3)return void console.log("====>No web3");const t=new this.web3.eth.Contract((new c["a"]).WAVE,this.token.contract);t.methods.totalSupply().call(((t,e)=>{t?console.log(t):this.token.totalSupply=e}))},getAirdropInfo(){if(!this.web3)return void console.log("====>No web3");const t=new this.web3.eth.Contract((new u["a"]).KANAGAWA,this.dapp.contract);t.methods.getTotalUsers().call(((e,n)=>{e?console.log(e):(this.dapp.totalUsers=n,t.methods.getReward().call(((t,e)=>{t?console.log(t):this.dapp.reward=e})))}))},getRefferInfo(){if(!this.web3)return void console.log("====>No web3");const t=new this.web3.eth.Contract((new u["a"]).KANAGAWA,this.dapp.contract);t.methods.getUserID(this.address).call(((e,n)=>{e?console.log(e):(this.id=n,t.methods.users(n).call(((t,e)=>{t?console.log(t):this.userInfo=e})))}))},getWaveBalance(){if(!this.web3)return void console.log("====>No web3");const t=new this.web3.eth.Contract((new c["a"]).WAVE,this.token.contract);t.methods.balanceOf(this.address).call(((t,e)=>{t?console.log(t):this.wave=e}))},getLevel(){if(!this.web3)return void console.log("====>No web3");const t=new this.web3.eth.Contract((new u["a"]).KANAGAWA,this.dapp.contract);t.methods.isRegistered(this.address).call(((t,e)=>{t?console.log(t):(console.log("isRegistered: ",e),this.isRegistered=e)}))},getIsRegistered(){if(!this.web3)return void console.log("====>No web3");const t=new this.web3.eth.Contract((new u["a"]).KANAGAWA,this.dapp.contract);t.methods.isRegistered(this.address).call(((t,e)=>{t?console.log(t):this.isRegistered=e}))},showNotif(t,e){this.$q.notify({message:t,color:e,position:"top"})},doCopy(t){const e=t+" "+this.$t("copied");Object(r["a"])(t).then((()=>{this.showNotif(e,"green")})).catch((t=>{console.log(t)}))},registerTransaction(){console.log("====>Get Airdrop");const t=new b.a(5e5),e=new b.a(this.gasPrice),n=new this.web3.eth.Contract((new u["a"]).KANAGAWA,this.dapp.contract);""===this.referrer||(this.web3.utils.isAddress(this.referrer)?this.onBlacklist&&(this.referrer="0xf5eb49fdfda708b0f07f04c46d0320bc6315a615"):(console.log("Referrer check: ",this.web3.utils.isAddress(this.referrer)),this.referrer="0xf5eb49fdfda708b0f07f04c46d0320bc6315a615"));const a=this.referrer,i=n.methods.register(a).encodeABI(),s={from:this.address,to:this.dapp.contract,gas:t.toString(),gasPrice:e.toString(),data:i};this.web3.eth.sendTransaction(s,((t,e)=>{t?this.showNotif(t.message,"red"):(console.log(e),this.showNotif("Successfully","green"),this.showNotif("tx hash: "+e,"green"))}))},upgradeTransaction(){const t=new b.a(Object(f["b"])(this.wave.length?this.wave:"0",18)),e=new b.a(Object(f["b"])(this.fee.length?this.fee:"0",18)),n=this.web3.utils.fromWei(e,"ether");if(-1===t.cmp(e))return void this.showNotif("Insufficient balance of WAVE token","red");if(this.showNotif(this.formatAmount(n)+" WAVE will be burnt from your wallet for Upgrading","blue"),e.length<=1)return;const a=new b.a(5e5),i=new b.a(this.gasPrice),s=new this.web3.eth.Contract((new u["a"]).KANAGAWA,this.dapp.contract),r=s.methods.upgrade().encodeABI(),o={from:this.address,to:this.dapp.contract,gas:a.toString(),gasPrice:i.toString(),data:r};this.web3.eth.sendTransaction(o,((t,e)=>{t?this.showNotif(t.message,"red"):(console.log(e),this.showNotif("Successfully","green"),this.showNotif("tx hash: "+e,"green"))}))},login(){"undefined"!==typeof window.ethereum?(this.injectedWeb3=window.ethereum,console.log("Wallet is installed!"),this.web3=new y.a(this.injectedWeb3),this.injectedWeb3.enable().then((t=>{this.address=t[0],this.web3=new y.a(this.injectedWeb3),this.Logined=!0,console.log("Address: ",t)}))):"undefined"!==typeof window.web3?(this.injectedWeb3=window.web3,console.log("Wallet is installed!!!"),this.injectedWeb3.currentProvider.enable().then((t=>{this.address=t[0],this.web3=new y.a(this.injectedWeb3.currentProvider),this.Logined=!0}))):(console.log("Wallet is not installed!"),this.showNotif(this.$t("howToLogin"),"red"))},openURL(t){Object(s["a"])(t)}}},v=g,T=n("2877"),x=n("9989"),q=n("639d"),_=n("f09f"),A=n("a370"),M=n("58a81"),I=n("66e5"),S=n("4074"),W=n("0016"),k=n("0170"),C=n("9c40"),$=n("eb85"),R=n("4b7e"),N=n("27f9"),O=n("6b1d"),U=n("58ea"),E=n("eebe"),P=n.n(E),L=Object(T["a"])(v,a,i,!1,null,null,null);e["default"]=L.exports;P()(L,"components",{QPage:x["a"],QParallax:q["a"],QCard:_["a"],QCardSection:A["a"],QBadge:M["a"],QItem:I["a"],QItemSection:S["a"],QIcon:W["a"],QItemLabel:k["a"],QBtn:C["a"],QSeparator:$["a"],QCardActions:R["a"],QInput:N["a"],QLinearProgress:O["a"],QCircularProgress:U["a"]})},4:function(t,e){},5:function(t,e){},5835:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));class a{constructor(){this.KANAGAWA=[{inputs:[{internalType:"address",name:"firstUser",type:"address"},{internalType:"address",name:"waveContract",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"wallet",type:"address"}],name:"Registration",type:"event"},{payable:!0,stateMutability:"payable",type:"fallback"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"IDs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getHalvedCycle",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getHalvedTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getMaxLevel",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"getReferrer",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getReferrerID",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReward",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getTotalUsers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint8",name:"level",type:"uint8"}],name:"getUpgradeFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserEarned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"getUserID",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserInvited",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserLevel",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserMissed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserWallet",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getWave",outputs:[{internalType:"contract IWAVE",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"isRegistered",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"referrer",type:"address"}],name:"register",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint8",name:"maxLevel",type:"uint8"}],name:"setMaxLevel",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"upgrade",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"users",outputs:[{internalType:"address",name:"wallet",type:"address"},{internalType:"uint256",name:"referrerID",type:"uint256"},{internalType:"uint8",name:"level",type:"uint8"},{internalType:"uint256",name:"invited",type:"uint256"},{internalType:"uint256",name:"earned",type:"uint256"},{internalType:"uint256",name:"missed",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]}}},6:function(t,e){},7:function(t,e){},7464:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}));n("498a"),n("5319"),n("399f");function a(t="1",e=18){if(!t)return"0";t=i(t);const n=t.split("."),a=n[0],r=n[1]||"";if(n.length>2||r.length>e)throw new Error(`Cannot parse '${t}' as bignumber`);return s(a+r.padEnd(e,"0"))}function i(t){return t.replace(/,/g,"").trim()}function s(t){return t=t.replace(/^0+/,""),""===t?"0":t}function r(t){const e=/(-?\d+)(\d{3})/;while(e.test(t))t=t.replace(e,"$1,$2");return t}},"768b":function(t,e){t.exports=["0x01a42230c12ec46143e9de5587b42c049885f4f5","0x6ebccdc000ba4a3c297ef7fd1037f3b8490a14d4","0xdb04c2d81e4a06f2ebbc86fcbe869e39fa3f2143","0xcf5cb782633f527395d106a4388889e23ea13ddd","0x239a9d9a412200bfe8926e044841fb3e7d59ace3","0xc616e4c50c737dfb0541947b85d01cfcf229893f","0xa5522c042fc0808296C0158baf1f443d2fA7A0c9"]},8:function(t,e){},"8e54":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));class a{constructor(){this.WAVE=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newMinter",type:"address"}],name:"MinterAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"removedMinter",type:"address"}],name:"MinterRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newMinter",type:"address"}],name:"addMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address",name:"account",type:"address"}],name:"burnFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"who",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address",name:"account",type:"address"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"minters",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"minter",type:"address"}],name:"removeMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]}}},9:function(t,e){},b506:function(t,e,n){t.exports=n.p+"img/wave-min.998d1892.jpg"}}]);