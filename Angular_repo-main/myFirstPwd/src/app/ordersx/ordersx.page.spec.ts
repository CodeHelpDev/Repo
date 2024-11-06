import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdersxPage } from './ordersx.page';

describe('OrdersxPage', () => {
  let component: OrdersxPage;
  let fixture: ComponentFixture<OrdersxPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
