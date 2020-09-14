import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenModule } from './kitchen/kitchen.module';
import { LayoutModule } from './layout/layout.module';
import { RecipeModule } from './recipies/recipes.module';
import { RestaurantModule } from './restaurant/restaurant.module';
import { StockModule } from './stock/stock.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
      selectorOptions: { injectContainerState: false, suppressErrors: false },
      executionStrategy: NoopNgxsExecutionStrategy,
    }),
    ...environment.imports,
    LayoutModule,
    AppRoutingModule,
    RecipeModule,
    RestaurantModule,
    KitchenModule,
    StockModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
