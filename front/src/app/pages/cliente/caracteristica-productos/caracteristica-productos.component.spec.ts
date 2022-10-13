import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaracteristicaProductosComponent } from './caracteristica-productos.component';

describe('CaracteristicaProductosComponent', () => {
  let component: CaracteristicaProductosComponent;
  let fixture: ComponentFixture<CaracteristicaProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaracteristicaProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaracteristicaProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
