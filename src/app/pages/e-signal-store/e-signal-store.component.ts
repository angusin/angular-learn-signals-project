import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicPageComponent } from '../../components/basic-page/basic-page.component';
import { CartItem, PRODUCTS } from './data-mock';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-signal-store',
  imports: [CommonModule, BasicPageComponent],
  templateUrl: './e-signal-store.component.html',
})
export class SignalStoreComponent {
  products = signal<CartItem[]>(PRODUCTS);

  stateService = inject(StateService);

  addToCartFullProduct(productToAdd: CartItem) {
    this.stateService.updateCart(productToAdd);
  }
}
