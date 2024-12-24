'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "15c4dbb5f1445cabbde8f1de5d4f864d",
"assets/AssetManifest.bin.json": "9f89b0cabc078c4ea8f167bc2e4d8fd0",
"assets/AssetManifest.json": "878406414a044a332b1297a5cf28dffa",
"assets/assets/images/authentication_app.png": "0aa40f2941d9ae5465aa37b7b0b50416",
"assets/assets/images/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/images/Kasun%2520Tharanga.pdf": "9e5f75d52eb8a4456f40eca23e414f9e",
"assets/assets/images/kasun.jpg": "7ba0d5ce06dadf3c7771fb24a0c77c09",
"assets/assets/images/kasun_tharanga.png": "fdb7e9244f0bfb9b213ec3d219972a10",
"assets/assets/images/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/assets/images/me.png": "bd9b76514d68f7e031840dab2f48bc53",
"assets/assets/images/my_portfolio_site.png": "a06567294c878ec1ed3234e27cfcdca1",
"assets/assets/images/profile.jpg": "40b2cdb7b3823ded80c8a04fa356dc65",
"assets/assets/images/simple_weather_app.png": "f94867860e1611ebbe143c399a213285",
"assets/assets/lottie/up_arrow.json": "7a1c01854fdcd5228883fd7660554fe1",
"assets/assets/project_images/auth.jpg": "6c702e6ef4cf981253c3efc463e48624",
"assets/assets/project_images/auth1.jpg": "a97cae55f634ada8fb71097cc3415028",
"assets/assets/project_images/auth2.jpg": "7f5576a3dcc4cd1a5ab2a0d8517847c4",
"assets/assets/project_images/auth3.jpg": "477eec6dbb02ab9e4a0eb88f9412d628",
"assets/assets/project_images/auth4.jpg": "d124649e5ecc9c6cc956f4e4646900df",
"assets/assets/project_images/auth5.jpg": "02e3dd81fdffc739b2a43e875c2f631a",
"assets/assets/project_images/auth6.jpg": "e18ce344c006d8bdaab41e792c7aa644",
"assets/assets/project_images/auth7.jpg": "2e78821af2e850a82813f9d5c398bf1b",
"assets/assets/project_images/auth8.jpg": "cc68b3563f3b951b56ccd2cc4b874094",
"assets/assets/project_images/portfolio.jpg": "8c31d020f40e01ace8412a672527fc10",
"assets/assets/project_images/portfolio1.jpg": "44279e5878c63edfd9be35a1b266dbc3",
"assets/assets/project_images/portfolio2.jpg": "f07aac3cbcfc20685127b89ae90dfd31",
"assets/assets/project_images/portfolio3.jpg": "be2abc3c6c51a437649cb93d4c6ee9ee",
"assets/assets/project_images/portfolio4.jpg": "b8c825b0bb523fbb63d7e14356ccdb1d",
"assets/assets/project_images/weather.jpg": "79b77ebaddf60aaa2d2e4310b1291d97",
"assets/assets/project_images/weather1.jpg": "7dd4dca85a3abccb6d1fd843805fecc9",
"assets/assets/project_images/weather2.jpg": "434e323277bace74dc638dd190047fdc",
"assets/assets/project_images/weather3.jpg": "98c4085c4cc4dd08ab440665aea5da87",
"assets/assets/svgs/api.svg": "eaac4698a64bd5ee581d0ede5646a17d",
"assets/assets/svgs/cloud-jobs-api.svg": "465aa62f811c4a586aea537099dba8c0",
"assets/assets/svgs/dart.svg": "e8f7e9dd5dfc0fa8b5b4af6adbe66aba",
"assets/assets/svgs/firebase.svg": "608de85fa2b12cc17325eee532357713",
"assets/assets/svgs/flutter.svg": "fb9e82f4de3bbd9bbf23f8af17199313",
"assets/assets/svgs/git.svg": "debcf26bf602cbe0c83f7bc492686a1f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d52f97960373463718c162b282eb51f3",
"assets/NOTICES": "bb3ceddf07ed29c00709da153358ced7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "04d7650a133160fe3b773b723099a52c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "717b83c90c789962ccbb6a6e2a20df20",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99ec1437a918c4a651f080c292fa4deb",
"/": "99ec1437a918c4a651f080c292fa4deb",
"main.dart.js": "e7fc5fa7d475c8fc27219bce3a330c25",
"manifest.json": "f6ab9f995d8f5cb8113c6d04ee92b53a",
"version.json": "31140ed03bbf7ae1673997a8f64fa90f"};
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
