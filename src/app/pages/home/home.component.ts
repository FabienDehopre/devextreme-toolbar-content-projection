import { Component, signal } from '@angular/core';

@Component({
  templateUrl: 'home.component.html',
  styleUrls: [ './home.component.scss' ]
})

export class HomeComponent {
  readonly showToolbarButton1 = signal(true);
  readonly showToolbarButton2 = signal(true);

  toggleToolbarButton1Visibility(): void {
    this.showToolbarButton1.update(value => !value);
  }

  toggleToolbarButton2Visibility(): void {
    this.showToolbarButton2.update(value => !value);
  }
}
