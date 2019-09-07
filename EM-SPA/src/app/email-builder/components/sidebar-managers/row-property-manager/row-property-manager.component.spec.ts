import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowPropertyManagerComponent } from './row-property-manager.component';

describe('RowPropertyManagerComponent', () => {
  let component: RowPropertyManagerComponent;
  let fixture: ComponentFixture<RowPropertyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowPropertyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowPropertyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
