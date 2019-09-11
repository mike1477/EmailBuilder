import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNumberSelectorComponent } from './common-number-selector.component';

describe('PaddingComponent', () => {
  let component: CommonNumberSelectorComponent;
  let fixture: ComponentFixture<CommonNumberSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonNumberSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNumberSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
