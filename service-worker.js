!function(){"use strict";const e=["client/client.642c4b15.js","client/markmap.e0a89f84.js","client/index.c7e4416a.js","client/about.b4180363.js","client/usage.44c91fd8.js","client/repl.e2ae380a.js","client/codemirror.d7245e32.js","client/markdown.641b9f51.js","client/client.52abed7a.js"].concat(["service-worker-index.html","donate/alipay.svg","donate/paypal.svg","donate/qr_alipay.png","donate/qr_wechat.png","donate/wechat.svg","favicon.png","global.css","logo-192.png","logo-512.png","manifest.json","markmap.svg"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586505007887").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586505007887"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&t.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586505007887").then(async t=>{try{const a=await fetch(e.request);return t.put(e.request,a.clone()),a}catch(a){const n=await t.match(e.request);if(n)return n;throw a}}))))})}();
