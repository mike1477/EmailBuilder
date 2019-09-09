import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionHandlerComponent } from './condition-handler.component';

describe('ConditionHandlerComponent', () => {
  let component: ConditionHandlerComponent;
  let fixture: ComponentFixture<ConditionHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConditionHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConditionHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
