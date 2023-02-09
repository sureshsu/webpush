console.log("Service worker loaded...");

self.addEventListener('push', function(e) {
    const data = e.data.json();
    console.log("SW: ", data);
          e.waitUntil(
          self.registration.showNotification(data.title, {
              body: data.body,
          }));
})