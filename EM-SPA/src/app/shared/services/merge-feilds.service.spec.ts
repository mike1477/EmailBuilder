import { TestBed } from '@angular/core/testing';

import { MergeFeildsService } from './merge-feilds.service';

describe('MergeFeildsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MergeFeildsService = TestBed.get(MergeFeildsService);
    expect(service).toBeTruthy();
  });
});
