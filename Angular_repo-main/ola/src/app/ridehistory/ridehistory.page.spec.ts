import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RidehistoryPage } from './ridehistory.page';

describe('RidehistoryPage', () => {
  let component: RidehistoryPage;
  let fixture: ComponentFixture<RidehistoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RidehistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
