import { TestBed } from '@angular/core/testing';

import { LenguajesProgramacionService } from './lenguajes-programacion.service';

describe('LenguajesProgramacionService', () => {
  let service: LenguajesProgramacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LenguajesProgramacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
