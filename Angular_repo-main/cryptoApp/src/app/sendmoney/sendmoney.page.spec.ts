import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendmoneyPage } from './sendmoney.page';

describe('SendmoneyPage', () => {
  let component: SendmoneyPage;
  let fixture: ComponentFixture<SendmoneyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SendmoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
