import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewcategoryPage } from './viewcategory.page';

describe('ViewcategoryPage', () => {
  let component: ViewcategoryPage;
  let fixture: ComponentFixture<ViewcategoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
