import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPeliDetalleComponent } from './tabla-peli-detalle.component';

describe('TablaPeliDetalleComponent', () => {
  let component: TablaPeliDetalleComponent;
  let fixture: ComponentFixture<TablaPeliDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaPeliDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPeliDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
