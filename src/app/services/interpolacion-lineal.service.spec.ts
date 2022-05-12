import { TestBed } from '@angular/core/testing';

import { InterpolacionLinealService } from './interpolacion-lineal.service';

describe('InterpolacionLinealService', () => {
  let service: InterpolacionLinealService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterpolacionLinealService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
