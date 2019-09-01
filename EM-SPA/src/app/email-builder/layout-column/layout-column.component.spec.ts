import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCellComponent } from './layout-cell.component';

describe('LayoutCellComponent', () => {
  let component: LayoutCellComponent;
  let fixture: ComponentFixture<LayoutCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
