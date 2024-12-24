'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4e0d72665b139e8c41056dfc3468f2a2",
".git/config": "047b97667caaa2f2ed359c8e93a6e25f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "8b821e8dcdda37f776bb108506ca30e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1086559003b13c92118d4a78aff8bfed",
".git/logs/refs/heads/main": "74d52005d1f8ecdc64504460233f76c9",
".git/logs/refs/remotes/origin/main": "96a6323e20c12caa0d97472ead8f188d",
".git/objects/0a/78425104118b084e060a16ac5e47add3c849f4": "6832c2db1232a22d45cb9c4b445a8530",
".git/objects/0b/8df6d9ebbdf71a84dbd85cf3916b45999c305e": "2667e891015c66905443c0af4ea249e8",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/0d/a23cf3f4f3649583d824fd5bc93dde60f6a595": "50d099dcbea7b9b8d5e53c4513e5990b",
".git/objects/0d/ac1da78d8cd580b7153f038a28eeccd28fbed2": "783e759debdfd678ecee32a0b382fa5d",
".git/objects/0f/bde152bb7e8ddec5a5a01a8d987d0b4d797db6": "c1421bdab35ee9a5903ef4cd987d6839",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/b95d91b3f62c13b6412fdc0404f4b1ea8ac5f8": "92a3f5e3590c0646b1442c5559282b91",
".git/objects/14/a7d101c80980b981151dddabc03f81f3268499": "361d4cab7f132cde10aff3432f9bc15b",
".git/objects/15/c0e1df6816303052b8440a915b5e89e43ab188": "ff5d952f8e22b97ad2ca31ba4571e3d2",
".git/objects/18/a660dc27ca715d1874c1bd0614e8ca865d72b6": "7f850df8f871ecece3d57c98ca13842b",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/f0ad48dc16c53401400f0834c4eee3b77c8d1a": "e6a66dbd1c4ef10fa427c72c1dbe66d1",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2a/94a07fd80e354aeb849be9dcc4a6ae32ef8635": "7cc4aae18e346ecf9d27f469942c083e",
".git/objects/2b/6beabfba107228961ddbfbd26b3331f5c3dd2b": "7466861c755ae77572e5d3d49f41f0a2",
".git/objects/30/c3a1e2c3691a58680d81857e88d824ec1e1d96": "58cbd6933db37877741c497700cde19e",
".git/objects/31/13b9a4b6f794dcc193ee8ae4c61bef9adfef34": "4895ff455b9af7f04b104a57ffcee08a",
".git/objects/33/19d9a3c311a4112381fd7d185e901ba8770c0c": "18e6f44d9ac5abe224977b392f6c53db",
".git/objects/3b/f0a7dd24789707927624e8fb380001ec99701a": "8fdb6e4b432a766a1754ebf1cbe52f3b",
".git/objects/41/dfc274557ecf363dd7d3f5434e00b3c69aaad2": "0bdd53955b1f4f671befe1bcb0ddc96f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/7a01b30de5965bf84c8c4506d4190f75bb85c8": "99ebc3fa93e4d5ef67182e36e2896180",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/cc8587bbd20b66da8532159bb20189d9a531e8": "3f6dd66768f72c519d033c7c867247e5",
".git/objects/4f/32932e659e0cab4a77be8b20f7166565ab4fc0": "e0e0b638f5622e81cc3bd80cf7a0ef5a",
".git/objects/50/21bb370bd72e3b77606e4fba4d3d771c36d6a1": "46b06fc936b95f89136afce1215ab4ab",
".git/objects/52/46a76ddd289876c3c85bf3938dfc1772631108": "3bfdd8c170392a7736f07448b67d15a6",
".git/objects/52/58fcf791fdca705444704d8a3f337458086605": "aa0ae747440ee6af7d6504bcf2fc5d96",
".git/objects/53/aab246a6e19c365fae34cac68e40812894b18b": "592c1c7cd6e4797d7d2f401f2060f4c0",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5c/b7031e3e60f26918e652aa7b462af9be6acb80": "a76abd1a71d3880faeae8efdbcdca85b",
".git/objects/62/9cac9337804e554b69da40595a41384fb0d6be": "97f55887e1ba5b452d515a753cf4d2da",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/34924a3caab7300da10f6d5f0183eed9ce6ef1": "014b6c2406342c03cd7668f89a464a46",
".git/objects/6e/28ea459019829dea808789ee056959ad862d93": "9a0f1aa4fa406a921b777733c311ee26",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/c8067ad14775693a2616e539924f17f3340eff": "7b809a239dedd090d7f3c1298f62405d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/07c27df945cdf9ec8a6b96bf99ee80c5e7150a": "f4934bf8d443c8c8d944b1eb11deb599",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/9257617d441fac14782b2408a78f771901f82f": "e98a7e3cf62326bb8f6683dfcd0d7f75",
".git/objects/8c/99e329fb95e0666ec8aa71c3171cd591cd81b5": "292850456745e0a5be2c45e0b8419078",
".git/objects/8e/056b30d2216bd087712290a327ad6a11b1eb0b": "acc5ace0740033aaf68ec537788917c1",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9a/7d74da5bd93460f1d0b69dd8e76a869f261927": "d41143e3026152072d32acba26e64a47",
".git/objects/a3/3d6dafb77b5d0556ddc860e5d005a8fc654a35": "84122cd44959b64a1085dac2d5264eca",
".git/objects/a5/4183fe597ac0427c996e5a969e4bdd75712f6c": "f49cc32ce4919aa3035367275c16d8b6",
".git/objects/b2/292edbc3c95a67c5702a1c4647e465e8746bc0": "21ff89d8c09a234cd012cfd34652697e",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1fefb629d1995b222c575cc65e3da18b8cbd07": "b091d0c51f54c75f1b997efa0b176727",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c5/53a55ff496f8aec3b0dbecb194084b9442e1c9": "ac1e6c83c8f4a44b214d46b58bf0db36",
".git/objects/c8/bbaa7d8db88fe27a83d943dfcee2bd14e29c94": "4b521e4fab58b0cc59ec4415a97f6c52",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/ce/736361652f39414a3bd68326e027fdcbe5819d": "6fc38f0459eab95e0a7bafab5d5a3fbc",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/ed674545c14ecf0116eb35d6d1f92f90772dc5": "778da3cd63f5afa935ca427ade4c9cfb",
".git/objects/d3/442783ed0819b377ffac893654ae4ad6bb768b": "6480207851c34cb2982e8c393720a3a8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/cc2798db1a32e8f764994cfc05cd95ce807a42": "ab39b3611089cf8515e52311fef20b66",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/b6a93caa33cf9b21ae50ee97c8dd743969cc6b": "2122f3290a984e9f7422dbedc0331fd8",
".git/objects/db/214b73b9c527cb96e6412b075e4c8d97001bf7": "49542b68c637aa26405fd105bb85d1be",
".git/objects/e9/cb0020c8733afa166a2dd55e265818570cf2ef": "d6b57a4ff2b1fbdebd6ccffa72cbfd30",
".git/objects/e9/d40332b267961b3c02b336a1509362ac8c0a8c": "ec98154e48ba55895c1b99d664127283",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/785c243230e8e19d5c572c25d3ecdc2b310ba7": "fedafa9083aef7ad898459944590025c",
".git/objects/ed/ea519d92e2ec471860e6eb1b62f60f50273b64": "1f28cd9449420f3131bc62d806ba0389",
".git/objects/ee/1b41f247c1300817725a8b1b966b950daf0289": "7e4e57693ff84bb51b73d15d958c6672",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/71aaa27173b8aea49ac02c983872452d239956": "8da6ce09cf737472d1961f5d16bfc897",
".git/objects/f5/a7461ce907f2c837d7e425930faf232f0699cd": "04875f9c1772acdcf3c4a97282170a60",
".git/objects/f8/2c53ba0d6a191ea5ebc4233aa5ba8369afe3b8": "2d72c36d5e54eafc88fff113db5ee71c",
".git/objects/fc/3b647b34a5150d8d201b41442a3434cb84f9b9": "e0998e521b8bf6f0b7e1c3615798c86f",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "5c94ddfcfd6096ffafb3ae3df6c6a11e",
".git/refs/remotes/origin/main": "5c94ddfcfd6096ffafb3ae3df6c6a11e",
"assets/AssetManifest.bin": "15c4dbb5f1445cabbde8f1de5d4f864d",
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
"flutter_bootstrap.js": "bfc8a04053d20eec922efd79ad7817ba",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99ec1437a918c4a651f080c292fa4deb",
"/": "99ec1437a918c4a651f080c292fa4deb",
"main.dart.js": "5091fef27d630511bd6f5e0b95de6bb3",
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
