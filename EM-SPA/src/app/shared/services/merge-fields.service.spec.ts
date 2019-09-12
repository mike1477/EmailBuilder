import { TestBed } from '@angular/core/testing';
import { MergeFieldsService } from './merge-fields.service';

describe('MergeFeildsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MergeFieldsService = TestBed.get(MergeFieldsService);
    expect(service).toBeTruthy();
  });
});
