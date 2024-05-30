import { Component, HostBinding, OnInit } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  button1Visible = false;
  button2Visible = false;

  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { }

  ngOnInit(): void {
      setTimeout(() => (this.button1Visible = true), 1000);
      setTimeout(() => (this.button2Visible = true), 5000);
  }

  isAuthenticated() {
    return this.authService.loggedIn;
  }
}
