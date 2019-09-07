import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionBuilderMainComponent } from './condition-builder-main.component';

describe('ConditionBuilderMainComponent', () => {
  let component: ConditionBuilderMainComponent;
  let fixture: ComponentFixture<ConditionBuilderMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionBuilderMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionBuilderMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
