import { createSelector, Selector } from '@ngxs/store';

import { Order, OrdersMap, Table } from '../models';
import { OrdersState } from '../state/orders.state';
import { TablesState } from '../state/tables.state';

export interface OrderingViewModel {
  tableOrders: TableOrderViewModel[];
}

export interface TableOrderViewModel {
  table: Table;
  order: Order | null;
  isOpen: boolean;
}

export class TableViewModelQueries {
  @Selector([TablesState.sortedItems, OrdersState.orders])
  static getViewModel(sortedTables: Table[], orders: OrdersMap): OrderingViewModel {
    const tablesViewModels = sortedTables.map(table => {
      const order = orders[table.name];
      const isOpen = !!order;
      return { table, order, isOpen };
    });
    return {
      tableOrders: tablesViewModels,
    };
  }

  static createTableOrderSelectorFor(tableName: string): (viewModel: OrderingViewModel) => TableOrderViewModel {
    return createSelector([TableViewModelQueries.getViewModel], (viewModel: OrderingViewModel) =>
      viewModel.tableOrders.find(item => item.table.name === tableName)
    );
  }
}
