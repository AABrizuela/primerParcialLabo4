import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaActorDetalleComponent } from './lista-actor-detalle.component';

describe('ListaActorDetalleComponent', () => {
  let component: ListaActorDetalleComponent;
  let fixture: ComponentFixture<ListaActorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaActorDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaActorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
