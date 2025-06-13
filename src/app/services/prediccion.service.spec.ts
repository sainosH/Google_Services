import { TestBed } from '@angular/core/testing';

import { PrediccionService } from './prediccion.service';

describe('PrediccionService', () => {
  let service: PrediccionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrediccionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
