export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const PRODUCTS: CartItem[] = [
  { id: 1, name: 'Token Vault', price: 10, quantity: 0 },
  { id: 2, name: 'Deluxe Organizer', price: 75, quantity: 0 },
  { id: 3, name: 'Adventure Chest', price: 30, quantity: 0 },
  { id: 4, name: 'Modular Storage ', price: 40, quantity: 0 },
  { id: 5, name: 'Ultimate Game Insert', price: 100, quantity: 0 },
  { id: 6, name: 'Magnetic Spinner', price: 25, quantity: 0 },
  { id: 7, name: 'Dice Tower Compact', price: 30, quantity: 0 },
  { id: 8, name: 'Heroes Deck Holder', price: 50, quantity: 0 },
];
