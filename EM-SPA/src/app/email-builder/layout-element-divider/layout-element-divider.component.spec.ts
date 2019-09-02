import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutElementDividerComponent } from './layout-element-divider.component';

describe('LayoutElementDividerComponent', () => {
  let component: LayoutElementDividerComponent;
  let fixture: ComponentFixture<LayoutElementDividerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutElementDividerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutElementDividerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
