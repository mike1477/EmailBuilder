import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionSimpleComponent } from './condition-simple.component';

describe('ConditionSimpleComponent', () => {
  let component: ConditionSimpleComponent;
  let fixture: ComponentFixture<ConditionSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
