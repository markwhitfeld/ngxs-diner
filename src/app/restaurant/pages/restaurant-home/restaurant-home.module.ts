import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TablesViewComponentModule } from '../../components/tables-view/tables-view.module';
import { RestaurantHomePageComponent } from './restaurant-home-page.component';


@NgModule({
  declarations: [RestaurantHomePageComponent],
  imports: [
    CommonModule,
    TablesViewComponentModule
  ],
  exports: [RestaurantHomePageComponent]
})
export class RestaurantHomePageModule { }
