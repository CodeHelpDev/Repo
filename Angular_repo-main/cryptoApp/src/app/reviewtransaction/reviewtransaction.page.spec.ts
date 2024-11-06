import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReviewtransactionPage } from './reviewtransaction.page';

describe('ReviewtransactionPage', () => {
  let component: ReviewtransactionPage;
  let fixture: ComponentFixture<ReviewtransactionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewtransactionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
