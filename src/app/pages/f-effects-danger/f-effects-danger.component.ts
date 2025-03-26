import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';

@Component({
  selector: 'app-effects-danger',
  imports: [BasicPageComponent],
  templateUrl: './f-effects-danger.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EffectsDangerComponent {
  readonly catEnergy = signal(0);
  readonly memorySaverActivated = signal(true);

  constructor() {
    // This is a dangerous effect that will cause a memory leak
    // because it updates the same signal that triggers it
    effect(() => {
      const currentEnergy = this.catEnergy();
      console.log('Cat energy level:', currentEnergy);

      if (!this.memorySaverActivated()) {
        this.catEnergy.update((energy) => energy + 1);
      }
    });
  }

  giveFoodToCat() {
    this.catEnergy.update((energy) => energy + 1);
  }

  deactivateMemorySaver() {
    this.memorySaverActivated.set(false);
  }
}
