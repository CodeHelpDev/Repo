import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewCarsPage } from './new-cars.page';

describe('NewCarsPage', () => {
  let component: NewCarsPage;
  let fixture: ComponentFixture<NewCarsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCarsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
