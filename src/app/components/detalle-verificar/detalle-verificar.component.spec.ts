import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVerificarComponent } from './detalle-verificar.component';

describe('DetalleVerificarComponent', () => {
  let component: DetalleVerificarComponent;
  let fixture: ComponentFixture<DetalleVerificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVerificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVerificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
