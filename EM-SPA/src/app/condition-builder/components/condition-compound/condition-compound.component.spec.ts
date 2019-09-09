import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionCompoundComponent } from './condition-compound.component';

describe('ConditionCompoundComponent', () => {
  let component: ConditionCompoundComponent;
  let fixture: ComponentFixture<ConditionCompoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionCompoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionCompoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
