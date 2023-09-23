import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockHomePageComponent } from './pages/stock-home/stock-home-page.component';


const routes: Routes = [{ path: 'stock', component: StockHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockRoutingModule {
  constructor() {}
}
