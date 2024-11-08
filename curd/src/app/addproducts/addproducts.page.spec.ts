import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddproductsPage } from './addproducts.page';

describe('AddproductsPage', () => {
  let component: AddproductsPage;
  let fixture: ComponentFixture<AddproductsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddproductsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
