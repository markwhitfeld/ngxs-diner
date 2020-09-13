import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { TableViewComponent } from '../components/table-view/table-view.component';

@Injectable({
  providedIn: 'root',
})
export class OrderingDialogsService {
  constructor(private dialog: MatDialog) {}

  openTableOrder(tableName: string): void {
    const dialogRef = this.dialog.open(TableViewComponent, {
      // width: '350px',
      data: { tableName },
    });
  }
}
