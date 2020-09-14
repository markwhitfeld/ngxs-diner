import { Selector } from '@ngxs/store';
import { flatten } from 'ramda';
import { OrdersMap } from 'src/app/restaurant/models';
import { OrdersState } from 'src/app/restaurant/state/orders.state';

export interface ItemCountMap {
  [name: string]: number;
}

export class ProductionSheetQueries {
  @Selector([OrdersState.orders])
  static getItemCountMap(orders: OrdersMap): ItemCountMap {
    const orderChoices = flatten(Object.keys(orders).map(key => orders[key].choices));

    const itemCounts = orderChoices.reduce<ItemCountMap>((map, item) => {
      const currentCount = map[item] || 0;
      map[item] = currentCount + 1;
      return map;
    }, {});
    return itemCounts;
  }
}
