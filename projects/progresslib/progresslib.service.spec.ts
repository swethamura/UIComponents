import { TestBed } from '@angular/core/testing';

import { ProgresslibService } from './progresslib.service';

describe('ProgresslibService', () => {
  let service: ProgresslibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgresslibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
