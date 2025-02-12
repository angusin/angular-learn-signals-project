import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';
import { CartItem, PRODUCTS } from './data-mock';

@Component({
  selector: 'app-signal-store',
  imports: [CommonModule, BasicPageComponent],
  templateUrl: './e-signal-store.component.html',
})
export class SignalStoreComponent {
  cart = signal<CartItem[]>(PRODUCTS);

  totalItems = computed(() =>
    this.cart().reduce((sum, item) => sum + item.quantity, 0)
  );

  totalPrice = computed(() =>
    this.cart().reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  updateQuantity(id: number, change: number) {
    this.cart.update((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }
}
