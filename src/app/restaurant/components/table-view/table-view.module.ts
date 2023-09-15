import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

import { TableViewComponent } from './table-view.component';

@NgModule({
    declarations: [TableViewComponent],
    imports: [CommonModule, MatDialogModule, MatButtonModule, MatTableModule, MatIconModule],
    exports: [TableViewComponent]
})
export class TableViewComponentModule {}
