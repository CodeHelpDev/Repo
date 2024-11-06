import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Onboarding4Page } from './onboarding4.page';

describe('Onboarding4Page', () => {
  let component: Onboarding4Page;
  let fixture: ComponentFixture<Onboarding4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Onboarding4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
