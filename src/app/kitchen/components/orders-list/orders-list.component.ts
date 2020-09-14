import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
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

@NgModule({
  declarations: [OrdersListComponent],
  imports: [CommonModule, MatTableModule],
  exports: [OrdersListComponent],
})
export class OrdersListComponentModule {}
