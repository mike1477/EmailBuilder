import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutElementUnknownComponent } from './layout-element-unknown.component';

describe('LayoutElementUnknownComponent', () => {
  let component: LayoutElementUnknownComponent;
  let fixture: ComponentFixture<LayoutElementUnknownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutElementUnknownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutElementUnknownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
