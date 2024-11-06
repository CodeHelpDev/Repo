import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequestmoneyPage } from './requestmoney.page';

describe('RequestmoneyPage', () => {
  let component: RequestmoneyPage;
  let fixture: ComponentFixture<RequestmoneyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestmoneyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
