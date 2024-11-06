import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatingresultsPage } from './calculatingresults.page';

describe('CalculatingresultsPage', () => {
  let component: CalculatingresultsPage;
  let fixture: ComponentFixture<CalculatingresultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatingresultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
