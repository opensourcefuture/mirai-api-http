/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "7b0c6094189feee59311b473e9b738cc"
  },
  {
    "url": "adapter/Adapter.html",
    "revision": "8542d53de3eed7a658ad9feb90ddd2c5"
  },
  {
    "url": "adapter/CustomizedAdapter.html",
    "revision": "7cf119e2054e83214851308d77ff7394"
  },
  {
    "url": "adapter/HttpAdapter.html",
    "revision": "f04a0eb521913c8a280d549e06b920c9"
  },
  {
    "url": "adapter/ReverseWebsocketAdapter.html",
    "revision": "ba7dc1f94c8eaec227ac48d115bb6035"
  },
  {
    "url": "adapter/WebhookAdapter.html",
    "revision": "4aee10ffbebfd010857337a7d806f172"
  },
  {
    "url": "adapter/WebsocketAdapter.html",
    "revision": "058864c26add24d6c99fcd67eacaec5b"
  },
  {
    "url": "api/API.html",
    "revision": "f02cd9e1cb761293b3b584379a366a30"
  },
  {
    "url": "api/EventType.html",
    "revision": "706d4379003474dfa11ea08c8e48ae73"
  },
  {
    "url": "api/MessageType.html",
    "revision": "f91dc2fde4dd5dde299466481c35aacc"
  },
  {
    "url": "assets/css/0.styles.96f1c4e5.css",
    "revision": "b7f144b0330972e00049a38294438812"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.14b72824.js",
    "revision": "1a57e47f333b5b31e74d0da23b3e08ba"
  },
  {
    "url": "assets/js/11.bbd0a4bb.js",
    "revision": "1364d96fe29076bad89d3739fc134d00"
  },
  {
    "url": "assets/js/12.0e498b42.js",
    "revision": "abc9593af89d60ec36024f31528c5952"
  },
  {
    "url": "assets/js/13.f34ef0ae.js",
    "revision": "705ba36737da75a9b517d124ba8697e0"
  },
  {
    "url": "assets/js/14.2f9d8ba0.js",
    "revision": "eff2b345c91cc3a2ea716ab295260208"
  },
  {
    "url": "assets/js/15.d722f267.js",
    "revision": "bb3e48192579b918a732c85550590d4d"
  },
  {
    "url": "assets/js/16.dcee8ece.js",
    "revision": "80252591b8a754a8fcdfba314f8e07a2"
  },
  {
    "url": "assets/js/17.008167a6.js",
    "revision": "739a9cfed487959084ce282e16073e39"
  },
  {
    "url": "assets/js/2.6e08f815.js",
    "revision": "b4db765ae3ddd673f9579a85bb49d9ec"
  },
  {
    "url": "assets/js/3.d7b7466a.js",
    "revision": "b7e73b62e9ac2c0537385f623262f545"
  },
  {
    "url": "assets/js/4.0b584fb5.js",
    "revision": "6ee7b3a72cd38f7facc0fcaf96578ca3"
  },
  {
    "url": "assets/js/5.b3486ee3.js",
    "revision": "ed70bb45d7e695a1e441ff7808657771"
  },
  {
    "url": "assets/js/6.725f79ac.js",
    "revision": "8dc4ff80c5254b4a636421ad1eed5e6a"
  },
  {
    "url": "assets/js/7.1af437d3.js",
    "revision": "9c622675844004a23384f3a8714bad80"
  },
  {
    "url": "assets/js/8.b57824fb.js",
    "revision": "0cd07fa11e365b386b8273d29d615cc5"
  },
  {
    "url": "assets/js/9.40817d36.js",
    "revision": "3827a01003901f38f006c47170f360d1"
  },
  {
    "url": "assets/js/app.909a5d7c.js",
    "revision": "abb1f9330fc1d9cbe65d7b4855637b9f"
  },
  {
    "url": "index.html",
    "revision": "dba90ea1cb155efa61a0d1d2d9527813"
  },
  {
    "url": "misc/Migration2.html",
    "revision": "47e10d7aada6844a39160f5c54ba6fce"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
