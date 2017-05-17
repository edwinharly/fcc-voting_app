import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'Voty Vote';
  // isLoggedIn: boolean = true;

  constructor(private auth: AuthService) {
    // auth.handleAuthentication();
  }
  
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
