(()=>{"use strict";var e,f,a,t,r,c={},b={};function d(e){var f=b[e];if(void 0!==f)return f.exports;var a=b[e]={id:e,loaded:!1,exports:{}};return c[e].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports}d.m=c,d.c=b,e=[],d.O=(f,a,t,r)=>{if(!a){var c=1/0;for(i=0;i<e.length;i++){a=e[i][0],t=e[i][1],r=e[i][2];for(var b=!0,o=0;o<a.length;o++)(!1&r||c>=r)&&Object.keys(d.O).every((e=>d.O[e](a[o])))?a.splice(o--,1):(b=!1,r<c&&(c=r));if(b){e.splice(i--,1);var n=t();void 0!==n&&(f=n)}}return f}r=r||0;for(var i=e.length;i>0&&e[i-1][2]>r;i--)e[i]=e[i-1];e[i]=[a,t,r]},d.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return d.d(f,{a:f}),f},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);d.r(r);var c={};f=f||[null,a({}),a([]),a(a)];for(var b=2&t&&e;"object"==typeof b&&!~f.indexOf(b);b=a(b))Object.getOwnPropertyNames(b).forEach((f=>c[f]=()=>e[f]));return c.default=()=>e,d.d(r,c),r},d.d=(e,f)=>{for(var a in f)d.o(f,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((f,a)=>(d.f[a](e,f),f)),[])),d.u=e=>"assets/js/"+({53:"935f2afb",619:"76bc0120",676:"0fe9f87e",948:"8717b14a",1450:"07bbb041",1914:"d9f32620",2059:"630d0af1",2148:"465b0848",2267:"59362658",2362:"e273c56f",2388:"a2ceace0",2535:"814f3328",2633:"24589c13",2745:"b07fe187",2767:"16b55674",2820:"048484a0",2923:"f9d25b73",3007:"5e19fab5",3014:"804acb93",3036:"9afafa5d",3085:"1f391b9e",3089:"a6aa9e1f",3333:"c578aabb",3514:"73664a40",3608:"9e4087bc",3761:"068bf856",4013:"01a85c17",4195:"c4f5d8e4",4639:"0d465a3a",4787:"3a38d7be",5401:"83386074",5505:"b6a1c3df",5679:"e74de920",5702:"9a5d283f",6059:"2b7408a3",6071:"65e4b5fb",6103:"ccc49370",6223:"663b8c98",6249:"f9c8e1cd",6836:"d31db912",6881:"0dd29ccb",7414:"393be207",7539:"743fa127",7739:"2f0eb6a2",7918:"17896441",8044:"9c1f7c2f",8141:"e83c7d8b",8610:"6875c492",8636:"f4f34a3a",8785:"e1782255",8873:"e64fe6dd",9003:"925b3f96",9452:"909f6b99",9514:"1be78505",9642:"7661071f",9671:"0e384e19",9817:"14eb3368"}[e]||e)+"."+{53:"93350316",619:"2dbb1812",676:"609c1c50",948:"b3272d5a",1450:"39be1b86",1506:"c886e9bc",1914:"669e4b4f",2059:"5a0f2b99",2148:"7ae54098",2267:"2490ea0b",2362:"5c0ffbed",2388:"653ffe2b",2529:"c6853891",2535:"10751296",2633:"925db4e0",2745:"581cd69f",2767:"4817e81e",2820:"3d42b64f",2923:"4f34b478",3007:"6d86ee27",3014:"fd5be07f",3036:"91f68c45",3085:"799926eb",3089:"5c46ae29",3333:"83885684",3514:"5cd6a8d3",3608:"8e7e9d2c",3761:"cb44daba",4013:"d117b03d",4195:"a4c193e0",4639:"b31175fb",4787:"50d307a4",4972:"00e7a977",5401:"d59c8e49",5505:"0f4f41f4",5679:"07b79995",5702:"ff060b4b",6059:"7cc1de09",6071:"076b02fd",6103:"aec756c7",6223:"c8577331",6249:"590c6d6a",6836:"0e728c89",6881:"16a992ae",7414:"cc55ebce",7539:"4089cd00",7739:"2787c301",7918:"d3488be3",8044:"883a4958",8141:"1dee9fba",8610:"9da643ea",8636:"405883e3",8785:"e5e9ad35",8873:"51b9051e",9003:"ab206f18",9452:"202f1de6",9514:"71069629",9642:"558c2bda",9671:"880842c1",9817:"12a21c11"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),t={},r="unity-dmi-reader:",d.l=(e,f,a,c)=>{if(t[e])t[e].push(f);else{var b,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){b=u;break}}b||(o=!0,(b=document.createElement("script")).charset="utf-8",b.timeout=120,d.nc&&b.setAttribute("nonce",d.nc),b.setAttribute("data-webpack",r+a),b.src=e),t[e]=[f];var l=(f,a)=>{b.onerror=b.onload=null,clearTimeout(s);var r=t[e];if(delete t[e],b.parentNode&&b.parentNode.removeChild(b),r&&r.forEach((e=>e(a))),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:b}),12e4);b.onerror=l.bind(null,b.onerror),b.onload=l.bind(null,b.onload),o&&document.head.appendChild(b)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/UnityDmiReader/",d.gca=function(e){return e={17896441:"7918",59362658:"2267",83386074:"5401","935f2afb":"53","76bc0120":"619","0fe9f87e":"676","8717b14a":"948","07bbb041":"1450",d9f32620:"1914","630d0af1":"2059","465b0848":"2148",e273c56f:"2362",a2ceace0:"2388","814f3328":"2535","24589c13":"2633",b07fe187:"2745","16b55674":"2767","048484a0":"2820",f9d25b73:"2923","5e19fab5":"3007","804acb93":"3014","9afafa5d":"3036","1f391b9e":"3085",a6aa9e1f:"3089",c578aabb:"3333","73664a40":"3514","9e4087bc":"3608","068bf856":"3761","01a85c17":"4013",c4f5d8e4:"4195","0d465a3a":"4639","3a38d7be":"4787",b6a1c3df:"5505",e74de920:"5679","9a5d283f":"5702","2b7408a3":"6059","65e4b5fb":"6071",ccc49370:"6103","663b8c98":"6223",f9c8e1cd:"6249",d31db912:"6836","0dd29ccb":"6881","393be207":"7414","743fa127":"7539","2f0eb6a2":"7739","9c1f7c2f":"8044",e83c7d8b:"8141","6875c492":"8610",f4f34a3a:"8636",e1782255:"8785",e64fe6dd:"8873","925b3f96":"9003","909f6b99":"9452","1be78505":"9514","7661071f":"9642","0e384e19":"9671","14eb3368":"9817"}[e]||e,d.p+d.u(e)},(()=>{var e={1303:0,532:0};d.f.j=(f,a)=>{var t=d.o(e,f)?e[f]:void 0;if(0!==t)if(t)a.push(t[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var r=new Promise(((a,r)=>t=e[f]=[a,r]));a.push(t[2]=r);var c=d.p+d.u(f),b=new Error;d.l(c,(a=>{if(d.o(e,f)&&(0!==(t=e[f])&&(e[f]=void 0),t)){var r=a&&("load"===a.type?"missing":a.type),c=a&&a.target&&a.target.src;b.message="Loading chunk "+f+" failed.\n("+r+": "+c+")",b.name="ChunkLoadError",b.type=r,b.request=c,t[1](b)}}),"chunk-"+f,f)}},d.O.j=f=>0===e[f];var f=(f,a)=>{var t,r,c=a[0],b=a[1],o=a[2],n=0;if(c.some((f=>0!==e[f]))){for(t in b)d.o(b,t)&&(d.m[t]=b[t]);if(o)var i=o(d)}for(f&&f(a);n<c.length;n++)r=c[n],d.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return d.O(i)},a=self.webpackChunkunity_dmi_reader=self.webpackChunkunity_dmi_reader||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();