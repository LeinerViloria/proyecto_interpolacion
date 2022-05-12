import { TestBed } from '@angular/core/testing';

import { InterpolacionService } from './interpolacion.service';

describe('InterpolacionService', () => {
  let service: InterpolacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterpolacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
