import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, TemplateRef, Input, ViewChild, NgModule } from '@angular/core';

@Component({
  selector: 'app-custom-header',
  template: `<ng-template #content><ng-content /></ng-template>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomHeaderComponent {
  @Input() cssClass?: string;
  @Input() disabled = false;
  @Input() locateInMenu: 'always' | 'auto' | 'never' = 'never';
  @Input() location: 'after' | 'before' | 'center' = 'center';
  @Input() visible = true;
  @ViewChild('content', { static: true }) content!: TemplateRef<any>;
}

@NgModule({
  imports: [CommonModule],
  declarations: [ CustomHeaderComponent ],
  exports: [ CustomHeaderComponent ]
})
export class CustomHeaderModule { }
