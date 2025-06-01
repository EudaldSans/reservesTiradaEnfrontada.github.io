'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ff52f66b6cd50cc815b95bed85c66170",
".git/config": "5d42281f826af351eef67b7d1723d0bb",
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
".git/index": "17e55db2166729a003bcc43c290249bf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1a9665042e7eceafe392144b247f63b7",
".git/logs/refs/heads/master": "1a9665042e7eceafe392144b247f63b7",
".git/logs/refs/remotes/origin/master": "48d6b49ed9a80938198d90548226b7bb",
".git/objects/04/1bd8d07a39014a491c265b6188a179abb3b53a": "252dee0a96dd8b639df9a777c693ec42",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0a/fdd12bac009cfaeb17b66f1b4a4638f87e8969": "ec652cbb7531282b5767fdfc539d553c",
".git/objects/0e/21b07bdf66dedd6f94ee26b001d56c8161c6e6": "3be590ac708dd0ac22cd3c2f20cf3030",
".git/objects/0f/c9d71a0c3bd93d58ffefa725fd8cc7c428599c": "1b962a486edb4f418a0d7ff944ce6066",
".git/objects/11/1a9be55a7616ff4e0dbebf656b5cb69221eacf": "6c5c44f2293d159295ad20c6160070dd",
".git/objects/20/59bfb1f4c4ab6897cac2c61f812a95b2d6c66f": "efdcca079b6da569523c52b08dbfd251",
".git/objects/25/5c64ba21f9af0a748dbc9c776b1883ec3538b4": "d0fef103cfa1f7f1be0c6f759fdffcaf",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/31/338b8957910a54e4ab8eb4e3e8b478525de5c6": "62e632b599b380fe0b419b67952e5f82",
".git/objects/34/037fc8f8633a8a2057fd6f69932838862d1e93": "8b7c3905f1134f3f0c42063b03c20a30",
".git/objects/45/402127ff6db8120748c20860d2659b0d8bb708": "a6edc372a0ca464cbeed196355819eaa",
".git/objects/4c/28f1d91aa2d121b9695425f099e29b9b40fb87": "64beb649400f9e76d20846ebaa2fbcbb",
".git/objects/4d/dd83b075f98752f184aff941eb1908afc43ccb": "a9fc8e3779487a4307d5835487d70d15",
".git/objects/50/79153275b7b1afceb0454402033b84293c8082": "d8f3f5d3dec15182893cd264867b38e1",
".git/objects/52/ca42f9d698f3615c8aa5aca76cd325f6b95b91": "56f5d9bfd68813f1c6f4ae3589fee4d4",
".git/objects/59/b11dc7bb679b4e9a3e98db6dd27d55902e680d": "1a0635812bf7be67e573360d36de55e7",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5e/980263d0a780b30b71a29d2d94ecb829551131": "0bc3c74fe3f7fbc21c57d88bbd879cb0",
".git/objects/5f/99507b9845f5be23b2d6ba239267c1eff92dba": "c16360f15d6e02e81ed96d05d7d9c6e2",
".git/objects/61/f71bf1054d3bf6fdc1626f1588262bff0244c2": "ca8651806b5707c5b10d6d3d9f1b8ba9",
".git/objects/61/f99332d4250353bde6d57e6840c6c46d5cc3f2": "20cefc2de091f3b158a3ee199cf1c907",
".git/objects/62/6ba5fda8540f6090dd4ad5f6ecc111eb437037": "0af2f5daee04c83ec9467d7a595c3d12",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/ab91be8c0120b498a820d06588e97bc37ee542": "11c951b476a805c727f7c18f88992702",
".git/objects/73/1616d73526f674affbcc78c14ea3abca513389": "d15c2c127be5ab5d8ad6349423e6d75b",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/73/82c0cc60a49fdfbf18dac44072bf6c47206f49": "8fefc5b89487e54a5cf1201a1d32abb1",
".git/objects/7c/61448f6cc63a9f140e28d204ce38aec22e2df1": "09860f9399f58ef88ad6b0665336d331",
".git/objects/7f/10c67b50cd7ba62367b5c2e61f58f8a95533ce": "d00ee462961a72a7995905add6f84358",
".git/objects/7f/e8e39cd081ce4009f6fb0fd313ef7ba8bfcf00": "33ff55751e57acdcc13c3dcce1596d19",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/5730355241f71bc862098d4e77632840d3bf5c": "f6c2fe6799c5cc0f2c4141ede9e6d7f1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/96/94c03603e769fc61ea8720b166465be97f4b22": "f8c2c29af35d754dad90a3976c2354c1",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/33c3f30390e98aa872a4d0be112f3dfecfa5de": "b6ba97932797cca6abfaf9ad8f9771b8",
".git/objects/9c/389db5b4f622d4d2b17971bacfe6952fb9ea1d": "5d2677c6ea1e1cd7d9262c932203f3a7",
".git/objects/a4/1b24d8db9a081c1e2888a2cae7775eafa1d61d": "ca1d4f841fe0e2f5c43da2512114a768",
".git/objects/a7/92be1a35c9ca5649b387ae47d8ff25d9ae35e2": "ca40a5e630e3547f58de627852b9153e",
".git/objects/ab/c772b6d99bf62371b7035603cd8eaf2f98d58a": "2b4111b58a969b1865008edefba3bc1e",
".git/objects/ad/2d4b7e723a5ec2397f0e701cc4b3d468c99371": "6697b2ddbb38cdad4177692a20205cce",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/1954117122d0f3846496fcb772d37087986cad": "d9b70ff5848780010955f61c1b6c1481",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b6/96404e91dafae7a93f2ea28a1320abfbedb561": "99b2ac9ac94f05c3e66c70c7a1289df9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/2cc56a56ddb4f1201f60f3dd24d5bfee6f4a08": "cc40cb3ad767cf562e8bdaffb741683b",
".git/objects/bf/cd53052cca6883274a383fda6eb4722f26646a": "2b9d2d9dbb91c170ef481eb571a2b816",
".git/objects/c2/40e57de5a2276ff5ecfb3fcb64fd545cfdf6e8": "7018e3a6aec4137876c9a8c84945fb85",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c5/7ed4735e30fb658a10f54ef188c68914304c81": "b3214acc541d4b626d836096e9ce7b3d",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/4c48ad819f572f8761e1e3ceb5d89242f2d1e6": "b861bb105b047c46d34fa521adc4de2a",
".git/objects/c8/2e9d5a6ab19256d12db7f411e3dff7f8933880": "436e6487a4f5ef618ef97fb6c912790e",
".git/objects/cf/34cc0913dc01739bc86eb6ef794f90944c7b4f": "fdca4aa00462cea4a09996216c8691b1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/3b7c2d30c29a8b9c0bc6f1865ff72c86369564": "e36e14da7249cd225a526872e680f116",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/f4fe2cc16039cafb3d011153060d8d9f447a69": "3155ec7b8e1aa738a6b1a7c2f2c96709",
".git/objects/e2/2fe0cc761c6e9b11816c13d036141a9d1712f9": "dcbe5622d8288d650e98dc4fbdcbbe87",
".git/objects/e6/784d295e7daa74ce9981276760ba69bd8da96a": "c4a045403e42ff0faa152bd2543f6925",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/b1cc9e6a3e0f0e9b23ebf97c27e27aa8415b15": "6b324a9861ab99d81b4724dee542218e",
".git/objects/ec/29052c738202e3bac1ad0451541bd2a4c0382d": "0c2a1f1cbd3a6f2d3d6df166ca6aa568",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ee/c623b4ee47496a3418bfd7a08fa68deb685085": "1ae1d7eee9dd2da6bdb445cb6f08fc26",
".git/objects/ef/848134d7fc779f53892d02c470cc2c63521884": "6c0377bfcef18ad14860201a41fba073",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/c2f9afdc4ac752250fdba683e58e538db25063": "3521fae1918e0ac2691689c1d260b1c8",
".git/objects/f8/241d28dd0ba377bacc0f1f2cc2b559d52fd775": "8cd7ee76c80eedf7c6d6a67b4177cabb",
".git/objects/ff/37adc4a319fbf29172bb7c5e2acd401522ac7d": "75d593c13ff7837e9a016ce1814cf6c3",
".git/refs/heads/master": "c6a6383701221ba2ea2efaca4a559b9a",
".git/refs/remotes/origin/master": "f5cfd73023c1eedb6b9569736073f1dd",
"assets/AssetManifest.bin": "45e99bed9c27367c78d95344df16a399",
"assets/AssetManifest.bin.json": "21ac7656525f0ba3020f78345e498b04",
"assets/AssetManifest.json": "aeed325c525b397deb26e79a2a9c3777",
"assets/FontManifest.json": "578fa61108a9a871931214344b9060a7",
"assets/fonts/MaterialIcons-Regular.otf": "35d160283c1d87130faece1079580cc6",
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
"flutter_bootstrap.js": "1f9f1bd45c5d63f1d3795b66a6e644fa",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c292e4e111981d0b8812841e12c42710",
"/": "c292e4e111981d0b8812841e12c42710",
"main.dart.js": "deee2366f5d19c472487575f80b0dd0a",
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
