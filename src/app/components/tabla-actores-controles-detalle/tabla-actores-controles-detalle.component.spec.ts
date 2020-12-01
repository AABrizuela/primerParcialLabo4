import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActoresControlesDetalleComponent } from './tabla-actores-controles-detalle.component';

describe('TablaActoresControlesDetalleComponent', () => {
  let component: TablaActoresControlesDetalleComponent;
  let fixture: ComponentFixture<TablaActoresControlesDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaActoresControlesDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaActoresControlesDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
