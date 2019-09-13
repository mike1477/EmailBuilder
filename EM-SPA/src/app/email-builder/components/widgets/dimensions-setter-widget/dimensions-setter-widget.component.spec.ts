import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionsSetterWidgetComponent } from './dimensions-setter-widget.component';

describe('DimensionsSetterWidgetComponent', () => {
  let component: DimensionsSetterWidgetComponent;
  let fixture: ComponentFixture<DimensionsSetterWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimensionsSetterWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimensionsSetterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
