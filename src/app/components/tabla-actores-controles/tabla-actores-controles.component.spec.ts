import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaActoresControlesComponent } from './tabla-actores-controles.component';

describe('TablaActoresControlesComponent', () => {
  let component: TablaActoresControlesComponent;
  let fixture: ComponentFixture<TablaActoresControlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaActoresControlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaActoresControlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
