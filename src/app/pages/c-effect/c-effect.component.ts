import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';

@Component({
  selector: 'app-effect',
  imports: [BasicPageComponent],
  templateUrl: './c-effect.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EffectComponent {
  readonly value = signal(0);
  readonly lastEffectRun = signal('');

  constructor() {
    effect(() => {
      const currentValue = this.value();
      this.lastEffectRun.set(new Date().toLocaleTimeString());
      console.log('Effect ran with value:', currentValue);
    });
  }

  increment() {
    this.value.update((value) => value + 1);
  }
}
