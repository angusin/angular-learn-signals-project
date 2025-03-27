import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4 mt-4 border rounded-lg bg-green-50 border-green-400">
      <h3 class="text-lg font-semibold mb-4">Child Component</h3>
      <p class="mb-4">Received Signal: {{ signalObject() | json }}</p>
      <p class="mb-4">Received Object: {{ inputObject | json }}</p>
      <button
        (click)="markForCheck()"
        class="  cursor-pointer mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
        Force Update
      </button>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  // eslint-disable-next-line @angular-eslint/prefer-signals
  @Input() inputObject!: { value1: number; value2: number };

  readonly signalNumber = input(0);
  readonly signalObject = input({ value1: 0, value2: 0 });

  constructor(private cdr: ChangeDetectorRef) {}

  markForCheck() {
    this.cdr.detectChanges();
  }
}
