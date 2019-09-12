import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlignControlComponent } from './align-control.component';

describe('AlignControlComponent', () => {
  let component: AlignControlComponent;
  let fixture: ComponentFixture<AlignControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlignControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlignControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
