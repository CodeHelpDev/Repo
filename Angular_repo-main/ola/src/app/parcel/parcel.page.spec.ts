import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParcelPage } from './parcel.page';

describe('ParcelPage', () => {
  let component: ParcelPage;
  let fixture: ComponentFixture<ParcelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
