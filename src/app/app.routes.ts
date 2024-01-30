import { Routes } from '@angular/router';
import { ServiceWorkerComponent } from "./service-worker/service-worker.component";

export const routes: Routes = [
    { path: 'notificationapi-service-worker.js', component: ServiceWorkerComponent },
];
