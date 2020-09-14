import { Selector } from '@ngxs/store';

import { IngredientOrder } from '../models';
import { IngredientsQueries } from '../queries/ingredients.queries';

export interface StockViewModel {
  ingredientOrders: IngredientOrder[];
}

export class StockViewModelQueries {
  @Selector([IngredientsQueries.getIngredientOrders])
  static getViewModel(ingredientOrders: IngredientOrder[]): StockViewModel {
    return { ingredientOrders };
  }
}
