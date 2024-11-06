import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewaddressPage } from './viewaddress.page';

describe('ViewaddressPage', () => {
  let component: ViewaddressPage;
  let fixture: ComponentFixture<ViewaddressPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
