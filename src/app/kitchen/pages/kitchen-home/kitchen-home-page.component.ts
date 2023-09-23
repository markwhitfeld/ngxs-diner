import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { KitchenViewModel, KitchenViewModelQueries } from '../../view-models/kitchen-view-model.queries';
import { OrdersListComponent } from '../../components/orders-list/orders-list.component';
import { NgIf, AsyncPipe } from '@angular/common';

@Component({
    templateUrl: './kitchen-home-page.component.html',
    styleUrls: ['./kitchen-home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgIf,
        OrdersListComponent,
        AsyncPipe,
    ],
})
export class KitchenHomePageComponent implements OnInit {
  @Select(KitchenViewModelQueries.getViewModel) viewModel$: Observable<KitchenViewModel>;

  constructor() {}

  ngOnInit(): void {}
}
