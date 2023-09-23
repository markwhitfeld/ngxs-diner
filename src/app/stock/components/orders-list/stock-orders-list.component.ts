import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';

import { IngredientOrder } from '../../models';
import { NgIf } from '@angular/common';
import { MatLegacyTableModule } from '@angular/material/legacy-table';

export interface StockOrdersListDialogData {
  tableName: string;
}

@Component({
    selector: 'app-stock-orders-list',
    templateUrl: './stock-orders-list.component.html',
    styleUrls: ['./stock-orders-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [MatLegacyTableModule, NgIf],
})
export class StockOrdersListComponent implements OnInit {
  @Input()
  ingredientOrders: IngredientOrder[];

  constructor(private store: Store) { }

  ngOnInit(): void { }
}
