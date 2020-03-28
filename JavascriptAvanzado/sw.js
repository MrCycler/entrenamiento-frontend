const VERSION = "v1"
//Al inicio pone en cache los registros que deben estar disponibles
self.addEventListener('install',
event =>
{
    event.waitUntil(precache());
})

//Cada vez que se hace una busqueda o llamada a recursos
self.addEventListener('fetch', 
event =>
{
    const request = event.request;
    //verifica que el metodo es get
    if (request.method !== "GET"){
        return;
    }
    //responde a la llamada, buscando en cache
    event.respondWith(cachedResponse(request));

    //actualiza el cache
    event.waitUntil(updateCache(request));
}
)


async function precache(){
    const cache = await caches.open(VERSION);
    cache.addAll(
        [
            '/',
            '/index.html',
            '/assets/index.js',
            '/assets/MediaPlayer.js',
            '/assets/plugins/AutoPlay.js',
            '/assets/plugins/AutoPause.js',
            '/assets/index.css',
            '/assets/BigBuckBunny.mp4',
        ]
    )
}

async function cachedResponse (request){
    const cache = await caches.open(VERSION);
    //verifica si esta en cache para responder desde el service worker
    const response = await cache.match(request);
    //si no esta en cache se realizará la peticion fetch normal
    return response || fetch(request);
}

async function updateCache (request){
    const cache = await caches.open(VERSION);
    //verifica si esta en cache para responder desde el service worker
    const response = await fetch(request);
    return cache.put(request,response);
}