import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorListaControlesComponent } from './actor-lista-controles.component';

describe('ActorListaControlesComponent', () => {
  let component: ActorListaControlesComponent;
  let fixture: ComponentFixture<ActorListaControlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActorListaControlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorListaControlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
