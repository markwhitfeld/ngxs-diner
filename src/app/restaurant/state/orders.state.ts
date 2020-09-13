import { Injectable } from '@angular/core';
import { Action, Actions, ofActionDispatched, Selector, State, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';

import { OrderingDialogsService } from '../dialogs/ordering-dialogs.service';
import { OrdersMap } from '../models';
import { CloseTable, EditTableOrder, OpenTable } from './actions';

type OrdersStateModel = OrdersMap;

type LocalStateModel = OrdersStateModel;
type LocalStateContext = StateContext<LocalStateModel>;

@State<OrdersStateModel>({
  name: 'orders',
  defaults: {},
})
@Injectable()
export class OrdersState {
  constructor(private actions: Actions, dialog: OrderingDialogsService) {
    this.actions.pipe(ofActionDispatched(EditTableOrder)).subscribe((action: EditTableOrder) => {
      dialog.openTableOrder(action.tableName);
    });
  }

  @Selector()
  static orders(state: LocalStateModel): OrdersStateModel {
    return state;
  }

  @Action(OpenTable)
  protected openTable(ctx: LocalStateContext, action: OpenTable): void {
    const { tableName } = action;
    ctx.setState(
      patch<LocalStateModel>({
        [tableName]: { tableName, choices: [], persons: null },
      })
    );
  }

  @Action(CloseTable)
  protected closeTable(ctx: LocalStateContext, action: CloseTable): void {
    const { tableName } = action;
    ctx.setState(
      patch<LocalStateModel>({
        [tableName]: null,
      })
    );
  }
}
