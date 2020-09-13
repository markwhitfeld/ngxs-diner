import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { RecipesState } from './state/recipes.state';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, //
    HttpClientModule,
    NgxsModule.forFeature([RecipesState]),
  ],
  exports: [],
  providers: [],
})
export class RecipeModule {}
