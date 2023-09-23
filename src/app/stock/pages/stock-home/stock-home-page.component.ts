import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { StockViewModel, StockViewModelQueries } from '../../view-models/stock-view-model.queries';
import { StockOrdersListComponent } from '../../components/orders-list/stock-orders-list.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    templateUrl: './stock-home-page.component.html',
    styleUrls: ['./stock-home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        StockOrdersListComponent,
        AsyncPipe,
    ],
})
export class StockHomePageComponent implements OnInit {
  @Select(StockViewModelQueries.getViewModel) viewModel$: Observable<StockViewModel>;

  constructor() {}

  ngOnInit(): void {}
}
