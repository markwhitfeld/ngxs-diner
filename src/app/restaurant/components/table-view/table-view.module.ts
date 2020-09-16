import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { TableViewComponent } from './table-view.component';

@NgModule({
  declarations: [TableViewComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatTableModule, MatIconModule],
  exports: [TableViewComponent],
  entryComponents: [TableViewComponent],
})
export class TableViewComponentModule {}
