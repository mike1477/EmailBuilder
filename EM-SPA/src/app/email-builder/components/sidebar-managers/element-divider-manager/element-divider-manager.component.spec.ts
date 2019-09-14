import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementDividerManagerComponent } from './element-divider-manager.component';

describe('ElementDividerManagerComponent', () => {
  let component: ElementDividerManagerComponent;
  let fixture: ComponentFixture<ElementDividerManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementDividerManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementDividerManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
