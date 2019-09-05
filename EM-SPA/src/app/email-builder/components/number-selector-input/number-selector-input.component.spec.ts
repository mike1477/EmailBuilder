import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSelectorInputComponent } from './number-selector-input.component';

describe('NumberSelectorInputComponent', () => {
  let component: NumberSelectorInputComponent;
  let fixture: ComponentFixture<NumberSelectorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberSelectorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSelectorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
