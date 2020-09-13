import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxsModule } from '@ngxs/store';

import { RestaurantRoutingModule } from './restaurant-routing.module';
import { OrdersState } from './state/orders.state';
import { TablesState } from './state/tables.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //
    HttpClientModule,
    MatDialogModule,
    RestaurantRoutingModule,
    NgxsModule.forFeature([OrdersState, TablesState]),
  ],
})
export class RestaurantModule {}
