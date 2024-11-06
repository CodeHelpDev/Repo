import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatecategoryPage } from './updatecategory.page';

describe('UpdatecategoryPage', () => {
  let component: UpdatecategoryPage;
  let fixture: ComponentFixture<UpdatecategoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
