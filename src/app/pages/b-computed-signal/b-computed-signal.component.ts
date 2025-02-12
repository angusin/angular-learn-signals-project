import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-computed-signal',
  templateUrl: './b-computed-signal.component.html',
})
export class ComputedSignalComponent {
  first = signal(0);
  second = signal(0);
  sum = computed(() => this.first() + this.second());

  incrementFirst() {
    this.first.update((value) => value + 1);
  }

  incrementSecond() {
    this.second.update((value) => value + 1);
  }
}
