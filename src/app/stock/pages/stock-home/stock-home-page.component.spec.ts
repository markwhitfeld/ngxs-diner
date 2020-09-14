import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockHomePageComponent } from './stock-home-page.component';

describe('StockHomePageComponent', () => {
  let component: StockHomePageComponent;
  let fixture: ComponentFixture<StockHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
