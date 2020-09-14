import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { OrdersListComponentModule } from '../../components/orders-list/orders-list.component';
import { KitchenHomePageComponent } from './kitchen-home-page.component';

@NgModule({
  declarations: [KitchenHomePageComponent],
  imports: [CommonModule, OrdersListComponentModule],
  exports: [KitchenHomePageComponent],
})
export class KitchenHomePageModule {}
