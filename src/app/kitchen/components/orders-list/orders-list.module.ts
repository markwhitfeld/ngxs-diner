import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

import { OrdersListComponent } from './orders-list.component';

@NgModule({
  declarations: [OrdersListComponent],
  imports: [CommonModule, MatTableModule],
  exports: [OrdersListComponent],
})
export class OrdersListComponentModule {}
