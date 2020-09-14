import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { AddTableChoice, RemoveTableChoice } from '../../state/actions';
import { OrderViewModel, OrderViewModelQueries } from '../../view-models/order-view-model.queries';

export interface TableViewDialogData {
  tableName: string;
}

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableViewComponent implements OnInit {
  tableOrder$: Observable<OrderViewModel>;

  constructor(
    private matDialogRef: MatDialogRef<TableViewDialogData>,
    @Inject(MAT_DIALOG_DATA) public data: TableViewDialogData,
    private store: Store
  ) {}

  ngOnInit(): void {
    const { tableName } = this.data;
    this.tableOrder$ = this.store.select(OrderViewModelQueries.createOrderSelectorFor(tableName));
  }

  addChoice(recipeName: string): void {
    this.store.dispatch(new AddTableChoice(this.data.tableName, recipeName));
  }

  removeChoice(recipeName: string): void {
    this.store.dispatch(new RemoveTableChoice(this.data.tableName, recipeName));
  }
}
