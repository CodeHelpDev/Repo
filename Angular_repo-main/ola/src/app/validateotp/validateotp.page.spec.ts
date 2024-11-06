import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ValidateotpPage } from './validateotp.page';

describe('ValidateotpPage', () => {
  let component: ValidateotpPage;
  let fixture: ComponentFixture<ValidateotpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidateotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
