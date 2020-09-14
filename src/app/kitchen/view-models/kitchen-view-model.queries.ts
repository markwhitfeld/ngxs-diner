import { Selector } from '@ngxs/store';

import { ItemCountMap, OrdersQueries } from '../../restaurant/queries/orders.queries';

export interface KitchenViewModel {
  productionSheet: ItemCount[];
}

export interface ItemCount {
  item: string;
  count: number;
}

export class KitchenViewModelQueries {
  @Selector([OrdersQueries.getAllOrderedItemsCountMap])
  static getViewModel(itemCountMap: ItemCountMap): KitchenViewModel {
    const productionSheet = Object.keys(itemCountMap).map(key => ({
      item: key,
      count: itemCountMap[key],
    }));

    return { productionSheet };
  }
}
