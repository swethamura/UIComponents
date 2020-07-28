import { TestBed } from '@angular/core/testing';

import { SaleslibService } from './saleslib.service';

describe('SaleslibService', () => {
  let service: SaleslibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleslibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
