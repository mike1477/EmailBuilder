import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutElementImageComponent } from './layout-element-image.component';

describe('LayoutElementImageComponent', () => {
  let component: LayoutElementImageComponent;
  let fixture: ComponentFixture<LayoutElementImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutElementImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutElementImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
