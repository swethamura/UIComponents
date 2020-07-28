import { TestBed } from '@angular/core/testing';

import { TablelibService } from './tablelib.service';

describe('TablelibService', () => {
  let service: TablelibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablelibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
