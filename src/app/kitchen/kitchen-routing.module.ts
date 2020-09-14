import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KitchenHomePageComponent } from './pages/kitchen-home/kitchen-home-page.component';
import { KitchenHomePageModule } from './pages/kitchen-home/kitchen-home.module';

const routes: Routes = [{ path: 'kitchen', component: KitchenHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), KitchenHomePageModule],
  exports: [RouterModule],
})
export class KitchenRoutingModule {
  constructor() {}
}
