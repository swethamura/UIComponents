import { TestBed } from '@angular/core/testing';

import { StocklibService } from './stocklib.service';

describe('StocklibService', () => {
  let service: StocklibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StocklibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
