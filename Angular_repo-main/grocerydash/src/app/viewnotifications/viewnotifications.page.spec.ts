import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewnotificationsPage } from './viewnotifications.page';

describe('ViewnotificationsPage', () => {
  let component: ViewnotificationsPage;
  let fixture: ComponentFixture<ViewnotificationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewnotificationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
