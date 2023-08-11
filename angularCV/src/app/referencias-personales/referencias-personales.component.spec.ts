import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenciasPersonalesComponent } from './referencias-personales.component';

describe('ReferenciasPersonalesComponent', () => {
  let component: ReferenciasPersonalesComponent;
  let fixture: ComponentFixture<ReferenciasPersonalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenciasPersonalesComponent]
    });
    fixture = TestBed.createComponent(ReferenciasPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
