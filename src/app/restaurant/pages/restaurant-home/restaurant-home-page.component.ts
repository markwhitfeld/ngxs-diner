import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { OrderingViewModel, OrderingViewModelQueries } from '../../queries/table-ordering.queries';

@Component({
  templateUrl: './restaurant-home-page.component.html',
  styleUrls: ['./restaurant-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantHomePageComponent implements OnInit {
  @Select(OrderingViewModelQueries.getViewModel) viewModel$: Observable<OrderingViewModel>;

  constructor() {}

  ngOnInit(): void {}
}
