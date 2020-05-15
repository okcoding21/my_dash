'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "33ef923f0b35994f1f3948f75eadfaae",
"assets/assets/fonts/BebasNeue-Regular.ttf": "4290ea77f18e51028fc4eb0b77136e7e",
"assets/assets/img1.png": "7ce2612249e4acc3b935f237d3d2a6a2",
"assets/FontManifest.json": "6e202dcdc10a0ad2ace86e124965d99f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "59844a026d05c04ff832a90250bb1baa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "1051303bccb8d8c2a105cfbecc4c0ac3",
"/": "1051303bccb8d8c2a105cfbecc4c0ac3",
"main.dart.js": "afe2171576be3446e3344351fc83df73",
"manifest.json": "182aa1b965428a97b14844217ebe3139"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
