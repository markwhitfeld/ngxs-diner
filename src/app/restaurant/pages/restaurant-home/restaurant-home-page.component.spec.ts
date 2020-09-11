import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantHomePageComponent } from './restaurant-home-page.component';

describe('RestaurantHomePageComponent', () => {
  let component: RestaurantHomePageComponent;
  let fixture: ComponentFixture<RestaurantHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
