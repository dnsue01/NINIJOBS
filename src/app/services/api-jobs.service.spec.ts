import { TestBed } from '@angular/core/testing';

import { ApiJobsService } from './api-jobs.service';

describe('ApiJobsService', () => {
  let service: ApiJobsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiJobsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
