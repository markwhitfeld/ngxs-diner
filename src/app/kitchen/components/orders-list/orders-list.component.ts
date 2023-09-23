import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { ItemCount } from '../../view-models/kitchen-view-model.queries';
import { NgIf } from '@angular/common';
import { MatLegacyTableModule } from '@angular/material/legacy-table';

export interface OrdersListDialogData {
  tableName: string;
}

@Component({
    selector: 'app-orders-list',
    templateUrl: './orders-list.component.html',
    styleUrls: ['./orders-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatLegacyTableModule, NgIf],
})
export class OrdersListComponent implements OnInit {
  @Input()
  orders: ItemCount[];

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
