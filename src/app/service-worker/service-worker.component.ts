import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service-worker',
  templateUrl: './service-worker.component.html',
  styleUrls: ['./service-worker.component.scss']
})
export class ServiceWorkerComponent implements OnInit {
  serviceWorkerContent: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadServiceWorker();
  }

  loadServiceWorker() {
    // Assuming the service worker file is stored in the assets folder
    const filePath = 'assets/notificationapi-service-worker-0697cc83d566c337f10fdfafdd4c765b.js';
    this.http.get(filePath, { responseType: 'text' })
      .subscribe(
        data => {
          this.serviceWorkerContent = data;
        },
        error => {
          console.error('Error loading service worker file:', error);
        }
      );
  }
}
