if(!self.define){let e,n={};const s=(s,i)=>(s=new URL(s+".js",i).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let c={};const a=e=>s(e,r),o={module:{uri:r},exports:c,require:a};n[r]=Promise.all(i.map((e=>o[e]||a(e)))).then((e=>(f(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/GT-America-Standard-Bold-Trial-BSxVjWS5.woff2",revision:null},{url:"assets/GT-America-Standard-Medium-Trial-CWL3jY6u.woff2",revision:null},{url:"assets/GT-America-Standard-Regular-Trial-BT6uWkjE.woff2",revision:null},{url:"assets/index-CcNctpEe.css",revision:null},{url:"assets/workbox-window.prod.es5-D5gOYdM7.js",revision:null},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"favicons/android-chrome-192x192.png",revision:"fb56335e361b7b1646a9819f5f4b081b"},{url:"favicons/android-chrome-512x512.png",revision:"b2ec7f6dff138080bfc982fe231c6f71"},{url:"favicons/apple-touch-icon.png",revision:"f968a5b435398ca263bd7e2a7dfdff34"},{url:"favicons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"favicons/favicon-16x16.png",revision:"a539381f9e8ecf842542d95f707af6be"},{url:"favicons/favicon-32x32.png",revision:"77fe2df4c5dcb5c824f141a9c013b8db"},{url:"favicons/favicon.ico",revision:"4572a4c8551580415bbcb270b6894e1a"},{url:"favicons/mstile-144x144.png",revision:"31a211ea0eb3de8d191ddcab3d20283a"},{url:"favicons/mstile-150x150.png",revision:"6fbffd25f3624cd1cb01e603c2869673"},{url:"favicons/mstile-310x150.png",revision:"7f3fecd55049c12f29cc1e373179fb19"},{url:"favicons/mstile-310x310.png",revision:"0e3b9a1e3f541905d8758677af5c1e1d"},{url:"favicons/mstile-70x70.png",revision:"38046f91060570474d74b41c2a24e536"},{url:"favicons/safari-pinned-tab.svg",revision:"9f2541cce0bfef57b3f16724db0d8641"},{url:"favicons/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"index.html",revision:"3437e79ab4ddfb43e653de952510ae06"},{url:"manifest.webmanifest",revision:"44e11835e12c4af1f2ba96bd1f904b90"},{url:"screenshots/B.1.png",revision:"8748f5613f52f75f2b38e2d8a6b6d701"},{url:"screenshots/B.2.1.png",revision:"25b120c02a479b131b1680272b222126"},{url:"screenshots/B.2.png",revision:"af226b5460615a2132f3d2a72d3106dd"},{url:"screenshots/B.4.png",revision:"f10c582a7ae610e912fc30ea2b6dbb77"},{url:"screenshots/B.6.png",revision:"3256df8b74dfd72e10b9bfa854ef5f83"},{url:"screenshots/png(1).png",revision:"0052483acbbba9e67fed1aaedc3674b2"},{url:"screenshots/png(2).png",revision:"c2e43a1ffbfb1323f202bd1d25b849b6"},{url:"screenshots/png(3).png",revision:"9b8e0d0466c6821e9a913ecb3aee34e1"},{url:"screenshots/png(4).png",revision:"124b738a5c1b71968b13116ddb24c02b"},{url:"screenshots/png(5).png",revision:"258fb9bfac25adf5d8017413f57d251a"},{url:"screenshots/png(6).png",revision:"29069ebcf0704d8270d3c93e47d0d44d"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"favicons/android-chrome-192x192.png",revision:"fb56335e361b7b1646a9819f5f4b081b"},{url:"favicons/android-chrome-512x512.png",revision:"b2ec7f6dff138080bfc982fe231c6f71"},{url:"favicons/apple-touch-icon.png",revision:"f968a5b435398ca263bd7e2a7dfdff34"},{url:"favicons/browserconfig.xml",revision:"a493ba0aa0b8ec8068d786d7248bb92c"},{url:"favicons/favicon-16x16.png",revision:"a539381f9e8ecf842542d95f707af6be"},{url:"favicons/favicon-32x32.png",revision:"77fe2df4c5dcb5c824f141a9c013b8db"},{url:"favicons/favicon.ico",revision:"4572a4c8551580415bbcb270b6894e1a"},{url:"favicons/mstile-144x144.png",revision:"31a211ea0eb3de8d191ddcab3d20283a"},{url:"favicons/mstile-150x150.png",revision:"6fbffd25f3624cd1cb01e603c2869673"},{url:"favicons/mstile-310x150.png",revision:"7f3fecd55049c12f29cc1e373179fb19"},{url:"favicons/mstile-310x310.png",revision:"0e3b9a1e3f541905d8758677af5c1e1d"},{url:"favicons/mstile-70x70.png",revision:"38046f91060570474d74b41c2a24e536"},{url:"favicons/safari-pinned-tab.svg",revision:"9f2541cce0bfef57b3f16724db0d8641"},{url:"favicons/site.webmanifest",revision:"b9aa277fcfc34c31db6c7a7ea3469b8c"},{url:"screenshots/B.1.png",revision:"8748f5613f52f75f2b38e2d8a6b6d701"},{url:"screenshots/B.2.1.png",revision:"25b120c02a479b131b1680272b222126"},{url:"screenshots/B.2.png",revision:"af226b5460615a2132f3d2a72d3106dd"},{url:"screenshots/B.4.png",revision:"f10c582a7ae610e912fc30ea2b6dbb77"},{url:"screenshots/B.6.png",revision:"3256df8b74dfd72e10b9bfa854ef5f83"},{url:"screenshots/png(1).png",revision:"0052483acbbba9e67fed1aaedc3674b2"},{url:"screenshots/png(2).png",revision:"c2e43a1ffbfb1323f202bd1d25b849b6"},{url:"screenshots/png(3).png",revision:"9b8e0d0466c6821e9a913ecb3aee34e1"},{url:"screenshots/png(4).png",revision:"124b738a5c1b71968b13116ddb24c02b"},{url:"screenshots/png(5).png",revision:"258fb9bfac25adf5d8017413f57d251a"},{url:"screenshots/png(6).png",revision:"29069ebcf0704d8270d3c93e47d0d44d"},{url:"manifest.webmanifest",revision:"44e11835e12c4af1f2ba96bd1f904b90"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
