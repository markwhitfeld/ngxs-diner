import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Store } from '@ngxs/store';
import { IngredientOrder } from 'src/app/restaurant/queries/orders.queries';

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

  constructor(private store: Store) {}

  ngOnInit(): void {}
}

@NgModule({
  declarations: [StockOrdersListComponent],
  imports: [CommonModule, MatTableModule],
  exports: [StockOrdersListComponent],
})
export class StockOrdersListComponentModule {}
