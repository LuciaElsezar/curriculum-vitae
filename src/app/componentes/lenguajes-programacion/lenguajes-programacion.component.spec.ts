import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LenguajesProgramacionComponent } from './lenguajes-programacion.component';

describe('LenguajesProgramacionComponent', () => {
  let component: LenguajesProgramacionComponent;
  let fixture: ComponentFixture<LenguajesProgramacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LenguajesProgramacionComponent]
    });
    fixture = TestBed.createComponent(LenguajesProgramacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
