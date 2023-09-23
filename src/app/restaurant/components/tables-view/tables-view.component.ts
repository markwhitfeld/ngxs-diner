import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TableOrderViewModel } from '../../view-models/table-view-model.queries';
import { TableCardComponent } from '../table-card/table-card.component';
import { NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'app-tables-view',
    templateUrl: './tables-view.component.html',
    styleUrls: ['./tables-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        MatGridListModule,
        NgFor,
        TableCardComponent,
    ],
})
export class TablesViewComponent {
  @Input()
  tableOrders: TableOrderViewModel[] = [];

  constructor() { }
}
