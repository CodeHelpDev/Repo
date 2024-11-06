import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewDealsPage } from './view-deals.page';

describe('ViewDealsPage', () => {
  let component: ViewDealsPage;
  let fixture: ComponentFixture<ViewDealsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
