import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenHomePageComponent } from './kitchen-home-page.component';

describe('KitchenHomePageComponent', () => {
  let component: KitchenHomePageComponent;
  let fixture: ComponentFixture<KitchenHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KitchenHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
