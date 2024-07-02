import { TestBed } from '@angular/core/testing';

import { EquipoModelService } from './equipo-model.service';

describe('EquipoModelService', () => {
  let service: EquipoModelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EquipoModelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
