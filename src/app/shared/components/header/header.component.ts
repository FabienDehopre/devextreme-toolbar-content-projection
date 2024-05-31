import { Component, NgModule, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService, IUser } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxToolbarModule } from 'devextreme-angular/ui/toolbar';

import { Router } from '@angular/router';
import { CustomHeaderComponent } from 'src/app/layouts';
import { ItemRenderedEvent } from 'devextreme/ui/toolbar';

const STATIC_ITEMS_BEFORE_PROJECTED_ITEMS = 2;

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  @Input()
  title!: string;

  @Input()
  customHeaders: CustomHeaderComponent[] = [];

  user: IUser | null = { email: '' };

  userMenuItems = [{
    text: 'Profile',
    icon: 'user',
    onClick: () => {
      this.router.navigate(['/profile']);
    }
  },
  {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      this.authService.logOut();
    }
  }];

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getUser().then((e) => this.user = e.data);
  }

  toggleMenu = () => {
    this.menuToggle.emit();
  }

  onItemRendered({ itemIndex, itemElement }: ItemRenderedEvent): void {
    const customHeadersCount = this.customHeaders.length;
    if (
      itemIndex >= STATIC_ITEMS_BEFORE_PROJECTED_ITEMS &&
      itemIndex < customHeadersCount + STATIC_ITEMS_BEFORE_PROJECTED_ITEMS &&
      // this query find all DX widgets that are empty inside the current toolbar item
      itemElement.querySelectorAll('[class*="dx-widget"]:empty').length > 0
    ) {
      this.customHeaders[itemIndex - STATIC_ITEMS_BEFORE_PROJECTED_ITEMS].refresh();
    }
  }
}

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    UserPanelModule,
    DxToolbarModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
