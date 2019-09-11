import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeFieldManagerComponent } from './merge-field-manager.component';

describe('MergeFieldManagerComponent', () => {
  let component: MergeFieldManagerComponent;
  let fixture: ComponentFixture<MergeFieldManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeFieldManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeFieldManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
