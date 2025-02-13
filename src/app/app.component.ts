import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopShoppingCartComponent } from './components/top-shopping-cart/top-shopping-cart.component';
import { StateService } from './services/state.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, TopShoppingCartComponent],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  stateService = inject(StateService);
}
