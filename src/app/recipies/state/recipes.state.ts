import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';

import { Recipe } from '../models';
import { RecipesApiService } from '../services/recipes-api.service';
import { LoadRecipes } from './actions';

export interface RecipesStateModel {
  items: Recipe[];
}

type LocalStateModel = RecipesStateModel;
type LocalStateContext = StateContext<RecipesStateModel>;

@State<RecipesStateModel>({
  name: 'recipes',
  defaults: {
    items: [],
  },
})
@Injectable()
export class RecipesState implements NgxsOnInit {
  constructor(private api: RecipesApiService) {}

  @Selector()
  static items(state: LocalStateModel): Recipe[] {
    return state.items;
  }

  @Selector([RecipesState.items])
  static sortedItems(recipies: Recipe[]): Recipe[] {
    return [...recipies].sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  ngxsOnInit(ctx?: StateContext<any>): void {
    ctx.dispatch(new LoadRecipes());
  }

  @Action(LoadRecipes)
  protected async loadRecipes(ctx: LocalStateContext, action: LoadRecipes): Promise<void> {
    const data = await this.api.loadRecipes().toPromise();
    ctx.patchState({ items: data.recipe });
  }
}
