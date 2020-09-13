import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule, NoopNgxsExecutionStrategy } from '@ngxs/store';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantModule } from './restaurant/restaurant.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
      selectorOptions: { injectContainerState: false, suppressErrors: false },
      executionStrategy: NoopNgxsExecutionStrategy,
    }),
    AppRoutingModule,
    RestaurantModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
