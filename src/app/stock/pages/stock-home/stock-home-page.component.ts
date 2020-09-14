import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { StockViewModel, StockViewModelQueries } from '../../view-models/stock-view-model.queries';

@Component({
  templateUrl: './stock-home-page.component.html',
  styleUrls: ['./stock-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockHomePageComponent implements OnInit {
  @Select(StockViewModelQueries.getViewModel) viewModel$: Observable<StockViewModel>;

  constructor() {}

  ngOnInit(): void {}
}
