const CACHE_NAME = 'level-survey-offline-v20260707-01';
const APP_SHELL = [
  './index_marker_zoom_pointlist_added_split_graphline_affine_gesture_offline_pwa.html',
  './manifest.webmanifest',
  './level-icon-180.png',
  './level-icon-192.png',
  './level-icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

self.addEventListener('message', event => {
  if(event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;

  if(req.mode === 'navigate') {
    event.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put('./index_marker_zoom_pointlist_added_split_graphline_affine_gesture_offline_pwa.html', copy));
        return res;
      }).catch(() => caches.match('./index_marker_zoom_pointlist_added_split_graphline_affine_gesture_offline_pwa.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(res => {
      if(res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      }
      return res;
    }).catch(() => cached))
  );
});
