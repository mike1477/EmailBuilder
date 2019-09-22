import { TestBed } from '@angular/core/testing';

import { AppApiServiceService } from './app-api-service.service';

describe('AppApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppApiServiceService = TestBed.get(AppApiServiceService);
    expect(service).toBeTruthy();
  });
});
