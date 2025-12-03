// Service Worker bem simples, só para habilitar o PWA

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  clients.claim();
});

// Não fazemos cache extra, só deixamos passar as requisições
self.addEventListener("fetch", () => {
  // modo pass-through
});
