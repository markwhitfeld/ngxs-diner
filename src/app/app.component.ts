import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MenuItem } from './layout/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
