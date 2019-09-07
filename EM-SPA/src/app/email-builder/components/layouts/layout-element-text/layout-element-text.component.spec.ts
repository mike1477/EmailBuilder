import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutElementTextComponent } from './layout-element-text.component';

describe('LayoutElementTextComponent', () => {
  let component: LayoutElementTextComponent;
  let fixture: ComponentFixture<LayoutElementTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutElementTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutElementTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
