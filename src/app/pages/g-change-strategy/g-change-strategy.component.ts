import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ParentComponent } from './parent.component';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';

@Component({
  selector: 'app-change-strategy',
  standalone: true,
  imports: [BasicPageComponent, ParentComponent],
  template: `
    <app-basic-page title="Change Detection Strategy">
      <div class="space-y-4">
        <p class="mb-4">
          This example demonstrates change detection strategy with OnPush in both parent and child components. The
          parent component uses a signal and a normal input and passes its values to the child component.
        </p>
        <p class="mb-4 font-semibold">
          Check how updating any key of the input object does not trigger the change detection in the child component.
        </p>
        <app-parent></app-parent>
      </div>
    </app-basic-page>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeStrategyComponent {}
