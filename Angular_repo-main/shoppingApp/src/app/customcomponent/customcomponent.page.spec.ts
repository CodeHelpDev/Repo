import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomcomponentPage } from './customcomponent.page';

describe('CustomcomponentPage', () => {
  let component: CustomcomponentPage;
  let fixture: ComponentFixture<CustomcomponentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomcomponentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
