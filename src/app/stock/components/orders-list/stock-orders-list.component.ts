import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { IngredientOrder } from '../../models';

export interface StockOrdersListDialogData {
  tableName: string;
}

@Component({
  selector: 'app-stock-orders-list',
  templateUrl: './stock-orders-list.component.html',
  styleUrls: ['./stock-orders-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockOrdersListComponent implements OnInit {
  @Input()
  ingredientOrders: IngredientOrder[];

  constructor(private store: Store) { }

  ngOnInit(): void { }
}
