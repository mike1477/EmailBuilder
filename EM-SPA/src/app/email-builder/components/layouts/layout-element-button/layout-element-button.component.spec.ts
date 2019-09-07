import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutElementButtonComponent } from './layout-element-button.component';

describe('LayoutElementButtonComponent', () => {
  let component: LayoutElementButtonComponent;
  let fixture: ComponentFixture<LayoutElementButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutElementButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutElementButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
