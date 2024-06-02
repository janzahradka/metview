const CACHE_VERSION = 'v2.1.2'; // Increment this value to force cache update
const CACHE_NAME = `metview-cache-${CACHE_VERSION}`;
const urlsToCache = [
    '/',
    `/index.html?version=${CACHE_VERSION}`, // Versioned index.html
    `/styles.css`, // Stylesheet
    `/script.js`, // JavaScript file
    '/icons/icon-32x32.png', // Icon
    '/manifest.json', // Manifest
    '/groups.json', // Groups data
    '/disclaimer.json' // Disclaimer data
];

self.addEventListener('install', event => {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
