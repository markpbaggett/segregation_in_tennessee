!function(){"use strict";var e,t,n,r,o,i,u,c,a,f,d,l,s={},b={};function p(e){var t=b[e];if(void 0!==t)return t.exports;var n=b[e]={id:e,loaded:!1,exports:{}},r=!0;try{s[e].call(n.exports,n,n.exports,p),r=!1}finally{r&&delete b[e]}return n.loaded=!0,n.exports}p.m=s,e=[],p.O=function(t,n,r,o){if(n){o=o||0;for(var i=e.length;i>0&&e[i-1][2]>o;i--)e[i]=e[i-1];e[i]=[n,r,o];return}for(var u=1/0,i=0;i<e.length;i++){for(var n=e[i][0],r=e[i][1],o=e[i][2],c=!0,a=0;a<n.length;a++)u>=o&&Object.keys(p.O).every(function(e){return p.O[e](n[a])})?n.splice(a--,1):(c=!1,o<u&&(u=o));if(c){e.splice(i--,1);var f=r();void 0!==f&&(t=f)}}return t},p.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return p.d(t,{a:t}),t},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},p.t=function(e,r){if(1&r&&(e=this(e)),8&r||"object"==typeof e&&e&&(4&r&&e.__esModule||16&r&&"function"==typeof e.then))return e;var o=Object.create(null);p.r(o);var i={};t=t||[null,n({}),n([]),n(n)];for(var u=2&r&&e;"object"==typeof u&&!~t.indexOf(u);u=n(u))Object.getOwnPropertyNames(u).forEach(function(t){i[t]=function(){return e[t]}});return i.default=function(){return e},p.d(o,i),o},p.d=function(e,t){for(var n in t)p.o(t,n)&&!p.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},p.f={},p.e=function(e){return Promise.all(Object.keys(p.f).reduce(function(t,n){return p.f[n](e,t),t},[]))},p.u=function(e){return 897===e?"static/chunks/897-f76c9d1fe2228ef3.js":447===e?"static/chunks/447-ef55b5272dfd3bb6.js":"static/chunks/"+(({269:"0b7b90cd",318:"8eb10ab0"})[e]||e)+"."+({88:"aa0ad4d4f8173abc",119:"146a82e362ea7435",120:"3b5c649b2cf22f3f",144:"95052c0e326c12c9",148:"d965e319ec49e66c",232:"1999cc3389af0177",269:"b3b26a53b6f92b09",318:"681b94db0cbdd5b2",371:"e8f6e363db29601b",490:"53bbee9a10b945ad",856:"2b9267eaa2bf08ad",881:"c96385de62c3e395",940:"5f99e3563a9e46e8"})[e]+".js"},p.miniCssF=function(e){return"static/css/"+({148:"d06fe514b27d96f4",177:"ceeb0b88c1965bb8",405:"929344633bfd302f",538:"8e64e1d74e64e43b",888:"4e82322a0083da7c"})[e]+".css"},p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},o="_N_E:",p.l=function(e,t,n,i){if(r[e]){r[e].push(t);return}if(void 0!==n)for(var u,c,a=document.getElementsByTagName("script"),f=0;f<a.length;f++){var d=a[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==o+n){u=d;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,p.nc&&u.setAttribute("nonce",p.nc),u.setAttribute("data-webpack",o+n),u.src=p.tu(e)),r[e]=[t];var l=function(t,n){u.onerror=u.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach(function(e){return e(n)}),t)return t(n)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=l.bind(null,u.onerror),u.onload=l.bind(null,u.onload),c&&document.head.appendChild(u)},p.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},p.tt=function(){return void 0===i&&(i={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(i=trustedTypes.createPolicy("nextjs#bundler",i))),i},p.tu=function(e){return p.tt().createScriptURL(e)},p.p="/segregation_in_tennessee/_next/",u=function(e,t,n,r){var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,a=Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.type=u,a.request=c,o.parentNode.removeChild(o),r(a)}},o.href=t,document.head.appendChild(o),o},c=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}for(var u=document.getElementsByTagName("style"),r=0;r<u.length;r++){var o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},a={272:0},p.f.miniCss=function(e,t){a[e]?t.push(a[e]):0!==a[e]&&({148:1})[e]&&t.push(a[e]=new Promise(function(t,n){var r=p.miniCssF(e),o=p.p+r;if(c(r,o))return t();u(e,o,t,n)}).then(function(){a[e]=0},function(t){throw delete a[e],t}))},f={272:0},p.f.j=function(e,t){var n=p.o(f,e)?f[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(272!=e){var r=new Promise(function(t,r){n=f[e]=[t,r]});t.push(n[2]=r);var o=p.p+p.u(e),i=Error();p.l(o,function(t){if(p.o(f,e)&&(0!==(n=f[e])&&(f[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}},"chunk-"+e,e)}else f[e]=0}},p.O.j=function(e){return 0===f[e]},d=function(e,t){var n,r,o=t[0],i=t[1],u=t[2],c=0;if(o.some(function(e){return 0!==f[e]})){for(n in i)p.o(i,n)&&(p.m[n]=i[n]);if(u)var a=u(p)}for(e&&e(t);c<o.length;c++)r=o[c],p.o(f,r)&&f[r]&&f[r][0](),f[r]=0;return p.O(a)},(l=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(d.bind(null,0)),l.push=d.bind(null,l.push.bind(l)),p.nc=void 0}();