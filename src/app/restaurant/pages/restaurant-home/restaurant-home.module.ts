import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RestaurantHomePageComponent } from './restaurant-home-page.component';

@NgModule({
  declarations: [RestaurantHomePageComponent],
  imports: [
    CommonModule
  ],
  exports: [RestaurantHomePageComponent]
})
export class RestaurantHomePageModule { }
