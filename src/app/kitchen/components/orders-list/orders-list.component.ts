import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { ItemCount } from '../../view-models/kitchen-view-model.queries';

export interface OrdersListDialogData {
  tableName: string;
}

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersListComponent implements OnInit {
  @Input()
  orders: ItemCount[];

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
