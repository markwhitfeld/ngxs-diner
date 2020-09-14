import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { StockOrdersListComponent } from './stock-orders-list.component';

@NgModule({
  declarations: [StockOrdersListComponent],
  imports: [CommonModule, MatTableModule],
  exports: [StockOrdersListComponent],
})
export class StockOrdersListComponentModule {}
