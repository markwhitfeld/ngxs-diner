import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantHomePageComponent } from './pages/restaurant-home/restaurant-home-page.component';
import { RestaurantHomePageModule } from './pages/restaurant-home/restaurant-home.module';


const routes: Routes = [
  { path: 'restaurant', component: RestaurantHomePageComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    RestaurantHomePageModule
  ],
  exports: [RouterModule]
})
export class RestaurantRoutingModule { }
