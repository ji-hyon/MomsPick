if(!self.define){let e,a={};const i=(i,s)=>(i=new URL(i+".js",s).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let t={};const r=e=>i(e,c),d={module:{uri:c},exports:t,require:r};a[c]=Promise.all(s.map((e=>d[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"256ae7325a7d92b96c48b9badaa8ba1c"},{url:"/_next/static/IeQfiGpyRaCL6d_EeG41W/_buildManifest.js",revision:"15e671aaf852983909bd2fe1385b56f4"},{url:"/_next/static/IeQfiGpyRaCL6d_EeG41W/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/00cbbcb7-d7035adc3a868ae4.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/12038df7-a1f7818c8218fa23.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/247-2268853cbb73d4ae.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/282-7322f591530d28ae.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/326-dc6936c9ffb0b181.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/3627521c-95ad761350078ec8.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/446-b2e8dcc23419ae36.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/472-e744e17e5dd48b01.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/534-a43b6c50c81bb470.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/537-45c9916982f3cdf9.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/575-5362965000c147f0.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/607-9053b3d5463d3293.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/630-58e0eac597be575e.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/660-a110911b428706d9.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/673-bec1198ae49a10c4.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/71-a6e1683b26cc1af4.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/715-f6a2de2e74cd9064.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/737dfa3e-ffdfd64bb3b0dab0.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/848-76ae0447fa25ac10.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/8dc5345f-f6b99ddd0867042f.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/9081a741-2d9a1df7fea9cebd.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/914-f4528ca87d084d99.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/9761e08b-075d273d8e2c8f33.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(auth)/auth/babyauth/layout-ad5aee573b357d92.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(auth)/auth/babyauth/page-2274b0ee5e79e0cd.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(auth)/auth/layout-c49c6ab3841e774d.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(auth)/auth/page-3aa18d6a6a0638ab.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(auth)/mypage/page-61a7d64189625122.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(chat)/chat/page-2280a706994b26a8.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(month)/month/layout-5460457349a90bcc.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(month)/month/monthinfo/layout-293a7abc164c0094.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(month)/month/monthinfo/page-1628de01eede09a0.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(month)/month/page-d009fe4c62ba4069.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(trade)/trade/layout-da7d6ccccd3bec3c.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(trade)/trade/page-c28ae51e94593a85.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/(trade)/trade/search/page-92a54edede920945.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/_not-found-6f37e6b639a424f8.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/layout-3c3ebc6ca5959df4.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/app/page-c107f75916470fd8.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/fd9d1056-efcf9f1ae91b2ed4.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/framework-43665103d101a22d.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/main-0c30f2e81b753e0e.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/main-app-1106e4e20d7fb6c4.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/pages/_app-451d704a741dc8a8.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/pages/_error-d6885ef27f2c5e3d.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-41f365839bbc2eec.js",revision:"IeQfiGpyRaCL6d_EeG41W"},{url:"/_next/static/css/64825d6dc4da6e17.css",revision:"64825d6dc4da6e17"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/boy.6dacdd1a.png",revision:"fbc98f957f50701035bb1c6e3dc16037"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/girl.f2ecca4a.png",revision:"921545626ad0e787fa9cb293cdad65b0"},{url:"/_next/static/media/marker.85ec56cc.png",revision:"d9ecc7853889a95f540322b2b74459d5"},{url:"/_next/static/media/profile.e7b417cb.png",revision:"e5a993225de197ff18778dcafba8436c"},{url:"/_next/static/media/유모차.834f4d22.png",revision:"cc75dff3c5d2b6680852f4d7ff42688b"},{url:"/asd.gif",revision:"288f312a5b8caa8807e39003cc4ae6ec"},{url:"/boy.png",revision:"fbc98f957f50701035bb1c6e3dc16037"},{url:"/girl.png",revision:"921545626ad0e787fa9cb293cdad65b0"},{url:"/icon-192x192.png",revision:"5bb1b9774f62f662578ca74b709e60be"},{url:"/icon-256x256.png",revision:"75c5446a4aec36a2be5d04ceb65b22e2"},{url:"/icon-384x384.png",revision:"a3e01163189a14601f0b077f1b12145d"},{url:"/icon-512x512.png",revision:"0f94808f49a2e96f836037f44d1b39fe"},{url:"/icon_remove_circle.svg",revision:"0cdcb35499d797e09bc8a2fb8fb4dbba"},{url:"/manifest.json",revision:"85cc1bb0390379a31be2555830813482"},{url:"/marker.png",revision:"d9ecc7853889a95f540322b2b74459d5"},{url:"/month/banner1.png",revision:"5ea8c6f1255e95830b68d1f30fe266b3"},{url:"/month/banner2.png",revision:"7291709eddaf2cadbe9cdfbca131b586"},{url:"/month/box.png",revision:"1318c478046aacd3241a2824abab2aa5"},{url:"/month/box1.png",revision:"9685b502c8a6ca844413e9ee6212dbfc"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/nezko.jfif",revision:"68a26d0c394b7a7171c6bedfc014515c"},{url:"/pin.svg",revision:"a13b5300c44d29b1ef4f09359af6650b"},{url:"/profile.png",revision:"e5a993225de197ff18778dcafba8436c"},{url:"/rengoku.gif",revision:"6eda67aeef4a7cddc9bc8030539f59af"},{url:"/search.svg",revision:"66683751573bed95c50e3ae1847ace94"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/기저귀.png",revision:"3aad384d7fcb8a318a8faa06ce1a7e20"},{url:"/기타.png",revision:"4496b923d1d65764fb8713d14292515b"},{url:"/목욕용품.png",revision:"63306de19b780ab18bdfeca7ca103070"},{url:"/수유용품.png",revision:"fefefce7ad1e5e3fe407340cbecac410"},{url:"/외출용품.png",revision:"4bc176aff32819f57b9c53836fd2ba58"},{url:"/유모차.png",revision:"cc75dff3c5d2b6680852f4d7ff42688b"},{url:"/의류.png",revision:"ecf4074249ccc8e75bc0507e3d29e74e"},{url:"/이유용품.png",revision:"8d0f34f8ca4c4c9025cd911a173b792c"},{url:"/임산부.png",revision:"de4de6f72464572ca994debea7686e78"},{url:"/장난감.png",revision:"083365fcf0858a4b167a2d920e1e8a0f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:s})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
