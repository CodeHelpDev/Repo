import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagecustomersPage } from './managecustomers.page';

describe('ManagecustomersPage', () => {
  let component: ManagecustomersPage;
  let fixture: ComponentFixture<ManagecustomersPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagecustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
