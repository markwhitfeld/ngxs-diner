import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StockOrdersListComponentModule } from '../../components/orders-list/stock-orders-list.module';
import { StockHomePageComponent } from './stock-home-page.component';

@NgModule({
  declarations: [StockHomePageComponent],
  imports: [CommonModule, StockOrdersListComponentModule],
  exports: [StockHomePageComponent],
})
export class StockHomePageModule {}
