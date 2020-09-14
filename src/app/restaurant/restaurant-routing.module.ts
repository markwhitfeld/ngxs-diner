import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Actions, ofActionDispatched } from '@ngxs/store';

import { TableViewComponentModule } from './components/table-view/table-view.module';
import { OrderingDialogsService } from './dialogs/ordering-dialogs.service';
import { RestaurantHomePageComponent } from './pages/restaurant-home/restaurant-home-page.component';
import { RestaurantHomePageModule } from './pages/restaurant-home/restaurant-home.module';
import { EditTableOrder } from './state/actions';

const routes: Routes = [{ path: 'restaurant', component: RestaurantHomePageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes), RestaurantHomePageModule, TableViewComponentModule],
  exports: [RouterModule],
})
export class RestaurantRoutingModule {
  constructor(private actions: Actions, dialog: OrderingDialogsService) {
    this.actions.pipe(ofActionDispatched(EditTableOrder)).subscribe((action: EditTableOrder) => {
      dialog.openTableOrder(action.tableName);
    });
  }
}
