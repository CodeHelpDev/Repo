import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CashOutPage } from './cash-out.page';

describe('CashOutPage', () => {
  let component: CashOutPage;
  let fixture: ComponentFixture<CashOutPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CashOutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
