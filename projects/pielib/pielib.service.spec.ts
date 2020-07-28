import { TestBed } from '@angular/core/testing';

import { PielibService } from './pielib.service';

describe('PielibService', () => {
  let service: PielibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PielibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
