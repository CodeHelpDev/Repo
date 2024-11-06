import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpWithEmailPage } from './sign-up-with-email.page';

describe('SignUpWithEmailPage', () => {
  let component: SignUpWithEmailPage;
  let fixture: ComponentFixture<SignUpWithEmailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpWithEmailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
