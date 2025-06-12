import { TestBed } from '@angular/core/testing';

import { CargaPartidosService } from './carga-partidos.service';

describe('CargaPartidosService', () => {
  let service: CargaPartidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaPartidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
