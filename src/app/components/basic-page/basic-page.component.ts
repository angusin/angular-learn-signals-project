import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [],
  templateUrl: './basic-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicPageComponent {
  readonly title = input<string>('Page title');
}
