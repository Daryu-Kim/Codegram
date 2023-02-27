if ('serviceWorker' in navigator) {
    // Wait for the 'load' event to not block other work
    window.addEventListener('load', async () => {
        // Try to register the service worker.
        try {
            // Capture the registration for later use, if needed
            let reg;

            // import.meta.env.DEV is a special environment variable injected by Vite to let us know we're in development mode. Here, we can use the JS Module form of our service worker because we can control our browsers in dev.
            if (import.meta.env.DEV) {
                reg = await navigator.serviceWorker.register('/service-worker.js', {
                    type: 'module',
                });
            } else {
                // In production, we use the normal service worker registration
                reg = await navigator.serviceWorker.register('/service-worker.js');
            }

            console.log('Service worker registered! 😎', reg);
        } catch (err) {
            console.log('😥 Service worker registration failed: ', err);
        }
    });
    // navigator.serviceWorker.register("/service-worker.js", { scope: './' });
}