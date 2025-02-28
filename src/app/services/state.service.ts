import { computed, Injectable, signal } from '@angular/core';
import { CartItem } from '../pages/e-signal-store/data-mock';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  readonly cart = signal<CartItem[]>([]);
  readonly cartItemsLength = computed(() => this.cart().length);

  updateCart(productToAdd: CartItem) {
    this.cart.update((items) => {
      const existingProduct = items.find((item) => item.id === productToAdd.id);
      if (existingProduct) {
        return items.map((item) => (item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item));
      } else {
        return [...items, { ...productToAdd, quantity: 1 }];
      }
    });
  }
}
