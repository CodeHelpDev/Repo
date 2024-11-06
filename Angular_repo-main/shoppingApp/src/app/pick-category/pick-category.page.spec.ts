import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickCategoryPage } from './pick-category.page';

describe('PickCategoryPage', () => {
  let component: PickCategoryPage;
  let fixture: ComponentFixture<PickCategoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickCategoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
