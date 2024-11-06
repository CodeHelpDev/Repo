import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewcategoryPage } from './addnewcategory.page';

describe('AddnewcategoryPage', () => {
  let component: AddnewcategoryPage;
  let fixture: ComponentFixture<AddnewcategoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
