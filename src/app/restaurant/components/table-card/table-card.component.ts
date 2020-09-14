import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { CloseTable, EditTableOrder, OpenTable } from '../../state/actions';
import { TableOrderViewModel } from '../../view-models/table-view-model.queries';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableCardComponent implements OnInit {
  @Input()
  tableOrder: TableOrderViewModel = null;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  async openTable(): Promise<void> {
    await this.store.dispatch(new OpenTable(this.tableOrder.table.name)).toPromise();
    await this.captureOrder();
  }

  async captureOrder(): Promise<void> {
    await this.store.dispatch(new EditTableOrder(this.tableOrder.table.name)).toPromise();
  }

  closeTable(): void {
    this.store.dispatch(new CloseTable(this.tableOrder.table.name));
  }
}
