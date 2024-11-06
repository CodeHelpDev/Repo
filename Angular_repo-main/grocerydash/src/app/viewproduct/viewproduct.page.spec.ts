import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewproductPage } from './viewproduct.page';

describe('ViewproductPage', () => {
  let component: ViewproductPage;
  let fixture: ComponentFixture<ViewproductPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
