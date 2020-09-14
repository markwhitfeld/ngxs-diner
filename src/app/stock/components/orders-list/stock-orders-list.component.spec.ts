import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOrdersListComponent } from './stock-orders-list.component';

describe('StockOrdersListComponent', () => {
  let component: StockOrdersListComponent;
  let fixture: ComponentFixture<StockOrdersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockOrdersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
