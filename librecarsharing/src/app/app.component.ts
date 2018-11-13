import { Component, OnInit } from '@angular/core';
import { getHostElement } from '@angular/core/src/render3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'librecarsharing';

  logout() {
    window.location.href = "http://localhost:8080/auth/realms/testing/protocol/openid-connect/logout?redirect_uri=http%3A%2F%2Flocalhost%3A4200";
  }
}
