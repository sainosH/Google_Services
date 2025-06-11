import { TestBed } from '@angular/core/testing';

import { CargaEquiposService } from './carga-equipos.service';

describe('CargaEquiposService', () => {
  let service: CargaEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
