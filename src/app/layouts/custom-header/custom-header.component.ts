import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, TemplateRef, Input, ViewChild, NgModule, Output, EventEmitter } from '@angular/core';

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
  @Output() readonly dxRepaintRequired = new EventEmitter<void>();

  refresh(): void {
    this.dxRepaintRequired.emit();
  }
}

@NgModule({
  imports: [CommonModule],
  declarations: [ CustomHeaderComponent ],
  exports: [ CustomHeaderComponent ]
})
export class CustomHeaderModule {}
