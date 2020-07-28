import { TestBed } from '@angular/core/testing';

import { LinechartlibService } from './linechartlib.service';

describe('LinechartlibService', () => {
  let service: LinechartlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinechartlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
