import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  menuItems = [
    { name: 'Basic Signals', route: '/basic-signal' },
    { name: 'Computed Signals', route: '/computed-signal' },
    { name: 'Effect()', route: '/effect' },
    { name: 'Signals HTTP', route: '/signal-http' },
    { name: 'Shopping Cart Example', route: '/shopping-cart' },
    { name: 'Signals Store', route: '/signal-store' },
    { name: '⚠️ Dangerous Effect', route: '/effects-danger' },
  ];
}
