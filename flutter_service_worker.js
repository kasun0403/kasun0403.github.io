'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "0c71fe8187505d1db0dfc0f2dd9aed69",
".git/config": "047b97667caaa2f2ed359c8e93a6e25f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9180e77325bac0688fae7571673f0de0",
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
".git/index": "e4a5bb385b709855d59a3b399dad6820",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "68348a36ba96bcaa1269a28e3f1870d7",
".git/logs/refs/heads/main": "83a9b2d5fb2029355c939eb01403cb5c",
".git/logs/refs/remotes/origin/main": "f1ddd6a1f06c04c890b82f62bdbb653f",
".git/objects/04/69b21cfb1f06888dff10f6d60a02a6f904cf06": "f9c6089d15d4eb6b2b71ada791d1ff2b",
".git/objects/09/5b6b9a699dba3fca220c95f46b02b9845dac5f": "4e488249eeed091c33ea49d2715b7ad5",
".git/objects/0a/78425104118b084e060a16ac5e47add3c849f4": "6832c2db1232a22d45cb9c4b445a8530",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/0c/e5230e42dc1cd6863d90ebbf9a809b057d3da9": "51be297ea1c1a891d4ab58d4e75d61e1",
".git/objects/0e/95a86c87542638b8684d05414603031bae71cf": "4b2e93c36725baac62684b03a18babc5",
".git/objects/0f/079583845e112bdb46600f4cd4c6375f30263b": "bcf17119034e2ec713a945e6efdd84c2",
".git/objects/0f/0ba88831edacb15c8504a867e078b56be6d411": "1d33665bd1a6edc4af81e2b8a35d2414",
".git/objects/0f/bde152bb7e8ddec5a5a01a8d987d0b4d797db6": "c1421bdab35ee9a5903ef4cd987d6839",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1a/d3942336cf6d14921ffe6c081981f0fbb34b38": "75587d5bf234e6973e5a0dcbc66fb81c",
".git/objects/1d/c5875c6017061b317f740e58556ae1c24b67ea": "b91b266beb66ebf1ef68a0db1aae78c5",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/bb1e2756e1d5ff08e0884ff7966cd9822f0014": "792d3f19216418ea90baf9e2d596e01f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/21/f0ad48dc16c53401400f0834c4eee3b77c8d1a": "e6a66dbd1c4ef10fa427c72c1dbe66d1",
".git/objects/23/74d837bf833b63a6f254b8e6106178ca64f55e": "88498c67a624b7aa2bf37d08be7f0ae2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/28/24880d76623ea45279bdbdab46deefa4915b34": "b00a3565631cc429ef99528efc2ccdee",
".git/objects/2a/2aa7b7758d912a9bb4daf2cd2c976531fc8c32": "fda7172d4dc3f8925a1304a7dd500909",
".git/objects/2b/6beabfba107228961ddbfbd26b3331f5c3dd2b": "7466861c755ae77572e5d3d49f41f0a2",
".git/objects/30/87b23c5a3d234242f532dcd704b9e2fe419554": "a9519124f9bfc3d8f9a713969e0f5e4d",
".git/objects/31/13b9a4b6f794dcc193ee8ae4c61bef9adfef34": "4895ff455b9af7f04b104a57ffcee08a",
".git/objects/37/b4946eef8185bdb5b185059e34d9530f4b09a8": "353bcc91146cccb062c38aa9114a905c",
".git/objects/3b/f0a7dd24789707927624e8fb380001ec99701a": "8fdb6e4b432a766a1754ebf1cbe52f3b",
".git/objects/3d/f99fc9a625e82b2183d648a12dd1730a118df1": "276a1f8b29685455f006a2ee2170866e",
".git/objects/3e/c63812c96993e68eb8af98fe70b8ab94114ce9": "0a4e54ced4a33acb021864af35a40c4c",
".git/objects/40/ec6d70e991efe9da1973f2eefb24ba568f3640": "a919eab7d1e617aa88741caa1ad96297",
".git/objects/41/dfc274557ecf363dd7d3f5434e00b3c69aaad2": "0bdd53955b1f4f671befe1bcb0ddc96f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2397b42e958b8508828aeb4c604219989c6113": "04a8325f3f07db7fd5688ccfe3ce13bf",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/02e3bd7d5cbf85ee4fa58b8f6617604a67aadd": "6a8cbf516a6e50984b9005a96c16bb79",
".git/objects/55/2ddfd8dcee099ea83800343f24f46a8b03e143": "7787b7d927339bccf557f9b4205e4013",
".git/objects/55/c240a818b37bb9477016d2c7cc888d830985d7": "a7ddd85890d19b6e503ef88d8a449f7e",
".git/objects/56/11787bfbc3c5d9bef0749a843272428211f644": "29f443489e0516d6cc4f90ec12acfd0e",
".git/objects/56/a988fa379ecf826c36bac142ef24082cb3e5f7": "e171cb319f9e2ee03c502199518c2515",
".git/objects/57/797cfcf418e010a9f386afeaaf4fb8001ab5f4": "c08aa2d22a30909d865a53d7a29eb309",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/59/55bdaf6e4f48209013e0be9e2cad139196e51c": "5f8e3f8855dfadc14ef9157fa3bc836c",
".git/objects/59/8f1c601d53ca5043e08b504676a426cf9e2156": "8b394db9af26adda63e34912cea9faee",
".git/objects/5c/f6ad19008fcbccc54c5350127e628f4110e783": "a177c0d7ea12befc4463c027375abde5",
".git/objects/62/7cef96aafd45d35a16fd98a898c1cfa75deddd": "89fa65807219f04ce5201700f49e3163",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/65/b87a1765388b3995ccaa65d389790353f1167d": "810a0b744956554881c46a0919301b3d",
".git/objects/69/b50952e4eb324789290f7c2d3e8afa57987bd2": "397717b0b7e8d4f3512f28c4b5ede80c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/75/98d6164e50c87df8375210f7db4d9a6d3f906e": "4d09392b306a0a5fdbefd8dae5bee184",
".git/objects/77/3550f755cbd80672565707b05383e1d235080e": "2019688299259421a74bee4e64ba8a7d",
".git/objects/79/a63991c99502c22c395553575c7107dbd78750": "67dbc87ceb16aae9e418f63e276ea36d",
".git/objects/83/1ae730dac9847ac394c50c35d2cc9f6bb1aa80": "4c5c6bfd836d1a7da156abef73712b6f",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/41b9f7d6a38eb63fb12c13edd7ed700946deba": "09eadcd0c7a1920a551f4aa7673084d8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/caebd3b2a72ba1f2abec0b21bc5185e7438ee1": "369a24469a0e9b10e1d914ac6d98ba7d",
".git/objects/90/4c5cb077dc41c98abca4723f7115fb70e37b7e": "63ce35f60f2bdb4fa7ae2d047bc4441f",
".git/objects/92/67f29169b5d794f31832fe3e79949dd2980af2": "c5bf6547b056e29cd394ca817028acab",
".git/objects/93/17d50def37bcd8969dcc11e1886532b1d3e65e": "04d4e8b69b6e871d7ca0671c7f3a585e",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/9b/ce02f0cc2e82d330bafb44ad753b17cf6ec196": "97591bf23ffe7219cf559c1096487e06",
".git/objects/a5/8fb6a13570afda7d384b4f9928fb17eabef4a8": "730fd249d254bc15960238f470ddbcea",
".git/objects/a8/1ff88f4a0c5b9d0d8c7e184c54b94d9fef3db6": "5f0a91765ca2c0ac2d47228a2789c9c0",
".git/objects/ac/37d7b7f98bc4ed0be986e81379998817f25312": "1b281bf3f0ba22a7ad65a0e130e5ab67",
".git/objects/af/3e107ff34a74d5c220a9dbc054a3ea1f60dd56": "124e2f6bba8c793e03f584a9e85aa727",
".git/objects/b3/201a0768bbe341f22fed7306059a926933a7ee": "6837ba28271562488e3eb00697072990",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/1fefb629d1995b222c575cc65e3da18b8cbd07": "b091d0c51f54c75f1b997efa0b176727",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/b9e6bd8544df4d753432d66cfa603f476f074d": "31c15a3295b964b420b3cfddb5128346",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/8bd340c25c7242030127c219e0c7eb6297dadb": "dff2e9e96ff3ec238393a3b6ac297f70",
".git/objects/c7/391fd07e3024607478a62d4bc42bfb5574970e": "098c6f386c6c8b4bb3022fb0ce8809d8",
".git/objects/c8/bbaa7d8db88fe27a83d943dfcee2bd14e29c94": "4b521e4fab58b0cc59ec4415a97f6c52",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/cd/29520cb6fce1544ead408801335c1674965c80": "9455f0a1096f94b387bbb21563d3e411",
".git/objects/cd/d475b9d14b21ff8fab84e7d6254e1b8b5502f5": "7919d76942247650051e4f5bfb24c2d0",
".git/objects/ce/736361652f39414a3bd68326e027fdcbe5819d": "6fc38f0459eab95e0a7bafab5d5a3fbc",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/68b0571b7aa4801e3e0cc87d4c816a3887fb26": "7b5e94075703512ad4a12a35095aa9fe",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/86d2006e21d51c62d97d0d93e42d0b1b1c844f": "8b26a6fd43643137d509c5ab5dd11959",
".git/objects/e4/4fffda9ebcf5730cac492dc8a9f5a8d6a9130b": "e625d19ec13e1058a63d7b35725f6920",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/785c243230e8e19d5c572c25d3ecdc2b310ba7": "fedafa9083aef7ad898459944590025c",
".git/objects/ee/0172bb42affad2fd70f88c31a97d81a9b665ab": "5d79968ca153611ecb72895b932d43ef",
".git/objects/ef/29d63fb637999989350fac23aec12638d3ff0d": "345617c10ba78d42114fb871c70c8649",
".git/objects/f0/634b8c61e740f9023dae50c2e10b6d277faa4d": "eab245446dd82dea7e85de88be69429d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/385b291876e5e919e8c0743a02d968ed68b71a": "be3b1c1757cd8bc7189713189ce42fe0",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/ff/bc20e8c42045e944b26fa360ba1520f1793f06": "3ff90350100b96e34c3d685a6404018a",
".git/ORIG_HEAD": "178e152558fac4aef35798a1f2b3bbcb",
".git/refs/heads/main": "6f33edd1a8cd345880c2d3c0cfc3506f",
".git/refs/remotes/origin/main": "6f33edd1a8cd345880c2d3c0cfc3506f",
"assets/AssetManifest.bin": "88a35d5a2333b3d09e2c9ee5d7b5edbd",
"assets/AssetManifest.bin.json": "5d15bbe1e84849d36c348f08593f7439",
"assets/AssetManifest.json": "56351378aaa97cc8f9b58eec36c04b90",
"assets/assets/images/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/images/kasun.jpg": "7ba0d5ce06dadf3c7771fb24a0c77c09",
"assets/assets/images/linkedin.png": "898c0407d74c75fa110de76293d96ddd",
"assets/assets/images/me.png": "bd9b76514d68f7e031840dab2f48bc53",
"assets/assets/images/my_portfolio_site.png": "a06567294c878ec1ed3234e27cfcdca1",
"assets/assets/images/profile.jpg": "40b2cdb7b3823ded80c8a04fa356dc65",
"assets/assets/images/simple_weather_app.png": "f94867860e1611ebbe143c399a213285",
"assets/assets/lottie/api.json": "f8205833cda71ab4b001a4e74fa00252",
"assets/assets/lottie/firebaselottie.json": "0be4e1c612931d30278537ddf63bd969",
"assets/assets/lottie/flutter.json": "ab819bc7ddbca7dcd5f74fffc02e2f53",
"assets/assets/lottie/git.json": "d4e153ca39a7a9c25223a533e66fd1e7",
"assets/assets/lottie/up_arrow.json": "7a1c01854fdcd5228883fd7660554fe1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "769c1d66142cead7b5c4a8f43187fbc9",
"assets/NOTICES": "a05ef75a05679cec9348dda0cfd7bebd",
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
"CNAME": "245ddbd2ab48f22b4cb44199edd30272",
"favicon.ico": "04d7650a133160fe3b773b723099a52c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "ee83d759e9c7cd8bac59cfd736f2c34d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "99ec1437a918c4a651f080c292fa4deb",
"/": "99ec1437a918c4a651f080c292fa4deb",
"main.dart.js": "f5dd081c798a660c4af4bc63fe337e0a",
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
