import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderPickerComponent } from './border-picker.component';

describe('BorderPickerComponent', () => {
  let component: BorderPickerComponent;
  let fixture: ComponentFixture<BorderPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorderPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
