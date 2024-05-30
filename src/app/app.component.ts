import { Component, HostBinding, OnInit, signal } from '@angular/core';
import { AuthService, ScreenService, AppInfoService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  button1Visible = signal(true);
  button2Visible = signal(false);

  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { }

  isAuthenticated() {
    return this.authService.loggedIn;
  }

  toggleButton1(): void {
    this.button1Visible.update((value) => !value);
  }

  toggleButton2(): void {
    this.button2Visible.update((value) => !value);
  }
}
