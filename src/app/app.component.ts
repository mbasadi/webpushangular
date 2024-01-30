import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import NotificationAPI from 'notificationapi-js-client-sdk';
import { PopupPosition } from 'notificationapi-js-client-sdk/lib/interfaces';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'noti';

  ngOnInit() {
    const notificationapi = new NotificationAPI({
      userId: "mohammad+20231220@notificationapi.com", // Replace with actual user ID
      clientId: "3oaf47l8aumbvhko4d1d3jhg69", // Replace with your NotificationAPI client ID
    });

    notificationapi.showInApp({
      root: 'bell-container',
      popupPosition: PopupPosition.BottomLeft
    });
  }
}
