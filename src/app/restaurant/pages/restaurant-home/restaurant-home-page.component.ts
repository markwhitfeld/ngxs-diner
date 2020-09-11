import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './restaurant-home-page.component.html',
  styleUrls: ['./restaurant-home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantHomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
