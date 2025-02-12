import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor() {}

  menuItems = [
    { name: 'Basic Signal', route: '/basic-signal' },
    { name: 'Computed Signal', route: '/computed-signal' },
    { name: 'Effect', route: '/effect' },
    { name: 'Signal HTTP', route: '/signal-http' },
    { name: 'Shopping Cart Example', route: '/shopping-cart' },
    { name: 'Signal Store', route: '/signal-store' },
  ];
}
