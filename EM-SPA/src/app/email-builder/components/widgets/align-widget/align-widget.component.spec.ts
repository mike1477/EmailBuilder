import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignWidgetComponent } from './align-widget.component';

describe('AlignWidgetComponent', () => {
  let component: AlignWidgetComponent;
  let fixture: ComponentFixture<AlignWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
