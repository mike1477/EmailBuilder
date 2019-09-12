import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPropertyManagerComponent } from './color-property-manager.component';

describe('ColorPropertyManagerComponent', () => {
  let component: ColorPropertyManagerComponent;
  let fixture: ComponentFixture<ColorPropertyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPropertyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPropertyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
