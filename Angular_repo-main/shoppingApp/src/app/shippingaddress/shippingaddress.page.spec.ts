import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShippingaddressPage } from './shippingaddress.page';

describe('ShippingaddressPage', () => {
  let component: ShippingaddressPage;
  let fixture: ComponentFixture<ShippingaddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
