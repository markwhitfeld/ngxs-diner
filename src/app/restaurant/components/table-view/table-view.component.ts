import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
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

@NgModule({
  declarations: [TableViewComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatTableModule, MatIconModule],
  exports: [TableViewComponent],
})
export class TableViewComponentModule {}
