import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic-signal',
    loadComponent: () => import('./pages/a-basic-signal/a-basic-signal.component').then((m) => m.BasicSignalComponent),
  },
  {
    path: 'computed-signal',
    loadComponent: () =>
      import('./pages/b-computed-signal/b-computed-signal.component').then((m) => m.ComputedSignalComponent),
  },
  {
    path: 'effect',
    loadComponent: () => import('./pages/c-effect/c-effect.component').then((m) => m.EffectComponent),
  },
  {
    path: 'signal-http',
    loadComponent: () => import('./pages/d-signal-http/d-signal-http.component').then((m) => m.SignalHttpComponent),
  },
  {
    path: 'shopping-cart',
    loadComponent: () =>
      import('./pages/e-cart-example/e-cart-example.component').then((m) => m.ShoppingCartExampleComponent),
  },
  {
    path: 'signal-store',
    loadComponent: () => import('./pages/e-signal-store/e-signal-store.component').then((m) => m.SignalStoreComponent),
  },

  { path: '', redirectTo: '/basic-signal', pathMatch: 'full' },
];
