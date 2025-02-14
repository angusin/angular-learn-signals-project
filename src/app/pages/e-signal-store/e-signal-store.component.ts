import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';
import { CartItem, PRODUCTS } from './data-mock';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-signal-store',
  imports: [CommonModule, BasicPageComponent],
  templateUrl: './e-signal-store.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalStoreComponent {
  readonly products = signal<CartItem[]>(PRODUCTS);

  stateService = inject(StateService);

  addToCartFullProduct(productToAdd: CartItem) {
    this.stateService.updateCart(productToAdd);
  }
}
