import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-signal',
  templateUrl: './a-basic-signal.component.html',
})
export class BasicSignalComponent {
  counter = signal(0);

  increment() {
    this.counter.update((value) => value + 1);
  }
}
