'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0c8bcd58c256be2c7106737fb11e4a47",
".git/config": "582264f71dc2dbdb95c7c53056c5693c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fda77849d5ac7f2258fbd4803b1c19e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e9ffde4acffaa1677386a5e1054e22c6",
".git/logs/refs/heads/master": "e9ffde4acffaa1677386a5e1054e22c6",
".git/logs/refs/remotes/origin/master": "8a77d38724a9fbc24a7ca1e39558b541",
".git/objects/01/85e21c0cabbcdc411171118cb93dfcc3f4bed1": "bd7384d2684d2c0a65a3aec3b3249800",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/0bd205467dfa07374183defcb187f00f0a21b3": "d838b9bdd5e3814c8806f7f838d3134d",
".git/objects/11/1a9be55a7616ff4e0dbebf656b5cb69221eacf": "6c5c44f2293d159295ad20c6160070dd",
".git/objects/14/e84de707d45f4ec488fbf9104de1bb412d1944": "7e6c6a6e4dd73b33f4b286b370c1b7ac",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/34/037fc8f8633a8a2057fd6f69932838862d1e93": "8b7c3905f1134f3f0c42063b03c20a30",
".git/objects/34/8da16772a24f0a356a48c7516786752373b975": "dbf04fb11134747e91f964966abf081b",
".git/objects/37/7e520d0e245eb5de811e0ea5d2d6301860484f": "08354e9b8658e604a3651464e5744a48",
".git/objects/39/2b76ea51f67ef503bc22ce40c310d15b436c59": "b8c7b5dd19bdf1c4256afad36d5c3c41",
".git/objects/4e/b912c5e9d9145cbb723bbb101f5bc47dae2917": "9daa05df4a1065a72140190d7dd6932d",
".git/objects/52/ca42f9d698f3615c8aa5aca76cd325f6b95b91": "56f5d9bfd68813f1c6f4ae3589fee4d4",
".git/objects/59/b11dc7bb679b4e9a3e98db6dd27d55902e680d": "1a0635812bf7be67e573360d36de55e7",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/980263d0a780b30b71a29d2d94ecb829551131": "0bc3c74fe3f7fbc21c57d88bbd879cb0",
".git/objects/5f/99507b9845f5be23b2d6ba239267c1eff92dba": "c16360f15d6e02e81ed96d05d7d9c6e2",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/ab91be8c0120b498a820d06588e97bc37ee542": "11c951b476a805c727f7c18f88992702",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/7c/61448f6cc63a9f140e28d204ce38aec22e2df1": "09860f9399f58ef88ad6b0665336d331",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/25ccb4a1aa4ea5749a5cb691c19fcaaf189604": "1dd4b9b91a99847d34c33d1669fe935b",
".git/objects/91/844c2de08c80d3c5d1a9897aff732055535f9e": "d0f83eb1b893bb75c89c66dbe95fc304",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a2/a00347060e87b9d3d18457081f31ea615d6693": "bfc208e2a1af2b9a5d8ae19aa35f6e39",
".git/objects/a4/6507c06a617678bb5e30dd2736bd3baa454e3a": "95ea5d32b02a9e67b978cac0194f7e29",
".git/objects/a4/732ef033900a043682df0a1544e60c15dede67": "c2b8952d48d6109a4e84d52722eaf06e",
".git/objects/a7/92be1a35c9ca5649b387ae47d8ff25d9ae35e2": "ca40a5e630e3547f58de627852b9153e",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/91d6456b4b07c25e406417d467a2323e0cdeb3": "8fca65649dba5ee04a90887610f1872e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/03a67d3b7f88e7549f147e86f86add26ef0b34": "90401ff5917b971a30d79b778154fd0b",
".git/objects/bb/16f58632425ff63063b6be06f007bcc3b900c2": "c1b78d473f92f30dcef57b2799ba3388",
".git/objects/bf/cd53052cca6883274a383fda6eb4722f26646a": "2b9d2d9dbb91c170ef481eb571a2b816",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/7ed4735e30fb658a10f54ef188c68914304c81": "b3214acc541d4b626d836096e9ce7b3d",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/913436f1b1afe9a50a08467a6cc719f38bd4d3": "22c68760b32ae2954d00a413c6f163e2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/e238ee40331377e87b1f912597c300cdc35e96": "674b7d1a099783442c027455892a2bbc",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e4/1b114977ed045bd6401ff5d5928321d9f80494": "69430271e5408681077ffa3bf1cbfa7a",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/c623b4ee47496a3418bfd7a08fa68deb685085": "1ae1d7eee9dd2da6bdb445cb6f08fc26",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/b38efd0084979f28218e955fcf0c460a5194c9": "60c647cb86df81162732fa35925378b2",
".git/refs/heads/master": "1b7ac78609277205ac2b4e7e15dc6ec3",
".git/refs/remotes/origin/master": "1b7ac78609277205ac2b4e7e15dc6ec3",
"assets/AssetManifest.bin": "45e99bed9c27367c78d95344df16a399",
"assets/AssetManifest.bin.json": "21ac7656525f0ba3020f78345e498b04",
"assets/AssetManifest.json": "aeed325c525b397deb26e79a2a9c3777",
"assets/FontManifest.json": "578fa61108a9a871931214344b9060a7",
"assets/fonts/MaterialIcons-Regular.otf": "a298b3b71a0988215f3b15b88937a6d2",
"assets/NOTICES": "6e0de79e9106af28956a215ce1a4d4ad",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "6e436b38f58db489fdd4fee74b5ff477",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c292e4e111981d0b8812841e12c42710",
"/": "c292e4e111981d0b8812841e12c42710",
"main.dart.js": "afecafb7c94b97766ca0cf1f3df1678f",
"manifest.json": "54ab6b677529df0ad8e4dcc27cff6ea1",
"version.json": "73154738960400b6e12049917c57c5c3"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
