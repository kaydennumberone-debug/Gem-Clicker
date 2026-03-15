// sw.js (very small skeleton; expand if you want offline caching)
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', event => {
  // Minimal: let browser handle network normally.
  // To add offline caching, implement a cache-first or network-first strategy here.
});
