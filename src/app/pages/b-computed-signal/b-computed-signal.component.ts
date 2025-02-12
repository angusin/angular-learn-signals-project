import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';

@Component({
  selector: 'app-computed-signal',
  imports: [BasicPageComponent],
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
