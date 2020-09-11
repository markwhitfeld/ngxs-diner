import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCardComponent } from './table-card.component';

describe('TableCardComponent', () => {
  let component: TableCardComponent;
  let fixture: ComponentFixture<TableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
