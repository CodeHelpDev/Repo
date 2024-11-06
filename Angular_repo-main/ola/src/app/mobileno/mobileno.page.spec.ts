import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobilenoPage } from './mobileno.page';

describe('MobilenoPage', () => {
  let component: MobilenoPage;
  let fixture: ComponentFixture<MobilenoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilenoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
