import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { TableOrderViewModel } from '../../queries/table-ordering.queries';
import { CloseTable, OpenTable } from '../../state/actions';

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

  openTable(): void {
    this.store.dispatch(new OpenTable(this.tableOrder.table.name));
  }

  closeTable(): void {
    this.store.dispatch(new CloseTable(this.tableOrder.table.name));
  }
}
