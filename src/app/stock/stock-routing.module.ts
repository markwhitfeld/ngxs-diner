import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockHomePageComponent } from './pages/stock-home/stock-home-page.component';
import { StockHomePageModule } from './pages/stock-home/stock-home.module';

const routes: Routes = [{ path: 'stock', component: StockHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), StockHomePageModule],
  exports: [RouterModule],
})
export class StockRoutingModule {
  constructor() {}
}
