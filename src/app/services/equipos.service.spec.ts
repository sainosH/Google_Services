import { TestBed } from '@angular/core/testing';
import { EquipoService } from './equipos.service';


describe('EquiposService', () => {
  let service:EquipoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
