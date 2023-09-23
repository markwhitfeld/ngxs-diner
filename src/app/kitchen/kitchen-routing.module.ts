import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KitchenHomePageComponent } from './pages/kitchen-home/kitchen-home-page.component';


const routes: Routes = [{ path: 'kitchen', component: KitchenHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitchenRoutingModule {
  constructor() {}
}
