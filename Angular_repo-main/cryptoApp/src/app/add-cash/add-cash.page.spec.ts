import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddCashPage } from './add-cash.page';

describe('AddCashPage', () => {
  let component: AddCashPage;
  let fixture: ComponentFixture<AddCashPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
