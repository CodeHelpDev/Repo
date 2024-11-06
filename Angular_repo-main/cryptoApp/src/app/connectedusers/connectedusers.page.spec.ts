import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnectedusersPage } from './connectedusers.page';

describe('ConnectedusersPage', () => {
  let component: ConnectedusersPage;
  let fixture: ComponentFixture<ConnectedusersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedusersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
