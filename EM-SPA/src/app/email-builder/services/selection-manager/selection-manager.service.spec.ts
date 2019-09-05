import { TestBed } from '@angular/core/testing';
import { SelectionManagerService } from './selection-manager.service';

describe('SelectionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectionManagerService = TestBed.get(SelectionManagerService);
    expect(service).toBeTruthy();
  });
});
