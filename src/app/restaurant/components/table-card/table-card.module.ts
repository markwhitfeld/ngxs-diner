import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { TableCardComponent } from './table-card.component';

@NgModule({
  declarations: [TableCardComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
  exports: [TableCardComponent],
})
export class TableCardComponentModule {}
