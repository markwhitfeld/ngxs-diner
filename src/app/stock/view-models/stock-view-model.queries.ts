import { Selector } from '@ngxs/store';

import { IngredientOrder, OrdersQueries } from '../../restaurant/queries/orders.queries';

export interface StockViewModel {
  ingredientOrders: IngredientOrder[];
}

export class StockViewModelQueries {
  @Selector([OrdersQueries.getIngredientOrders])
  static getViewModel(ingredientOrders: IngredientOrder[]): StockViewModel {
    return { ingredientOrders };
  }
}
