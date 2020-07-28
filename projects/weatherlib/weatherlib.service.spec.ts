import { TestBed } from '@angular/core/testing';

import { WeatherlibService } from './weatherlib.service';

describe('WeatherlibService', () => {
  let service: WeatherlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
