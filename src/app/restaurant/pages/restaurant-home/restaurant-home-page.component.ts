import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { OrderingViewModel, TableViewModelQueries } from '../../view-models/table-view-model.queries';
import { TablesViewComponent } from '../../components/tables-view/tables-view.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    templateUrl: './restaurant-home-page.component.html',
    styleUrls: ['./restaurant-home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        TablesViewComponent,
        AsyncPipe,
    ],
})
export class RestaurantHomePageComponent implements OnInit {
  @Select(TableViewModelQueries.getViewModel) viewModel$: Observable<OrderingViewModel>;

  constructor() {}

  ngOnInit(): void {}
}
