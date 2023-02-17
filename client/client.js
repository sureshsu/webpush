
const publicVapidKey = "BN0jN1hriVqen2fKNY9Z1_6I2JfV2F4FxWPhOFSLEXo2ZbFL0ada28tT8oQvZon1Bzm9DxupkhDEz6ZM670npr0";

if('serviceWorker' in navigator) {
    registerServiceWorker().catch(console.log)
}

async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('./worker.js', {
        scope: '/webpush/client/'
    }); 

    console.log("service worker = "+ register);

//     const subscription = await register.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: publicVapidKey,
//     });
    
    navigator.serviceWorker.ready.then(
      (serviceWorkerRegistration) => {
            const options = {
              userVisibleOnly: true,
              applicationServerKey: publicVapidKey,
            };
            serviceWorkerRegistration.pushManager.subscribe(options).then(
              (pushSubscription) => {
                console.log(pushSubscription.endpoint);
                // The push subscription details needed by the application
                // server are now available, and can be sent to it using,
                // for example, an XMLHttpRequest.
              }, (error) => {
                // During development it often helps to log errors to the
                // console. In a production environment it might make sense to
                // also report information about errors back to the
                // application server.
                console.log(error);
              }
            );
    });

    // console.log("pushManager subscription = "+ subscription);

    // await fetch("/subscribe", {
    //     method: "POST",
    //     body: JSON.stringify(subscription),
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // })
}
