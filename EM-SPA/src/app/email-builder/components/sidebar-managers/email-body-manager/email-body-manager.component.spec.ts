import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailBodyManagerComponent } from './email-body-manager.component';

describe('EmailBodyManagerComponent', () => {
  let component: EmailBodyManagerComponent;
  let fixture: ComponentFixture<EmailBodyManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailBodyManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailBodyManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
