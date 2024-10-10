import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCarComponent } from './sales-car.component';

describe('SalesCarComponent', () => {
  let component: SalesCarComponent;
  let fixture: ComponentFixture<SalesCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
