import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Registering the service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-workers/notificationapi-service-worker-0697cc83d566c337f10fdfafdd4c765b.js')

      .then(registration => {
        // Registration was successful
        console.log('Service Worker registration successful with scope: ', registration.scope);
      })
      .catch(err => {
        // Registration failed
        console.error('Service Worker registration failed: ', err);
      });
  });
}

// Bootstrap the application
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
