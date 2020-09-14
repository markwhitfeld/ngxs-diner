import { Selector } from '@ngxs/store';
import { flatten } from 'ramda';
import { Recipe } from 'src/app/recipies/models';
import { RecipesState } from 'src/app/recipies/state/recipes.state';

import { OrdersMap } from '../models';
import { OrdersState } from '../state/orders.state';

export interface ItemCountMap {
  [name: string]: number;
}

export interface RecipeOrder {
  recipe: Recipe;
  count: number;
}

interface IngredientOrdersMap {
  [key: string]: IngredientOrder;
}

export interface IngredientOrder {
  name: string;
  unit: string;
  quantity: number;
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

  @Selector([OrdersQueries.getOrderedRecipies])
  static getIngredientOrders(orderedRecipes: RecipeOrder[]): IngredientOrder[] {
    const ingredientOrdersMap = orderedRecipes.reduce<IngredientOrdersMap>((map, item) => {
      const ingredients = [
        ...item.recipe.ingredient,
        ...flatten((item.recipe.ingredientGroup || []).map(group => group.ingredient)),
      ];
      ingredients.forEach(ingredient => {
        const key = ingredient.name + ingredient.unit;
        const currentOrder: IngredientOrder = map[key] || {
          name: ingredient.name,
          unit: ingredient.unit,
          quantity: 0,
        };
        map[key] = {
          ...currentOrder,
          quantity: currentOrder.quantity + +ingredient.amount,
        };
      });
      return map;
    }, {});

    const ingredientOrders = Object.keys(ingredientOrdersMap).map(key => ingredientOrdersMap[key]);
    return ingredientOrders;
  }
}
