import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementTextManagerComponent } from './element-text-manager.component';

describe('ElementTextManagerComponent', () => {
  let component: ElementTextManagerComponent;
  let fixture: ComponentFixture<ElementTextManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementTextManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementTextManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
