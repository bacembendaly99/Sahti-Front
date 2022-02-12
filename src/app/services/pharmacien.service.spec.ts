import { TestBed } from '@angular/core/testing';

import { PharmacienService } from './pharmacien.service';

describe('PharmacienService', () => {
  let service: PharmacienService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PharmacienService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
