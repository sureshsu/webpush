
const publicVapidKey = "BN0jN1hriVqen2fKNY9Z1_6I2JfV2F4FxWPhOFSLEXo2ZbFL0ada28tT8oQvZon1Bzm9DxupkhDEz6ZM670npr0";

if('serviceWorker' in navigator) {
    registerServiceWorker().catch(console.log)
}

async function registerServiceWorker() {
    const register = await navigator.serviceWorker.register('/worker.js', {
        scope: '/'
    });

    const subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicVapidKey,
    });

    // await fetch("/subscribe", {
    //     method: "POST",
    //     body: JSON.stringify(subscription),
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // })
}