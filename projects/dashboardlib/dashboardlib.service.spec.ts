import { TestBed } from '@angular/core/testing';

import { DashboardlibService } from './dashboardlib.service';

describe('DashboardlibService', () => {
  let service: DashboardlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
