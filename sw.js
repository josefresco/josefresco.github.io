const CACHE_NAME = 'josefresco-v3';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/favicon.ico',
  '/blog/',
  '/blog/index.html',
  '/blog/jf-website-monitor-launch.html',
  '/blog/moving-hosting-to-github-pages-with-gemini-ai.html',
  '/projects/jf-website-monitor.html',
  '/projects/jf-notify.html'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(response => {
        // For HTML documents, try network first, then fall back to cache
        if (event.request.destination === 'document') {
          return fetch(event.request).then(networkResponse => {
            // Update cache with the new version
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          }).catch(() => {
            // If network fails, return cached version
            return response;
          });
        }

        // For CSS and JS, also use network first so updates are always picked up
        if (event.request.destination === 'style' || event.request.destination === 'script') {
          return fetch(event.request).then(networkResponse => {
            if (networkResponse.ok) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => response);
        }

        // For other assets (images, fonts), cache first
        return response || fetch(event.request).then(networkResponse => {
          // Add to cache if successfully fetched
          if (networkResponse.ok) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        });
      });
    })
  );
});

// Take control of all clients immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});