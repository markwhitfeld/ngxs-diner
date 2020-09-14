import { createSelector, Selector } from '@ngxs/store';

import { Recipe } from '../../recipies/models';
import { RecipesState } from '../../recipies/state/recipes.state';
import { OrdersMap } from '../models';
import { OrdersState } from '../state/orders.state';

export interface OrderViewModel {
  ordered: ItemOrder[];
  notOrdered: ItemOrder[];
}

export interface ItemOrder {
  name: string;
  count: number;
  recipe: Recipe;
}

type getViewModelForTableFn = (tableName: string) => OrderViewModel;

export class OrderViewModelQueries {
  @Selector([RecipesState.sortedItems, OrdersState.orders])
  static getViewModelForTableFn(sortedRecipes: Recipe[], orders: OrdersMap): getViewModelForTableFn {
    return (tableName: string) => {
      const order = orders[tableName];

      const itemOrders = sortedRecipes.map(recipe => {
        const name = recipe.name;
        const count = order.choices.filter(item => item === name).length;
        return { name, count, recipe };
      });

      return {
        ordered: itemOrders.filter(item => item.count > 0),
        notOrdered: itemOrders.filter(item => item.count === 0),
      } as OrderViewModel;
    };
  }

  static createOrderSelectorFor(tableName: string): (viewModel: getViewModelForTableFn) => OrderViewModel {
    return createSelector([OrderViewModelQueries.getViewModelForTableFn], (fn: getViewModelForTableFn) =>
      fn(tableName)
    );
  }
}
