import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';

@Component({
  selector: 'app-basic-signal',
  imports: [BasicPageComponent],
  templateUrl: './a-basic-signal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicSignalComponent {
  readonly counter = signal(0);

  set(value: number) {
    this.counter.set(value);
  }

  increment() {
    this.counter.update((value) => value + 1);
  }
}
