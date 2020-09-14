import { Selector } from '@ngxs/store';
import { flatten } from 'ramda';

import { Recipe } from '../../recipies/models';
import { RecipesState } from '../../recipies/state/recipes.state';
import { OrdersMap } from '../models';
import { OrdersState } from '../state/orders.state';

export interface ItemCountMap {
  [name: string]: number;
}

export interface RecipeOrder {
  recipe: Recipe;
  count: number;
}

export class OrdersQueries {
  @Selector([OrdersState.orders])
  static getAllOrderedItemsCountMap(orders: OrdersMap): ItemCountMap {
    const orderChoices = flatten(Object.keys(orders).map(key => orders[key].choices));
    const itemCounts = orderChoices.reduce<ItemCountMap>((map, item) => {
      const currentCount = map[item] || 0;
      map[item] = currentCount + 1;
      return map;
    }, {});
    return itemCounts;
  }

  @Selector([OrdersQueries.getAllOrderedItemsCountMap, RecipesState.items])
  static getOrderedRecipies(itemCountMap: ItemCountMap, recipes: Recipe[]): RecipeOrder[] {
    const orderedRecipes = recipes
      .map(recipe => {
        const count = itemCountMap[recipe.name] || 0;
        return { recipe, count };
      })
      .filter(item => item.count > 0);
    return orderedRecipes;
  }
}
