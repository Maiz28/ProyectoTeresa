import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableroProductosComponent } from './tablero-productos.component';

describe('TableroProductosComponent', () => {
  let component: TableroProductosComponent;
  let fixture: ComponentFixture<TableroProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableroProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableroProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
