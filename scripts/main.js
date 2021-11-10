async function registerDualisDeltaWorker() {
    navigator.serviceWorker.register('sw.js')
    const registration = await navigator.serviceWorker.ready;
    try {
      await registration.periodicSync.register('check_for_dualis_delta', {
        minInterval: 5 * 60 * 1000,
      });
    } catch {
      console.log('Periodic Sync could not be registered!');
    }
}
  
async function unregisterDualisDeltaWorker(){
    navigator.serviceWorker.ready.then(registration => {
        registration.periodicSync.unregister('check_for_dualis_delta');
    });
}
