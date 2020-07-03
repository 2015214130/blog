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
    "url": "20200703201535.jpg",
    "revision": "7b243fdb8b9a8993c8660b86e9bee40b"
  },
  {
    "url": "404.html",
    "revision": "c651caa7f249252e0c402a239f463f24"
  },
  {
    "url": "assets/css/0.styles.cfd04f08.css",
    "revision": "4cc10879129ded9e34b6569bf6c0c041"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.f4a44c70.js",
    "revision": "14501146ea8b2a6b8fa286cbf4786be3"
  },
  {
    "url": "assets/js/10.75888cac.js",
    "revision": "2c4bd5772df43dbfd2316a4044a25397"
  },
  {
    "url": "assets/js/11.3ca1ba89.js",
    "revision": "927f42826e6c3aa8affd016f66a6638e"
  },
  {
    "url": "assets/js/12.0ac59970.js",
    "revision": "784e42c10d751c49b6ca232f980d97ad"
  },
  {
    "url": "assets/js/13.14517a0c.js",
    "revision": "514c464fb5aec0c6e7703760ce33823d"
  },
  {
    "url": "assets/js/14.a08e696c.js",
    "revision": "96a40f0741ca286cd80f5a62a7bf88e0"
  },
  {
    "url": "assets/js/3.046a7b97.js",
    "revision": "d2e0c5b443392a5315cd0f63949616d3"
  },
  {
    "url": "assets/js/4.2bfd12a4.js",
    "revision": "358623ad48d704c4874cc072c18cc936"
  },
  {
    "url": "assets/js/5.32713a03.js",
    "revision": "3a3cdb791cc4ffe404f78e6b7277e7ad"
  },
  {
    "url": "assets/js/6.ced08e5b.js",
    "revision": "ee05493f224903b0f90b7f9aef7d938c"
  },
  {
    "url": "assets/js/7.7997804b.js",
    "revision": "53fdef6c5dd03611d51c8274922e5069"
  },
  {
    "url": "assets/js/8.b873dab5.js",
    "revision": "4a245ee91569b55e5604e599a47c86aa"
  },
  {
    "url": "assets/js/9.4884a93d.js",
    "revision": "5db7683ae9d8ef2d69132aaf408e3ecb"
  },
  {
    "url": "assets/js/app.282fc1be.js",
    "revision": "0d13a8a85497d6a86ddbb5b274978b95"
  },
  {
    "url": "blogs/2007/summary.html",
    "revision": "29604d09fa799d7d1e45f82579cbf40f"
  },
  {
    "url": "blogs/about.html",
    "revision": "e92690358e07a583955769a9aef4b466"
  },
  {
    "url": "categories/frontEnd/index.html",
    "revision": "85daab49adf409e58792a0db742a88f8"
  },
  {
    "url": "categories/index.html",
    "revision": "0711c47e7131f8cf2ec6de2a6a85e5c4"
  },
  {
    "url": "categories/工作总结/index.html",
    "revision": "533f8fa1f330a7e35568b61337a18adc"
  },
  {
    "url": "hero/01.jpg",
    "revision": "e390c26160cbb356df4f01c49a662739"
  },
  {
    "url": "hero/02.jpg",
    "revision": "fcfce1cf272055a5009b79cee5f172e1"
  },
  {
    "url": "hero/03.jpg",
    "revision": "b11cf09f68edaa9eb01ccc9ca2f2e1d6"
  },
  {
    "url": "hero/04.jpg",
    "revision": "d0af6d52dfa3aa27ddc27e84bfe6e9ec"
  },
  {
    "url": "hero/05.jpg",
    "revision": "c768e0a5d18ba6bdfcb206e6a970b9e5"
  },
  {
    "url": "hero/06.jpg",
    "revision": "5306e862473b6d85bcae78eb16546c5f"
  },
  {
    "url": "hero/07.jpg",
    "revision": "2185c4c84f02e9073a9a787f45aaa5f5"
  },
  {
    "url": "hero/08.jpg",
    "revision": "e87c48e7c5a5ce07e461c916a5e3ab1e"
  },
  {
    "url": "hero/头像.jpg",
    "revision": "cf935d930d86110576baa35bde455b09"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "416a64067228b007276b966da22a3c4f"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "eb25c07c53ea28506a62bc78be1d5f1a"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "c5d4845a03026e79ffda440d72abe8e2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "b53ffd8038460b54eaac5bed6bba4c2d"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "f30141ff0b4e86c4c78ced6a448ea2f2"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "e93491f5ee017cb773525f8832fdf1aa"
  },
  {
    "url": "index.html",
    "revision": "70171a0aae4c54f9671edc646d1b66b1"
  },
  {
    "url": "tag/index.html",
    "revision": "60744b9356a12af44dbbead9fd9f1418"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "4d9d49b7cc12bb664e5df273e4577713"
  },
  {
    "url": "tag/不足/index.html",
    "revision": "85b83a3fef0d33c26084c7798dfc4e6a"
  },
  {
    "url": "tag/工作/index.html",
    "revision": "0922448df227dda394aeee9ba9397b1e"
  },
  {
    "url": "tag/总结/index.html",
    "revision": "c2a0b7b9be5b8dd42943a0e1dda81eb0"
  },
  {
    "url": "tag/成长/index.html",
    "revision": "bd462d99fc37f814632e5b17877579c3"
  },
  {
    "url": "timeline/index.html",
    "revision": "25b8e7f1e67ca08da153e5fe7e5ceb00"
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
