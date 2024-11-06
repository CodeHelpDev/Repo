import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OutofstockPage } from './outofstock.page';

describe('OutofstockPage', () => {
  let component: OutofstockPage;
  let fixture: ComponentFixture<OutofstockPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OutofstockPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
