(function(t){function e(e){for(var a,r,u=e[0],p=e[1],o=e[2],l=0,c=[];l<u.length;l++)r=u[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&c.push(i[r][0]),i[r]=0;for(a in p)Object.prototype.hasOwnProperty.call(p,a)&&(t[a]=p[a]);y&&y(e);while(c.length)c.shift()();return s.push.apply(s,o||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var p=n[r];0!==i[p]&&(a=!1)}a&&(s.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},i={app:0},s=[];function r(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"c18e1ac2"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=i[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=i[t]=[e,a]}));e.push(n[2]=a);var s,p=document.createElement("script");p.charset="utf-8",p.timeout=120,u.nc&&p.setAttribute("nonce",u.nc),p.src=r(t);var o=new Error;s=function(e){p.onerror=p.onload=null,clearTimeout(l);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",o.name="ChunkLoadError",o.type=a,o.request=s,n[1](o)}i[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:p})}),12e4);p.onerror=p.onload=s,document.head.appendChild(p)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],o=p.push.bind(p);p.push=e,p=p.slice();for(var l=0;l<p.length;l++)e(p[l]);var y=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},15:function(t,e){},16:function(t,e){},17:function(t,e){},18:function(t,e){},19:function(t,e){},2:function(t,e){},20:function(t,e){},21:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},s=[],r={name:"App"},u=r,p=n("2877"),o=Object(p["a"])(u,i,s,!1,null,null,null),l=o.exports,y=n("f309"),c=n("fcf4");a["a"].use(y["a"]);var d=new y["a"]({theme:{themes:{light:{primary:c["a"].amber.darken1}}}}),b=n("bc3a"),m=n.n(b),f=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",light:""}},[n("h3",{staticClass:"primary--text"},[t._v("WAVE - 冲浪币空投")]),n("v-spacer"),t.address?[n("span",{staticClass:"mr-2 subtitle-2"},[t._v(t._s(t.address.substring(0,8)+"..."+t.address.substring(t.address.length-6,t.address.length)))]),n("v-icon",[t._v("mdi-account")])]:n("v-btn",{attrs:{text:""},on:{click:function(e){return t.login()}}},[n("span",{staticClass:"mr-2"},[t._v("LOG IN")]),n("v-icon",[t._v("mdi-account")])],1)],2),n("v-main",{staticClass:"px-3 my-3"},[n("v-card",{staticClass:"mx-auto"},[n("v-card-text",{staticClass:"mx-auto"},[n("v-text-field",{staticClass:"subtitle-1 font-weight-medium",attrs:{label:"推荐人钱包地址",hint:t.referrerHint,"persistent-hint":"",placeholder:"0x..."},model:{value:t.referrer,callback:function(e){t.referrer=e},expression:"referrer"}})],1),n("v-card-actions",[n("v-btn",{staticClass:"mx-auto error px-6",attrs:{large:""},on:{click:function(e){return t.registerTransaction()}}},[t._v("获取空投")])],1)],1),n("br"),t.address?n("v-card",{staticClass:"mx-auto"},[n("v-card-text",{staticClass:"mx-auto"},[t.address?[n("span",{staticClass:"mr-2 subtitle-2"},[t._v("领取空投后, 可邀请他人领取, 您也将获得更多WAVE. 您的钱包地址即是您的邀请码: "+t._s(t.address.substring(0,8)+"..."+t.address.substring(t.address.length-6,t.address.length))+". 花费WAVE可以升级您的社区等级, 从而可获得多级邀请奖励. 链接: https://wave.cash?ref="+t._s(t.address))])]:t._e()],2),n("v-card-actions",[n("v-btn",{staticClass:"mx-auto error px-6",attrs:{large:""},on:{click:function(e){return t.doCopy("https://wave.cash?ref="+t.address)}}},[t._v("复制推广链接")])],1),n("v-card-actions",[n("v-btn",{staticClass:"mx-auto error px-6",attrs:{large:""},on:{click:function(e){return t.upgradeTransaction()}}},[t._v("升级推广等级")])],1)],1):t._e(),n("br")],1),n("v-snackbar",{attrs:{color:t.snackbarColor,timeout:t.snackbarTimeout,top:""},model:{value:t.showSnackbar,callback:function(e){t.showSnackbar=e},expression:"showSnackbar"}},[t._v(t._s(t.snackbarText))])],1)},h=[],w=(n("99af"),n("25f0"),n("d4ec")),v=function t(){Object(w["a"])(this,t),this.TOKEN_HUB=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"key",type:"string"},{indexed:!1,internalType:"bytes",name:"value",type:"bytes"}],name:"paramChange",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"from",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"receiveDeposit",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"bep2eAddr",type:"address"},{indexed:!1,internalType:"address",name:"refundAddr",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint32",name:"status",type:"uint32"}],name:"refundFailure",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"bep2eAddr",type:"address"},{indexed:!1,internalType:"address",name:"refundAddr",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"},{indexed:!1,internalType:"uint32",name:"status",type:"uint32"}],name:"refundSuccess",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"rewardTo",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"bep2eAddr",type:"address"},{indexed:!1,internalType:"address",name:"refundAddr",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"transferInSuccess",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"bep2eAddr",type:"address"},{indexed:!1,internalType:"address",name:"senderAddr",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"transferOutSuccess",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"uint8",name:"channelId",type:"uint8"},{indexed:!1,internalType:"bytes",name:"msgBytes",type:"bytes"}],name:"unexpectedPackage",type:"event"},{payable:!0,stateMutability:"payable",type:"fallback"},{constant:!0,inputs:[],name:"BEP2_TOKEN_DECIMALS",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"BEP2_TOKEN_SYMBOL_FOR_BNB",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"BIND_CHANNELID",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"CODE_OK",outputs:[{internalType:"uint32",name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"CROSS_CHAIN_CONTRACT_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"ERROR_FAIL_DECODE",outputs:[{internalType:"uint32",name:"",type:"uint32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"GOV_CHANNELID",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"GOV_HUB_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"INCENTIVIZE_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"INIT_MINIMUM_RELAY_FEE",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"LIGHT_CLIENT_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MAXIMUM_BEP2E_SYMBOL_LEN",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MAX_BEP2_TOTAL_SUPPLY",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MAX_GAS_FOR_CALLING_BEP2E",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MINIMUM_BEP2E_SYMBOL_LEN",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"RELAYERHUB_CONTRACT_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"SLASH_CHANNELID",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"SLASH_CONTRACT_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"STAKING_CHANNELID",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"SYSTEM_REWARD_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TOKEN_HUB_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TOKEN_MANAGER_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TRANSFER_IN_CHANNELID",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TRANSFER_IN_FAILURE_INSUFFICIENT_BALANCE",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TRANSFER_IN_FAILURE_NON_PAYABLE_RECIPIENT",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TRANSFER_IN_FAILURE_TIMEOUT",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TRANSFER_IN_FAILURE_UNBOUND_TOKEN",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TRANSFER_IN_FAILURE_UNKNOWN",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TRANSFER_IN_SUCCESS",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"TRANSFER_OUT_CHANNELID",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"VALIDATOR_CONTRACT_ADDR",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"alreadyInit",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address[]",name:"recipientAddrs",type:"address[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"address[]",name:"refundAddrs",type:"address[]"},{internalType:"uint64",name:"expireTime",type:"uint64"}],name:"batchTransferOutBNB",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"bep2eContractDecimals",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"bep2Symbol",type:"bytes32"},{internalType:"address",name:"contractAddr",type:"address"},{internalType:"uint256",name:"decimals",type:"uint256"}],name:"bindToken",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"bscChainID",outputs:[{internalType:"uint16",name:"",type:"uint16"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"addresspayable",name:"to",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"claimRewards",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"contractAddr",type:"address"}],name:"getBep2SymbolByContractAddr",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"contractAddr",type:"address"}],name:"getBoundBep2Symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"string",name:"bep2Symbol",type:"string"}],name:"getBoundContract",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"bytes32",name:"bep2Symbol",type:"bytes32"}],name:"getContractAddrByBEP2Symbol",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getMiniRelayFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint8",name:"channelId",type:"uint8"},{internalType:"bytes",name:"msgBytes",type:"bytes"}],name:"handleAckPackage",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint8",name:"channelId",type:"uint8"},{internalType:"bytes",name:"msgBytes",type:"bytes"}],name:"handleFailAckPackage",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint8",name:"channelId",type:"uint8"},{internalType:"bytes",name:"msgBytes",type:"bytes"}],name:"handleSynPackage",outputs:[{internalType:"bytes",name:"",type:"bytes"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"init",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"relayFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"contractAddr",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"uint64",name:"expireTime",type:"uint64"}],name:"transferOut",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!0,stateMutability:"payable",type:"function"},{constant:!1,inputs:[{internalType:"bytes32",name:"bep2Symbol",type:"bytes32"},{internalType:"address",name:"contractAddr",type:"address"}],name:"unbindToken",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"string",name:"key",type:"string"},{internalType:"bytes",name:"value",type:"bytes"}],name:"updateParam",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],this.BEP2E=[{type:"constructor",stateMutability:"nonpayable",payable:!1,inputs:[]},{type:"event",name:"Approval",inputs:[{type:"address",name:"owner",internalType:"address",indexed:!0},{type:"address",name:"spender",internalType:"address",indexed:!0},{type:"uint256",name:"value",internalType:"uint256",indexed:!1}],anonymous:!1},{type:"event",name:"OwnershipTransferred",inputs:[{type:"address",name:"previousOwner",internalType:"address",indexed:!0},{type:"address",name:"newOwner",internalType:"address",indexed:!0}],anonymous:!1},{type:"event",name:"Transfer",inputs:[{type:"address",name:"from",internalType:"address",indexed:!0},{type:"address",name:"to",internalType:"address",indexed:!0},{type:"uint256",name:"value",internalType:"uint256",indexed:!1}],anonymous:!1},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint8",name:"",internalType:"uint8"}],name:"_decimals",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"string",name:"",internalType:"string"}],name:"_name",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"string",name:"",internalType:"string"}],name:"_symbol",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"allowance",inputs:[{type:"address",name:"owner",internalType:"address"},{type:"address",name:"spender",internalType:"address"}],constant:!0},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"bool",name:"",internalType:"bool"}],name:"approve",inputs:[{type:"address",name:"spender",internalType:"address"},{type:"uint256",name:"amount",internalType:"uint256"}],constant:!1},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"balanceOf",inputs:[{type:"address",name:"account",internalType:"address"}],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"decimals",inputs:[],constant:!0},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"bool",name:"",internalType:"bool"}],name:"decreaseAllowance",inputs:[{type:"address",name:"spender",internalType:"address"},{type:"uint256",name:"subtractedValue",internalType:"uint256"}],constant:!1},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"address",name:"",internalType:"address"}],name:"getOwner",inputs:[],constant:!0},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"bool",name:"",internalType:"bool"}],name:"increaseAllowance",inputs:[{type:"address",name:"spender",internalType:"address"},{type:"uint256",name:"addedValue",internalType:"uint256"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"bool",name:"",internalType:"bool"}],name:"mint",inputs:[{type:"uint256",name:"amount",internalType:"uint256"}],constant:!1},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"address",name:"",internalType:"address"}],name:"owner",inputs:[],constant:!0},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[],name:"renounceOwnership",inputs:[],constant:!1},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"string",name:"",internalType:"string"}],name:"symbol",inputs:[],constant:!0},{type:"function",stateMutability:"view",payable:!1,outputs:[{type:"uint256",name:"",internalType:"uint256"}],name:"totalSupply",inputs:[],constant:!0},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"bool",name:"",internalType:"bool"}],name:"transfer",inputs:[{type:"address",name:"recipient",internalType:"address"},{type:"uint256",name:"amount",internalType:"uint256"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[{type:"bool",name:"",internalType:"bool"}],name:"transferFrom",inputs:[{type:"address",name:"sender",internalType:"address"},{type:"address",name:"recipient",internalType:"address"},{type:"uint256",name:"amount",internalType:"uint256"}],constant:!1},{type:"function",stateMutability:"nonpayable",payable:!1,outputs:[],name:"transferOwnership",inputs:[{type:"address",name:"newOwner",internalType:"address"}],constant:!1}]},g=function t(){Object(w["a"])(this,t),this.KANAGAWA=[{inputs:[{internalType:"address",name:"firstUser",type:"address"},{internalType:"address",name:"waveContract",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"uint256",name:"id",type:"uint256"},{indexed:!0,internalType:"address",name:"wallet",type:"address"}],name:"Registration",type:"event"},{payable:!0,stateMutability:"payable",type:"fallback"},{constant:!0,inputs:[{internalType:"address",name:"",type:"address"}],name:"IDs",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getHalvedCycle",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getHalvedTimes",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getMaxLevel",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"getReferrer",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getReferrerID",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getReward",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getTotalUsers",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint8",name:"level",type:"uint8"}],name:"getUpgradeFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserEarned",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"getUserID",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserInvited",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserLevel",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserMissed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"userID",type:"uint256"}],name:"getUserWallet",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"getWave",outputs:[{internalType:"contract IWAVE",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"user",type:"address"}],name:"isRegistered",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"referrer",type:"address"}],name:"register",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint8",name:"maxLevel",type:"uint8"}],name:"setMaxLevel",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"upgrade",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"users",outputs:[{internalType:"address",name:"wallet",type:"address"},{internalType:"uint256",name:"referrerID",type:"uint256"},{internalType:"uint8",name:"level",type:"uint8"},{internalType:"uint256",name:"invited",type:"uint256"},{internalType:"uint256",name:"earned",type:"uint256"},{internalType:"uint256",name:"missed",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}]},k=n("99e5"),M=n.n(k),A=n("399f"),x=n.n(A),_=n("bf2b"),S=n("9361");n("ac1f"),n("1276"),n("843c"),n("4d90"),n("498a"),n("5319");function C(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18;if(!t)return"0";t=I(t);var n=t.split("."),a=n[0],i=n[1]||"";if(n.length>2||i.length>e)throw new Error("Cannot parse '".concat(t,"' as bignumber"));return B(a+i.padEnd(e,"0"))}function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:18,n=new x.a(t,10);t=n.toString();var a=t.substring(0,t.length-e)||"0",i=t.substring(t.length-e).padStart(e,"0").substring(0,e);return N("".concat(a,".").concat(i))}function I(t){return t.replace(/,/g,"").trim()}function N(t){return t.replace(/\.?0*$/,"")}function B(t){return t=t.replace(/^0+/,""),""===t?"0":t}var O=n("3055"),R=n.n(O),D={name:"App",data:function(){return{showSnackbar:!1,snackbarTimeout:2e3,snackbarColor:"error",snackbarText:"",feeMessage:"",tabs:["Transfer","Approve"],selectTab:null,web3Handler:null,injectedWeb3:null,web3:null,address:"",tokenHubContractAddress:"0x0000000000000000000000000000000000001004",tokens:[{symbol:"BNB",contract:"0x0000000000000000000000000000000000000000",decimals:18},{symbol:"WAVE",contract:"0x46cbe14f4ab4c665e084a0a868c49098f0ce7704",decimals:18}],dapp:{contract:"0xcf5cb782633f527395d106a4388889e23ea13ddd"},selectToken:null,referrer:"",referrerHex:"",referrerHint:"",balance:"",tokenBalance:"",allowance:"",recipient:"",recipientHex:"",recipientHint:"",amount:"",relayFee:"2000000000000000",gasLimit:"200000",gasPrice:"5000000000"}},watch:{recipient:function(t,e){try{var n=_["decode"](t),a=n.prefix,i=n.words;if("bnb"==a||"tbnb"==a){var s="0x"+S["a"].bytesToHex(_["fromWords"](i));this.recipientHint="↳"+s,this.recipientHex=s}else this.recipientHint=t.length?"Invalid Address":"",this.recipientHex=""}catch(r){this.recipientHint=t.length?"Invalid Address":"",this.recipientHex=""}},selectToken:function(t){this.amount="",this.recipient="",this.allowance="",this.balance="",this.tokenBalance="",this.selectTab=this.tabs[0],this.setUIOfTokenData()},selectTab:function(t){this.amount="",this.recipient=""}},beforeCreate:function(){},created:function(){this.selectToken=this.tokens[1];var t=this.$route.query.ref;t?(this.referrer=t,console.log("Referrer: #",t)):this.referrer="0xf5eb49fdfda708b0f07f04c46d0320bc6315a615",console.log("Referrer: #",this.referrer)},mounted:function(){var t=this;this.web3Handler=setInterval((function(){(window.web3||window.ethereum)&&(clearInterval(t.web3Handler),t.login())}),500),setInterval((function(){t.setUIOfTokenData()}),5e3)},methods:{doCopy:function(t){this.$copyText(t).then((function(t){console.log(t)}),(function(t){alert("Can not copy"),console.log(t)}))},walletPicker:function(){var t=this;R.a.isMath()&&R.a.walletPicker("BINANCE").then((function(e){t.recipient=e.address}))},isBNBToken:function(){return!!(this.tokens&&this.tokens.length>0&&this.selectToken)&&this.selectToken.symbol==this.tokens[0].symbol},getTokenBalanceMessage:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return this.isBNBToken()?this.balance?"↳Balance ".concat(this.balance," ").concat(this.selectToken.symbol):"":t?this.tokenBalance?"↳Balance ".concat(this.tokenBalance," ").concat(this.selectToken.symbol):"":this.tokenBalance?"↳Available ".concat(this.allowance," ").concat(this.selectToken.symbol,", Total ").concat(this.tokenBalance," ").concat(this.selectToken.symbol):""},login:function(){var t=this;window.web3?(this.injectedWeb3=window.web3,this.injectedWeb3.currentProvider.enable().then((function(e){t.address=e[0],t.web3=new M.a(t.injectedWeb3.currentProvider)}))):alert("请使用BSC钱包登录!")},setUIOfDappData:function(){var t=new x.a(this.relayFee),e=new x.a(this.gasPrice),n=new x.a(this.gasLimit);if(this.feeMessage="".concat(E(e.mul(n).add(t).toString(),this.tokens[0].decimals)," ").concat(this.tokens[0].symbol),this.web3)new this.web3.eth.Contract((new g).KANAGAWA,this.dapp.contract)},setUIOfTokenData:function(){var t=this,e=new x.a(this.relayFee),n=new x.a(this.gasPrice),a=new x.a(this.gasLimit);if(this.feeMessage="".concat(E(n.mul(a).add(e).toString(),this.tokens[0].decimals)," ").concat(this.tokens[0].symbol),this.web3&&(this.web3.eth.getBalance(this.address).then((function(e){t.balance=E(e,t.tokens[0].decimals)})),!this.isBNBToken())){var i=new this.web3.eth.Contract((new v).BEP2E,this.selectToken.contract),s={from:this.address,to:this.selectToken.contract,data:i.methods.balanceOf(this.address).encodeABI()};this.web3.eth.call(s,(function(e,n){e||(t.tokenBalance=E(new x.a(S["a"].hexToBytes(n),"hex").toString(),t.selectToken.decimals))}));var r={from:this.address,to:this.selectToken.contract,data:i.methods.allowance(this.address,this.tokenHubContractAddress).encodeABI()};this.web3.eth.call(r,(function(e,n){e||(t.allowance=E(new x.a(S["a"].hexToBytes(n),"hex").toString(),t.selectToken.decimals))}))}},sendTransaction:function(){var t=this,e=new x.a(C(this.amount,this.selectToken.decimals)),n=new x.a(this.relayFee);if(!this.isBNBToken()){var a=new x.a(C(this.allowance.length?this.allowance:"0",this.selectToken.decimals));if(-1==a.cmp(e))return this.showSnackbar=!0,this.snackbarColor="error",void(this.snackbarText=this.selectToken.symbol+" allowance insufficient")}var i=this.isBNBToken()?e.add(n):n,s=new x.a(this.gasLimit),r=new x.a(this.gasPrice),u=s.mul(r).add(i),p=new x.a(C(this.balance.length?this.balance:"0",this.tokens[0].decimals));if(-1==p.cmp(u))return this.showSnackbar=!0,this.snackbarColor="error",void(this.snackbarText=this.tokens[0].symbol+" balance insufficient");var o=new this.web3.eth.Contract((new v).TOKEN_HUB,this.tokenHubContractAddress),l=o.methods.transferOut(this.selectToken.contract,this.recipientHex,e.toString(),String(Date.parse(new Date)/1e3+3600)).encodeABI(),y={from:this.address,to:this.tokenHubContractAddress,value:i.toString(),gas:s.toString(),gasPrice:r.toString(),data:l};console.log(y),this.web3.eth.sendTransaction(y,(function(e,n){console.log(e,n),e||!n||"string"!=typeof n?(t.showSnackbar=!0,t.snackbarColor="error",t.snackbarText=e?e.message:"Failed to send transaction"):(t.showSnackbar=!0,t.snackbarColor="success",t.snackbarText="Successfully")}))},apporveTransaction:function(){var t=this,e=new x.a(C(this.amount,this.selectToken.decimals));if(!this.isBNBToken()){var n=new x.a(C(this.tokenBalance.length?this.tokenBalance:"0",this.selectToken.decimals));if(-1==n.cmp(e))return this.showSnackbar=!0,this.snackbarColor="error",void(this.snackbarText=this.selectToken.symbol+" balance insufficient")}var a=new x.a(this.gasLimit),i=new x.a(this.gasPrice),s=a.mul(i),r=new x.a(C(this.balance.length?this.balance:"0",this.tokens[0].decimals));if(-1==r.cmp(s))return this.showSnackbar=!0,this.snackbarColor="error",void(this.snackbarText=this.tokens[0].symbol+" balance insufficient");var u=new this.web3.eth.Contract((new v).BEP2E,this.selectToken.contract),p=u.methods.approve(this.tokenHubContractAddress,e.toString()).encodeABI(),o={from:this.address,to:this.selectToken.contract,gas:a.toString(),gasPrice:i.toString(),data:p};this.web3.eth.sendTransaction(o,(function(e,n){e?(t.showSnackbar=!0,t.snackbarColor="error",t.snackbarText=e.message):(console.log(n),t.showSnackbar=!0,t.snackbarColor="success",t.snackbarText="Successfully")}))},registerTransaction:function(){var t=this,e=new x.a(5e5),n=new x.a(this.gasPrice),a=(e.mul(n),new x.a(C(this.balance.length?this.balance:"0",this.tokens[0].decimals)),new this.web3.eth.Contract((new g).KANAGAWA,this.dapp.contract)),i=a.methods.register(this.referrer).encodeABI(),s={from:this.address,to:this.dapp.contract,gas:e.toString(),gasPrice:n.toString(),data:i};this.web3.eth.sendTransaction(s,(function(e,n){e?(t.showSnackbar=!0,t.snackbarColor="error",t.snackbarText=e.message):(console.log(n),t.showSnackbar=!0,t.snackbarColor="success",t.snackbarText="Successfully")}))},upgradeTransaction:function(){var t=this,e=new x.a(5e5),n=new x.a(this.gasPrice),a=(e.mul(n),new x.a(C(this.balance.length?this.balance:"0",this.tokens[0].decimals)),new this.web3.eth.Contract((new g).KANAGAWA,this.dapp.contract)),i=a.methods.upgrade().encodeABI(),s={from:this.address,to:this.dapp.contract,gas:e.toString(),gasPrice:n.toString(),data:i};this.web3.eth.sendTransaction(s,(function(e,n){e?(t.showSnackbar=!0,t.snackbarColor="error",t.snackbarText=e.message):(console.log(n),t.showSnackbar=!0,t.snackbarColor="success",t.snackbarText="Successfully")}))}}},L=D,P=n("6544"),H=n.n(P),U=n("7496"),F=n("40dc"),j=n("8336"),V=n("b0af"),W=n("99d9"),K=n("132d"),G=n("f6c4"),Y=n("2db4"),$=n("2fa4"),q=n("8654"),X=Object(p["a"])(L,T,h,!1,null,null,null),J=X.exports;H()(X,{VApp:U["a"],VAppBar:F["a"],VBtn:j["a"],VCard:V["a"],VCardActions:W["a"],VCardText:W["b"],VIcon:K["a"],VMain:G["a"],VSnackbar:Y["a"],VSpacer:$["a"],VTextField:q["a"]}),a["a"].use(f["a"]);var Z=[{path:"/",name:"Home",component:J},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],z=new f["a"]({mode:"history",base:"",routes:Z}),Q=z,tt=n("4eb5"),et=n.n(tt);et.a.config.autoSetContainer=!0,a["a"].use(et.a),a["a"].prototype.axios=m.a,a["a"].config.productionTip=!1,new a["a"]({vuetify:d,router:Q,render:function(t){return t(l)}}).$mount("#app")},6:function(t,e){},7:function(t,e){},8:function(t,e){},9:function(t,e){},9361:function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return s}));var a=n("d4ec"),i=n("bee2"),s=(n("d3b7"),n("25f0"),n("a15b"),function(){function e(){Object(a["a"])(this,e)}return Object(i["a"])(e,null,[{key:"hexToBytes",value:function(e){for(var n=[],a=0;a<e.length;a+=2)n.push(parseInt(e.substr(a,2),16));return t.from(n)}},{key:"bytesToHex",value:function(t){for(var e=[],n=0;n<t.length;n++)e.push((t[n]>>>4).toString(16)),e.push((15&t[n]).toString(16));return e.join("").toLowerCase()}}]),e}())}).call(this,n("b639").Buffer)}});
//# sourceMappingURL=app.eabc72ec.js.map