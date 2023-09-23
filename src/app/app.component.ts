import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MenuItem } from './layout/models';
import { LayoutComponent } from './layout/layout.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [LayoutComponent],
})
export class AppComponent {
  title = 'ngxs-diner';

  menuItems: MenuItem[] = [
    {
      text: 'Restaurant',
      link: '/restaurant',
      hasAccess$: this.hasRole$('restaurant'),
    },
    {
      text: 'Kitchen',
      link: '/kitchen',
      hasAccess$: this.hasRole$('kitchen'),
    },
    {
      text: 'Stock',
      link: '/stock',
      hasAccess$: this.hasRole$('stock'),
    },
  ];

  hasRole$(roleName: string): Observable<boolean> {
    return of(true);
  }
}
