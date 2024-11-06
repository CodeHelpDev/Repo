import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewproductPage } from './addnewproduct.page';

describe('AddnewproductPage', () => {
  let component: AddnewproductPage;
  let fixture: ComponentFixture<AddnewproductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
