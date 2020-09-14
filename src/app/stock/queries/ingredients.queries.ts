import { Selector } from '@ngxs/store';
import { flatten } from 'ramda';

import { OrdersQueries, RecipeOrder } from '../../restaurant/queries/orders.queries';
import { IngredientOrder } from '../models';

interface IngredientOrdersMap {
  [key: string]: IngredientOrder;
}

export class IngredientsQueries {

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
