import { TestBed } from '@angular/core/testing';
import { ConditionPredicateService } from './condition-predicate.service';

describe('ConditionOperatorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConditionPredicateService = TestBed.get(ConditionPredicateService);
    expect(service).toBeTruthy();
  });
});
