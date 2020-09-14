import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

import { KitchenViewModel, KitchenViewModelQueries } from '../../view-models/kitchen-view-model.queries';

@Component({
  templateUrl: './kitchen-home-page.component.html',
  styleUrls: ['./kitchen-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class KitchenHomePageComponent implements OnInit {
  @Select(KitchenViewModelQueries.getViewModel) viewModel$: Observable<KitchenViewModel>;

  constructor() {}

  ngOnInit(): void {}
}
