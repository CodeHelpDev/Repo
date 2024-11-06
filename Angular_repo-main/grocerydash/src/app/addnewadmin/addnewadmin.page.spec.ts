import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewadminPage } from './addnewadmin.page';

describe('AddnewadminPage', () => {
  let component: AddnewadminPage;
  let fixture: ComponentFixture<AddnewadminPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewadminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
