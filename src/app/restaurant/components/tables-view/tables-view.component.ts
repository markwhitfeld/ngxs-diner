import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { TableOrderViewModel } from '../../view-models/table-view-model.queries';

@Component({
  selector: 'app-tables-view',
  templateUrl: './tables-view.component.html',
  styleUrls: ['./tables-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablesViewComponent {
  @Input()
  tableOrders: TableOrderViewModel[] = [];

  constructor() { }
}
