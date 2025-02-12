export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const PRODUCTS: CartItem[] = [
  { id: 1, name: 'Product A', price: 10, quantity: 1 },
  { id: 2, name: 'Product B', price: 20, quantity: 1 },
  { id: 3, name: 'Product C', price: 30, quantity: 1 },
];
