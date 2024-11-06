import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordverificationPage } from './passwordverification.page';

describe('PasswordverificationPage', () => {
  let component: PasswordverificationPage;
  let fixture: ComponentFixture<PasswordverificationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordverificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
