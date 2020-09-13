import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, NgModule, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { TableOrderViewModel, TableViewModelQueries } from '../../queries/table.queries';

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
  tableOrder$: Observable<TableOrderViewModel>;

  constructor(
    private matDialogRef: MatDialogRef<TableViewDialogData>,
    @Inject(MAT_DIALOG_DATA) public data: TableViewDialogData,
    private store: Store
  ) {}

  ngOnInit(): void {
    const { tableName } = this.data;
    this.tableOrder$ = this.store.select(TableViewModelQueries.createTableOrderSelectorFor(tableName));
  }
}

@NgModule({
  declarations: [TableViewComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [TableViewComponent],
})
export class TableViewComponentModule {}
