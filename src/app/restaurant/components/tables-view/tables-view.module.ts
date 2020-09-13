import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { TableCardComponentModule } from '../table-card/table-card.module';
import { TablesViewComponent } from './tables-view.component';


@NgModule({
  declarations: [TablesViewComponent],
  imports: [
    CommonModule,
    MatGridListModule,
    TableCardComponentModule
  ],
  exports: [TablesViewComponent]
})
export class TablesViewComponentModule { }
