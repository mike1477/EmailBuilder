import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementButtonManagerComponent } from './element-button-manager.component';

describe('ElementButtonManagerComponent', () => {
  let component: ElementButtonManagerComponent;
  let fixture: ComponentFixture<ElementButtonManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementButtonManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementButtonManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
