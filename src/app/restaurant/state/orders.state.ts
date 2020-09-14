import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { insertItem, patch, removeItem } from '@ngxs/store/operators';

import { Order, OrdersMap } from '../models';
import { AddTableChoice, CloseTable, OpenTable, RemoveTableChoice } from './actions';

type OrdersStateModel = OrdersMap;

type LocalStateModel = OrdersStateModel;
type LocalStateContext = StateContext<LocalStateModel>;

@State<OrdersStateModel>({
  name: 'orders',
  defaults: {},
})
@Injectable()
export class OrdersState {
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
      patch<LocalStateModel>({ [tableName]: null })
    );
  }

  @Action(AddTableChoice)
  protected addTableChoice(ctx: LocalStateContext, action: AddTableChoice): void {
    const { tableName, choice } = action;
    ctx.setState(
      patch<LocalStateModel>({
        [tableName]: patch<Order>({ choices: insertItem(choice) }),
      })
    );
  }

  @Action(RemoveTableChoice)
  protected removeTableChoice(ctx: LocalStateContext, action: RemoveTableChoice): void {
    const { tableName, choice } = action;
    ctx.setState(
      patch<LocalStateModel>({
        [tableName]: patch<Order>({ choices: removeItem(item => item === choice) }),
      })
    );
  }
}
