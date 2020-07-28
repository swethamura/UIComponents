import { TestBed } from '@angular/core/testing';

import { HoribarlibService } from './horibarlib.service';

describe('HoribarlibService', () => {
  let service: HoribarlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoribarlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
