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

importScripts("workbox-v4.2.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.2.0"});

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
    "url": "data/todo.json",
    "revision": "ef8e8a416f331226b48a15b00c5d9eb2"
  },
  {
    "url": "index.html",
    "revision": "3bca14743aca21ed51348b94f36a02ea"
  },
  {
    "url": "js/app.js",
    "revision": "ae4042edee2ec7efdf9c6b44de8f96ee"
  },
  {
    "url": "js/components/app-theme/app-theme.js",
    "revision": "4b7dda17970b654fc6ef85a6e2b754d4"
  },
  {
    "url": "js/components/card/card.js",
    "revision": "08a54f816cc97e9dcfff0b55a8f01bac"
  },
  {
    "url": "js/components/taskWriter/taskWriter.js",
    "revision": "76f19aeac2ccdbbdfeb1c7b110ecc207"
  },
  {
    "url": "js/utils/connexion.js",
    "revision": "05b54ffaa5711cd94b533a147e487934"
  },
  {
    "url": "js/utils/task.js",
    "revision": "48991967aa078897719e35ba323c9e44"
  },
  {
    "url": "manifest.json",
    "revision": "757f8ac6d701ed74da12b4d12f25a890"
  },
  {
    "url": "styles/main.css",
    "revision": "3ecd282b9a27983fc521b4099a0d7870"
  },
  {
    "url": "node_modules/idb/build/esm/index.js",
    "revision": "1744c78524339333fc1a296a8d11baf9"
  },
  {
    "url": "node_modules/idb/build/esm/chunk.js",
    "revision": "c425e70eed99680fd3f14b1f70580f8a"
  },
  {
    "url": "node_modules/lit-element/lib/css-tag.js",
    "revision": "88a7776dc45a2f5f5a2a99b144d49075"
  },
  {
    "url": "node_modules/lit-element/lib/decorators.js",
    "revision": "aa875a7b763b574cfce40b684b733eb3"
  },
  {
    "url": "node_modules/lit-element/lib/updating-element.js",
    "revision": "2276cf333bd0a08bd8ae34783f36aa4c"
  },
  {
    "url": "node_modules/lit-element/lit-element.js",
    "revision": "72433c8e2d5d81583b7af68bad4822d6"
  },
  {
    "url": "node_modules/lit-html/directives/async-append.js",
    "revision": "20e3f940ebfcbf1fd1c3ff930140478c"
  },
  {
    "url": "node_modules/lit-html/directives/async-replace.js",
    "revision": "7732ef7434ee0095decce950f416bff8"
  },
  {
    "url": "node_modules/lit-html/directives/cache.js",
    "revision": "8aa0c9b2096899239e163a0727362c6f"
  },
  {
    "url": "node_modules/lit-html/directives/class-map.js",
    "revision": "13fd443f5b030395790886e21fa7ef6b"
  },
  {
    "url": "node_modules/lit-html/directives/guard.js",
    "revision": "ad09d68d2035c335d3be91e78a390ec7"
  },
  {
    "url": "node_modules/lit-html/directives/if-defined.js",
    "revision": "0b45cc46b88bc39118f14369e7f9141e"
  },
  {
    "url": "node_modules/lit-html/directives/repeat.js",
    "revision": "a3ed38e564c97093741ed7fe6ab53d1d"
  },
  {
    "url": "node_modules/lit-html/directives/style-map.js",
    "revision": "52f71857303971de342219f86e1be27c"
  },
  {
    "url": "node_modules/lit-html/directives/unsafe-html.js",
    "revision": "ff818bc767837badf6765e48c3903154"
  },
  {
    "url": "node_modules/lit-html/directives/until.js",
    "revision": "ee1eb6e410fa9920673890aece12b517"
  },
  {
    "url": "node_modules/lit-html/lib/async-append.js",
    "revision": "e72ae444630172678a2ce51dbf52beb6"
  },
  {
    "url": "node_modules/lit-html/lib/async-replace.js",
    "revision": "08d3c1a2322c52e2689758fb0bd6c912"
  },
  {
    "url": "node_modules/lit-html/lib/default-template-processor.js",
    "revision": "e96dc25c4a6ab961d383723b243bacb1"
  },
  {
    "url": "node_modules/lit-html/lib/directive.js",
    "revision": "1d0d4dd4117349ba63339aee90963f44"
  },
  {
    "url": "node_modules/lit-html/lib/dom.js",
    "revision": "45322140ad6ad2789e8ebeb95eec59f3"
  },
  {
    "url": "node_modules/lit-html/lib/lit-extended.js",
    "revision": "d24daec20065370d69db1eea3ca14252"
  },
  {
    "url": "node_modules/lit-html/lib/modify-template.js",
    "revision": "19cd46629fac6601423169f538f5b5ba"
  },
  {
    "url": "node_modules/lit-html/lib/part.js",
    "revision": "ffd11b35ced31f865d8381f3585892df"
  },
  {
    "url": "node_modules/lit-html/lib/parts.js",
    "revision": "ffdc54cd7f09acb476c53d96c99b0a99"
  },
  {
    "url": "node_modules/lit-html/lib/render-options.js",
    "revision": "b135ca8c29cdf7d1e3d0761b692e1663"
  },
  {
    "url": "node_modules/lit-html/lib/render.js",
    "revision": "e22a39942d0d752076163c996cf8fc56"
  },
  {
    "url": "node_modules/lit-html/lib/repeat.js",
    "revision": "8472ee5fdd935aa72259321a05f9471f"
  },
  {
    "url": "node_modules/lit-html/lib/shady-render.js",
    "revision": "6f7e199cd1cf7c2ae9bf6eba7a8c12c7"
  },
  {
    "url": "node_modules/lit-html/lib/template-factory.js",
    "revision": "dcdc52b73ba1f464ece3387ab1ce1b8d"
  },
  {
    "url": "node_modules/lit-html/lib/template-instance.js",
    "revision": "6c9495fce172762a92590b384bb4d3c3"
  },
  {
    "url": "node_modules/lit-html/lib/template-processor.js",
    "revision": "da7fb57119a10d43468d581552ceee39"
  },
  {
    "url": "node_modules/lit-html/lib/template-result.js",
    "revision": "692e28fbf475a700fcb68ebecfe37741"
  },
  {
    "url": "node_modules/lit-html/lib/template.js",
    "revision": "aa4ec6a7762d526e15f7c34b4e06c9c4"
  },
  {
    "url": "node_modules/lit-html/lib/unsafe-html.js",
    "revision": "68d76f033adbaf4fea06ad13cf0980ce"
  },
  {
    "url": "node_modules/lit-html/lib/until.js",
    "revision": "5c149fcee4354ebda36af2e9bb63a79a"
  },
  {
    "url": "node_modules/lit-html/lit-html.js",
    "revision": "b0f1b842794a5026a27829356f2a26ce"
  },
  {
    "url": "node_modules/lit-html/polyfills/template_polyfill.js",
    "revision": "0f0860f25b55c688dd6f1bd5685a824c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|gif|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images-cache", plugins: [] }), 'GET');
