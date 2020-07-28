import { TestBed } from '@angular/core/testing';

import { AreachartlibService } from './areachartlib.service';

describe('AreachartlibService', () => {
  let service: AreachartlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreachartlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
