// sw.js
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('my-cache').then(function(cache) {
      return cache.addAll([
        '//www.trybetterbrand.com/cdn/shop/t/280/assets/style-cache.css?v=50093671914514251491768516147',
        '//www.trybetterbrand.com/cdn/shop/t/280/assets/jquery-3-7.min.js?v=158417595810649192771768516146',
        '//www.trybetterbrand.com/cdn/shop/t/280/assets/VastaShop.js?v=70123759285894284471768944596'
      ]);
    }).catch(function(error) {
      console.error('Cache resources error:', error);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
