import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementImageManagerComponent } from './element-image-manager.component';

describe('ElementImageManagerComponent', () => {
  let component: ElementImageManagerComponent;
  let fixture: ComponentFixture<ElementImageManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementImageManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementImageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
