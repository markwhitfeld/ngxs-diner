import { Selector } from '@ngxs/store';

import { ItemCountMap, ProductionSheetQueries } from '../../restaurant/queries/production-sheet.queries';

export interface KitchenViewModel {
  productionSheet: ItemCount[];
}

export interface ItemCount {
  item: string;
  count: number;
}

export class KitchenViewModelQueries {
  @Selector([ProductionSheetQueries.getItemCountMap])
  static getViewModel(itemCountMap: ItemCountMap): KitchenViewModel {
    const productionSheet = Object.keys(itemCountMap).map(key => ({
      item: key,
      count: itemCountMap[key],
    }));

    return { productionSheet };
  }
}
