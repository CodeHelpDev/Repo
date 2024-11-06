import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentmethodPage } from './paymentmethod.page';

describe('PaymentmethodPage', () => {
  let component: PaymentmethodPage;
  let fixture: ComponentFixture<PaymentmethodPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentmethodPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
