const CACHE_NAME = 'studyhub-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/service-worker.js',
  // Add Tailwind CDN and any other assets
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
