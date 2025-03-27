import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ChildComponent } from './child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent, CommonModule],
  template: `
    <div class="p-4 border rounded-lg bg-gray-50 border-gray-300">
      <h2 class="text-xl font-bold mb-4">Parent Component</h2>
      <p class="mb-4">Parent Signal: {{ parentSignalObject() | json }}</p>
      <p class="mb-4">Parent Object: {{ parentInputObject | json }}</p>
      <div class="space-x-2">
        <button
          (click)="incrementSignalsValue()"
          class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer">
          Increment Signal Value
        </button>
        <button
          (click)="updateObject()"
          class="bg-blue-600 text-white px-4 py-2 mb-2 rounded hover:bg-blue-700 cursor-pointer">
          Update Object Value
        </button>
      </div>
      <!-- [inputNumber]="parentInputNumber" -->
      <app-child [inputObject]="parentInputObject" [signalObject]="parentSignalObject()"></app-child>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  parentInputObject = { value1: 0, value2: 0 };
  readonly parentSignalObject = signal({ value1: 0, value2: 0 });

  incrementSignalsValue() {
    this.parentSignalObject.update((obj) => ({
      ...obj,
      value1: obj.value1 + 1,
    }));
  }

  updateObject() {
    this.parentInputObject.value1 = this.parentInputObject.value1 + 1;
  }
}
