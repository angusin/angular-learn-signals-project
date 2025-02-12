import { Component, computed, inject } from '@angular/core';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-top-shopping-cart',
  imports: [],
  templateUrl: './top-shopping-cart.component.html',
  styleUrl: './top-shopping-cart.component.css',
})
export class TopShoppingCartComponent {
  carItemsNumber = computed(() =>
    this.stateService.cart().reduce((sum, item) => sum + item.quantity, 0)
  );

  cartTotalPrice = computed(() =>
    this.stateService
      .cart()
      .reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  stateService = inject(StateService);

  emptyCart() {
    this.stateService.cart.set([]);
  }
}
