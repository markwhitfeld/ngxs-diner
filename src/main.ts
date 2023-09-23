import { enableProdMode, importProvidersFrom } from '@angular/core';

import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { KitchenModule } from './app/kitchen/kitchen.module';
import { RecipeModule } from './app/recipies/recipes.module';
import { RestaurantModule } from './app/restaurant/restaurant.module';
import { StockModule } from './app/stock/stock.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BrowserModule,
      NgxsModule.forRoot([], {
        developmentMode: !environment.production,
        selectorOptions: { injectContainerState: false, suppressErrors: false },
        executionStrategy: NoopNgxsExecutionStrategy,
      }),
      ...environment.imports,
      AppRoutingModule,
      RecipeModule,
      RestaurantModule,
      KitchenModule,
      StockModule
    ),
    provideAnimations(),
  ],
}).catch(err => console.error(err));
