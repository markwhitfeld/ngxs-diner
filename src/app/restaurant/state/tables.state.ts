import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';

import { Table } from '../models';
import { TablesApiService } from '../services/tables-api.service';
import { LoadTables } from './actions';

export interface TablesStateModel {
  items: Table[];
}

type LocalStateModel = TablesStateModel;
type LocalStateContext = StateContext<LocalStateModel>;

@State<TablesStateModel>({
  name: 'tables',
  defaults: {
    items: [],
  },
})
@Injectable()
export class TablesState implements NgxsOnInit {
  constructor(private api: TablesApiService) {}

  @Selector() static sortedItems(state: LocalStateModel): Table[] {
    return [...state.items].sort((a, b) => (a.name > b.name ? 1 : -1));
  }

  ngxsOnInit(ctx?: StateContext<any>): void {
    ctx.dispatch(new LoadTables());
  }

  @Action(LoadTables)
  protected async loadTables(ctx: LocalStateContext, action: LoadTables): Promise<void> {
    const data = await this.api.loadTables().toPromise();
    ctx.patchState({ items: data });
  }
}
