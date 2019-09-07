import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementPropertyManagerComponent } from './element-property-manager.component';

describe('ElementPropertyManagerComponent', () => {
  let component: ElementPropertyManagerComponent;
  let fixture: ComponentFixture<ElementPropertyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementPropertyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementPropertyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
