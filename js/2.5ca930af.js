(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0d35":function(e,t,n){e.exports=n.p+"img/coin@200x200.9fb606dc.png"},1:function(e,t){},10:function(e,t){},2:function(e,t){},3:function(e,t){},"31ce":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"flex flex-center column"},[a("q-parallax",{style:{margin:.12*-e.fullHeight+"px 0px 0px"},attrs:{height:1.12*e.fullHeight},scopedSlots:e._u([{key:"media",fn:function(){return[a("img",{staticStyle:{"object-fit":"cover"},attrs:{src:n("b506")}})]},proxy:!0},{key:"content",fn:function(t){return[a("div",{staticClass:"absolute column items-center",style:{top:60*t.percentScrolled+"%",left:0,right:0}},[e.Logined?a("div",[e.isRegistered?a("div",[a("q-card",{staticClass:"my-card bg-white text-gray",staticStyle:{"max-width":"500px","min-width":"320px"}},[a("q-card-section",[a("q-badge",{attrs:{rounded:"",color:"primary",floating:""}},[e._v(e._s(e.address.substring(0,8)+"..."+e.address.substring(e.address.length-6,e.address.length)))]),a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",[a("img",{staticStyle:{"max-width":"32px","min-width":"32px"},attrs:{src:n("0d35")}})])],1),a("q-item-section",[a("q-item-label",[e._v("\n                      "+e._s(e.formatAmount(e.wave))),a("a",{staticClass:"text-dark"},[e._v(" WAVE")])]),a("q-item-label",{attrs:{caption:""}},[e._v("\n                      The Great Wave\n                    ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",[e._v(e._s(e.formatAmount(e.earned))+" EARNED")]),a("q-item-label",{attrs:{caption:""}},[e._v("\n                      "+e._s(e.formatAmount(e.missed))+" MISSED\n                    ")])],1)],1)],1),a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{color:"primary",name:"mdi-rocket-launch"}},[a("q-badge",{attrs:{align:"bottom",rounded:"",color:"primary"}},[e._v("Lv "+e._s(e.level))])],1)],1),a("q-item-section",[a("q-item-label",[e._v(e._s(e.$t("upgradeTo")))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n                      "+e._s(e.$t("upgradeFee"))+": "+e._s(e.formatAmount(e.fee))+" WAVE\n                    ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-btn",{attrs:{outline:"",rounded:"",color:"primary"},on:{click:function(t){return e.upgradeTransaction()}}},[e._v(e._s(e.$t("upgrade")))])],1)],1)],1),a("q-card-section",[e._v("\n                "+e._s(e.$t("howToInvite"))+"\n                "),a("a",[e._v("\n                  https://wave.cash?ref="+e._s(e.address)+"\n                ")])]),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{outline:"",color:"primary"},on:{click:function(t){return e.doCopy("https://wave.cash?ref="+e.address)}}},[e._v(e._s(e.$t("copy")))])],1)],1)],1):a("q-card",{staticClass:"my-card bg-white text-gray",staticStyle:{"max-width":"500px","min-width":"320px"}},[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("img",{staticStyle:{"max-width":"32px","min-width":"32px"},attrs:{src:n("0d35")}})]),a("q-item-section",[a("q-item-label",[e._v(e._s(e.address.substring(0,8)+"..."+e.address.substring(e.address.length-6,e.address.length)))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n                    "+e._s(e.$t("bscWallet"))+"\n                  ")])],1)],1)],1),a("q-card-section",[e._v("\n              "+e._s(e.$t("waveSubtitle"))+"\n            ")]),a("q-separator",{attrs:{dark:""}}),a("q-input",{staticStyle:{"max-width":"360px",margin:"0 auto"},attrs:{"bottom-slots":"",autogrow:"",label:e.$t("referrerAddr"),placeholder:"0x...",hint:e.referrerHint,dense:""},scopedSlots:e._u([{key:"append",fn:function(){return[""!==e.referrer?a("q-icon",{staticClass:"cursor-pointer",attrs:{name:"close"},on:{click:function(t){e.referrer=""}}}):e._e()]},proxy:!0},{key:"hint",fn:function(){return[e._v("\n                Field hint\n              ")]},proxy:!0}],null,!0),model:{value:e.referrer,callback:function(t){e.referrer=t},expression:"referrer"}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{outline:"",color:"primary"},on:{click:function(t){return e.registerTransaction()}}},[e._v(e._s(e.$t("getAirdrop")))])],1)],1)],1):e._e(),e.Logined?e._e():a("q-card",{staticClass:"my-card bg-white text-gray",staticStyle:{"max-width":"500px","min-width":"320px"}},[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{size:"md"}},[a("img",{staticStyle:{"max-width":"32px","min-width":"32px"},attrs:{src:n("0d35")}})])],1),a("q-item-section",[a("q-item-label",{staticClass:"text-h6"},[e._v(e._s(e.$t("welcome")))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n                  "+e._s(e.$t("waveTitle2"))+"\n                ")])],1)],1)],1),a("q-card-section",[e._v("\n            "+e._s(e.$t("howToLogin"))+"\n          ")]),a("q-separator",{attrs:{dark:""}}),a("q-card-actions",{attrs:{align:"center"}},[a("q-btn",{attrs:{flat:""},on:{click:function(t){return e.login()}}},[e._v(e._s(e.$t("login")))]),a("q-btn",{attrs:{flat:""},on:{click:function(t){return e.openURL("https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x46cbe14f4ab4c665e084a0a868c49098f0ce7704")}}},[e._v(e._s(e.$t("exchange")))])],1)],1),e.Logined?a("q-btn",{attrs:{flat:"",color:"white",icon:"mdi-chevron-down",size:"xl"},on:{click:function(t){return e.handleScroll("overview")}}}):e._e()],1)]}}])}),a("br"),a("br"),a("br"),e.Logined?a("div",{attrs:{id:"overview"}},[a("div",{staticClass:"q-pa-md text-h5 text-center text-bold"},[a("span",[e._v(e._s(e.$t("tokenIssuance")))]),a("br"),a("br"),a("br")]),a("q-card",{staticClass:"my-card bg-white text-gray",staticStyle:{"max-width":"500px","min-width":"360px"}},[a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{size:"md"}},[a("img",{staticStyle:{"max-width":"32px","min-width":"32px"},attrs:{src:n("0d35")}})])],1),a("q-item-section",[a("q-item-label",[e._v(e._s(e.formatAmount(e.token.totalSupply))+" "),a("a",{staticClass:"text-grey"},[e._v(" WAVE")])]),a("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(e.$t("TotalSupply"))+"\n            ")])],1)],1)],1),a("q-card-section",[a("q-item",[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",[a("q-icon",{attrs:{color:"primary",name:"mdi-gift",size:"md"}})],1)],1),a("q-item-section",[a("q-item-label",[e._v(e._s(e.formatAmount(e.dapp.reward))+" "),a("a",{staticClass:"text-grey"},[e._v(" WAVE")])]),a("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(e.$t("AirdropReward"))+"\n            ")])],1),a("q-item-section",{attrs:{side:"",top:""}},[a("q-item-label",[e._v(e._s(e.formatAmount(e.dapp.totalUsers,"wei")))]),a("q-item-label",{attrs:{caption:""}},[e._v("\n              "+e._s(e.$t("TotalClaimed"))+"\n            ")])],1)],1),a("q-linear-progress",{attrs:{size:"25px",value:e.halvedProgress,color:"primary"}},[a("div",{staticClass:"absolute-full flex flex-center"},[a("q-badge",{attrs:{color:"white","text-color":"primary",label:e.halvedProgressText}})],1)])],1)],1)],1):e._e(),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")],1)},s=[],i=n("b06b"),r=n("cdde"),o=n("0831"),l=n("768b"),p=n.n(l);class u{constructor(){this.KANAGAWA=[{inputs:[{internalType:"address",name:"firstUser",type:"address"},{internalType:"address",name:"waveContract",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"wallet",type:"address"}],name:"Registration",type:"event"},{payable:!0,stateMutability:"payable",type:"fallback"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"IDs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getHalvedCycle",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getHalvedTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getMaxLevel",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"getReferrer",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getReferrerID",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReward",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getTotalUsers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint8",name:"level",type:"uint8"}],name:"getUpgradeFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserEarned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"getUserID",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserInvited",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserLevel",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserMissed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserWallet",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getWave",outputs:[{internalType:"contract IWAVE",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"isRegistered",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"referrer",type:"address"}],name:"register",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint8",name:"maxLevel",type:"uint8"}],name:"setMaxLevel",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"upgrade",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"users",outputs:[{internalType:"address",name:"wallet",type:"address"},{internalType:"uint256",name:"referrerID",type:"uint256"},{internalType:"uint8",name:"level",type:"uint8"},{internalType:"uint256",name:"invited",type:"uint256"},{internalType:"uint256",name:"earned",type:"uint256"},{internalType:"uint256",name:"missed",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]}}class d{constructor(){this.WAVE=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"newMinter",type:"address"}],name:"MinterAdded",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"removedMinter",type:"address"}],name:"MinterRemoved",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newMinter",type:"address"}],name:"addMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address",name:"account",type:"address"}],name:"burnFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"who",type:"address"}],name:"isMinter",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"address",name:"account",type:"address"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"minters",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"minter",type:"address"}],name:"removeMinter",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}]}}var c=n("99e5"),y=n.n(c),m=n("399f"),b=n.n(m);n("498a"),n("5319");function h(e){const t=/(-?\d+)(\d{3})/;while(t.test(e))e=e.replace(t,"$1,$2");return e}const{getScrollTarget:f,setScrollPosition:w}=o["a"];var g={name:"PageAirdrop",data:()=>({feeMessage:"",Logined:null,web3Handler:null,injectedWeb3:null,web3:null,address:"",id:"",userInfo:null,balance:"",wave:"0",relayFee:"2000000000000000",gasLimit:"200000",gasPrice:"7500000000",dapp:{contract:"0xcf5cb782633f527395d106a4388889e23ea13ddd",totalUsers:"",reward:"",blacklist:p.a},token:{contract:"0x46cbe14f4ab4c665e084a0a868c49098f0ce7704",totalSupply:""},registerScan:null,referrer:"",referrerHint:"",isRegistered:!1}),computed:{onBlacklist(){const e=p.a;let t=!1;for(let n=0;n<e.length;n++){const a=e[n];this.referrer===a&&(t=!0)}return t},halvedProgress(){return(1-this.dapp.totalUsers%5e4/5e4)/1.5},halvedProgressText(){return this.$t("remainingAirdrop")+": "+(100*this.halvedProgress).toFixed(2)+"%"},missed(){return this.userInfo?this.userInfo.missed:""},earned(){return this.userInfo?this.userInfo.earned:""},level(){return this.userInfo?this.userInfo.level:""},fee(){if(this.userInfo){const e=5e3*(10-this.userInfo.level)*4**this.userInfo.level;return this.web3.utils.toWei(e.toString(),"ether")}return""},fullHeight(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},fullWidth(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}},created(){const e=this.$route.query.ref;e?(this.referrer=e,console.log("Referrer: #",e)):this.referrer=this.$store.state.wave.referrer,console.log("Referrer: #",this.referrer)},mounted(){this.web3Handler=setInterval((()=>{(window.ethereum||window.web3)&&(clearInterval(this.web3Handler),this.login())}),500),this.registerScan=setInterval((()=>{this.isRegistered?clearInterval(this.registerScan):this.getIsRegistered()}),1e3),this.waveScan=setInterval((()=>{this.getWaveBalance()}),1e3),this.referScan=setInterval((()=>{this.getRefferInfo()}),5e3),this.tokenInfoScan=setInterval((()=>{this.token.totalSupply?clearInterval(this.tokenInfoScan):this.getTokenInfo()}),1e3),this.airdropInfoScan=setInterval((()=>{this.dapp.totalUsers&&this.dapp.reward?clearInterval(this.airdropInfoScan):this.getAirdropInfo()}),1e3)},methods:{handleScroll(e){const t=document.getElementById(e),n=f(t),a=t.offsetTop-t.scrollHeight,s=1e3;w(n,a,s)},formatAmount(e,t="ether"){let n=this.web3.utils.fromWei(e,t);const a=n.toString().split(".")[0],s=n.toString().split(".")[1],i=a?a.length:0,r=s?s.length:0;r>6&&(n=parseFloat(n).toFixed(2)),i>=8&&r>2&&(n=parseFloat(n).toFixed(2));const o=h(n);return o},getTokenInfo(){if(!this.web3)return void console.log("====>No web3");const e=new this.web3.eth.Contract((new d).WAVE,this.token.contract);e.methods.totalSupply().call(((e,t)=>{e?console.log(e):this.token.totalSupply=t}))},getAirdropInfo(){if(!this.web3)return void console.log("====>No web3");const e=new this.web3.eth.Contract((new u).KANAGAWA,this.dapp.contract);e.methods.getTotalUsers().call(((t,n)=>{t?console.log(t):(this.dapp.totalUsers=n,e.methods.getReward().call(((e,t)=>{e?console.log(e):this.dapp.reward=t})))}))},getRefferInfo(){if(!this.web3)return void console.log("====>No web3");const e=new this.web3.eth.Contract((new u).KANAGAWA,this.dapp.contract);e.methods.getUserID(this.address).call(((t,n)=>{t?console.log(t):(this.id=n,e.methods.users(n).call(((e,t)=>{e?console.log(e):this.userInfo=t})))}))},getWaveBalance(){if(!this.web3)return void console.log("====>No web3");const e=new this.web3.eth.Contract((new d).WAVE,this.token.contract);e.methods.balanceOf(this.address).call(((e,t)=>{e?console.log(e):this.wave=t}))},getLevel(){if(!this.web3)return void console.log("====>No web3");const e=new this.web3.eth.Contract((new u).KANAGAWA,this.dapp.contract);e.methods.isRegistered(this.address).call(((e,t)=>{e?console.log(e):(console.log("isRegistered: ",t),this.isRegistered=t)}))},getIsRegistered(){if(!this.web3)return void console.log("====>No web3");const e=new this.web3.eth.Contract((new u).KANAGAWA,this.dapp.contract);e.methods.isRegistered(this.address).call(((e,t)=>{e?console.log(e):this.isRegistered=t}))},showNotif(e,t){this.$q.notify({message:e,color:t,position:"top"})},doCopy(e){const t=e+" "+this.$t("copied");Object(r["a"])(e).then((()=>{this.showNotif(t,"green")})).catch((e=>{console.log(e)}))},registerTransaction(){console.log("====>Get Airdrop");const e=new b.a(5e5),t=new b.a(this.gasPrice),n=new this.web3.eth.Contract((new u).KANAGAWA,this.dapp.contract),a="0xf5eb49fdfda708b0f07f04c46d0320bc6315a615",s=this.onBlacklist?a:this.referrer,i=n.methods.register(s).encodeABI(),r={from:this.address,to:this.dapp.contract,gas:e.toString(),gasPrice:t.toString(),data:i};this.web3.eth.sendTransaction(r,((e,t)=>{e?this.showNotif(e.message,"red"):(console.log(t),this.showNotif("Successfully","green"),this.showNotif("tx hash: "+t,"green"))}))},upgradeTransaction(){this.wave<this.fee&&this.showNotif("Insufficient balance of WAVE token","red");const e=new b.a(5e5),t=new b.a(this.gasPrice),n=new this.web3.eth.Contract((new u).KANAGAWA,this.dapp.contract),a=n.methods.upgrade().encodeABI(),s={from:this.address,to:this.dapp.contract,gas:e.toString(),gasPrice:t.toString(),data:a};this.web3.eth.sendTransaction(s,((e,t)=>{e?this.showNotif(e.message,"red"):(console.log(t),this.showNotif("Successfully","green"),this.showNotif("tx hash: "+t,"green"))}))},login(){"undefined"!==typeof window.ethereum?(this.injectedWeb3=window.ethereum,console.log("Wallet is installed!"),this.web3=new y.a(this.injectedWeb3),this.injectedWeb3.enable().then((e=>{this.address=e[0],this.web3=new y.a(this.injectedWeb3),this.Logined=!0,console.log("Address: ",e)}))):"undefined"!==typeof window.web3?(this.injectedWeb3=window.web3,console.log("Wallet is installed!!!"),this.injectedWeb3.currentProvider.enable().then((e=>{this.address=e[0],this.web3=new y.a(this.injectedWeb3.currentProvider),this.Logined=!0}))):(console.log("Wallet is not installed!"),this.showNotif(this.$t("howToLogin"),"red"))},openURL(e){Object(i["a"])(e)}}},v=g,T=n("2877"),x=n("9989"),q=n("639d"),_=n("f09f"),M=n("a370"),A=n("58a81"),I=n("66e5"),S=n("4074"),W=n("0016"),k=n("0170"),C=n("9c40"),$=n("eb85"),R=n("4b7e"),N=n("27f9"),L=n("6b1d"),O=n("eebe"),U=n.n(O),E=Object(T["a"])(v,a,s,!1,null,null,null);t["default"]=E.exports;U()(E,"components",{QPage:x["a"],QParallax:q["a"],QCard:_["a"],QCardSection:M["a"],QBadge:A["a"],QItem:I["a"],QItemSection:S["a"],QIcon:W["a"],QItemLabel:k["a"],QBtn:C["a"],QSeparator:$["a"],QCardActions:R["a"],QInput:N["a"],QLinearProgress:L["a"]})},4:function(e,t){},5:function(e,t){},6:function(e,t){},7:function(e,t){},"768b":function(e,t){e.exports=["0x01a42230c12ec46143e9de5587b42c049885f4f5","0x6ebccdc000ba4a3c297ef7fd1037f3b8490a14d4"]},8:function(e,t){},9:function(e,t){},b506:function(e,t,n){e.exports=n.p+"img/wave-min.998d1892.jpg"}}]);