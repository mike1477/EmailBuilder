import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewerMainComponent } from './previewer-main.component';

describe('PreviewerMainComponent', () => {
  let component: PreviewerMainComponent;
  let fixture: ComponentFixture<PreviewerMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewerMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewerMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
