'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bfe9655dabef5f50c2ff6d62615599c2",
"version.json": "9b9953df692cc1d98e02dd681fa165e9",
"index.html": "3e55df62121be8cd16ce9397fb3b1e29",
"/": "3e55df62121be8cd16ce9397fb3b1e29",
"main.dart.js": "406e3e56dcf558674526032ef81402cf",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "11128a38130c37c07e2d8e7e3ab18b86",
".git/config": "a2fb1bf6b27a9933d9bb16c9dfa43cbc",
".git/objects/0c/b48a9aba7d718d557720f1d2907d8c06d7e418": "d56510ad3a0d4f1d4577b6e524f8a16b",
".git/objects/60/ec2cefed3df7acc6d8147f940c4749cc8f73be": "df84efb241bc7e662ce6e8359313ae79",
".git/objects/a4/c5129949a1e1dd727aefe01e2236ee546c6ad5": "e0d76cfbff2e59edcaa867c1d669e9fe",
".git/objects/bb/09c6abaa4ef56b868c171f1015804e02523c27": "8fb343c4b082c378fa1d786bafc4859e",
".git/objects/bd/f13bdbc1357085390abd4fd86ac1cc73418aec": "ea66aac0779e8003c75cceeb50268324",
".git/objects/pack/pack-eb7e25861ed75a5739661e1b47392172c3fde78b.rev": "20a40296aa5a6e0e7294ef9657cbfe4d",
".git/objects/pack/pack-eb7e25861ed75a5739661e1b47392172c3fde78b.idx": "c86e54eda77763b0ac8d23caa997ae89",
".git/objects/pack/pack-eb7e25861ed75a5739661e1b47392172c3fde78b.pack": "95b7977f388936d819dc8f6782e288b0",
".git/objects/43/13f123a3b917bfd72acb67be921934ccb69f32": "1572db78a517eb436ed13bc3bf797d5c",
".git/objects/9a/5cb1bf0bb80d39f396cb7b986230dee4ac2249": "925c256910c842672cbbdbb52aba3a3b",
".git/objects/5b/4de861a0dc16e60860f5a2eef94610dd894f08": "d133bb281305e54f5ff161a57b2edc09",
".git/objects/39/feb00815c6b59ac8e5574b5f4343dc1835c680": "a2914f2b5deeccec8ed3ba8572b2b1c6",
".git/objects/aa/c271c05b52fab010f0548906db7f42cacaff32": "e7538121e75bc0dc2059e36690073d83",
".git/objects/1c/842af1554430d259f49780a5b10ceb2931780f": "c9ac2971b6ad612eeb4b1000a1fd4d33",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80e30eb0f973ec0468e0920b429a4ac8",
".git/logs/refs/heads/main": "80e30eb0f973ec0468e0920b429a4ac8",
".git/logs/refs/remotes/origin/HEAD": "af5f28b637689e6c7f7f2f2c555b830e",
".git/logs/refs/remotes/origin/main": "fb9ba3b1368b25c28de5b37acc3cdbbb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a15bd102ccb2af559f849fb977dab987",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "a15bd102ccb2af559f849fb977dab987",
".git/index": "18f39d8199ce270c0eb17dc7a51a12e6",
".git/packed-refs": "6ba005c15c22fa69bf45ee6fc16fbbb4",
".git/COMMIT_EDITMSG": "d1de0745dee53c2f393d5b8a28bc9573",
".git/FETCH_HEAD": "61008016408f8f878fd3230570820f42",
"assets/AssetManifest.json": "0e00a7d97f57315a4f2a7f66e854e321",
"assets/NOTICES": "0c3f4b62c06cd89d0891f1837603341d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "5e807d15bdd6f451afa3993b1043a6d3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1008f6874c73f24d1a21c1e51fa4fe9a",
"assets/fonts/MaterialIcons-Regular.otf": "58ebf5947c421c26899f0f13f9d58a8c",
"assets/assets/lottie/error.json": "dfeda3b60d4aafc93678e9c6039b6fe9",
"assets/assets/lottie/success.json": "836e7de1052a79cf9b2c7e45353dc061",
"assets/assets/lottie/victory.json": "e6016176b57a560ab916f8e4f09e5b97",
"assets/assets/minecraft/minecraft-deco.png": "c84a97d8334348a1dbe4205f24063ef0",
"assets/assets/minecraft/pioche.png": "a059118aff602fc6c2c95781edf75bd8",
"assets/assets/minecraft/etabli.png": "ee1aed2799face0b4db1e5756626b27e",
"assets/assets/minecraft/four.png": "a5cc4783dd7b4c952625019437f012ce",
"assets/assets/minecraft/cochon.png": "85f804b755f83485c93ed385802d7384",
"assets/assets/minecraft/bloc.png": "50651b06b19a4731a84acf03b111377a",
"assets/assets/minecraft/zombie.png": "90d25375637918a5cdfa5e58deeee1ce",
"assets/assets/minecraft/char.png": "45774a24faa42994c2f152fd0c7dce14",
"assets/assets/minecraft/creeper.png": "d6550e642e6cc261ddfb194e0ca02d37",
"assets/assets/minecraft/coffre.png": "9dd638f0682a2f267d0d1301a1c4132e",
"assets/assets/minecraft/minecraft-deco2.png": "d625efbf50ec284f2efdd99db452ffbf",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
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
