import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { TableViewComponentModule } from '../table-view/table-view.component';
import { TableCardComponent } from './table-card.component';

@NgModule({
  declarations: [TableCardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule, TableViewComponentModule
  ],
  exports: [TableCardComponent]
})
export class TableCardComponentModule { }
