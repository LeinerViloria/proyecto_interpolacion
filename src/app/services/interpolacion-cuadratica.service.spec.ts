import { TestBed } from '@angular/core/testing';

import { InterpolacionCuadraticaService } from './interpolacion-cuadratica.service';

describe('InterpolacionCuadraticaService', () => {
  let service: InterpolacionCuadraticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterpolacionCuadraticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
