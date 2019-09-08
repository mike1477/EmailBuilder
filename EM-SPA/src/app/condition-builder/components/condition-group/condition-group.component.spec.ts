import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionGroupComponent } from './condition-group.component';

describe('ConditionGroupComponent', () => {
  let component: ConditionGroupComponent;
  let fixture: ComponentFixture<ConditionGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
