import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewdealPage } from './addnewdeal.page';

describe('AddnewdealPage', () => {
  let component: AddnewdealPage;
  let fixture: ComponentFixture<AddnewdealPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewdealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
