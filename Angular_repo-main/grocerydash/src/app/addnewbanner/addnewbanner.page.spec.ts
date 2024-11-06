import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddnewbannerPage } from './addnewbanner.page';

describe('AddnewbannerPage', () => {
  let component: AddnewbannerPage;
  let fixture: ComponentFixture<AddnewbannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddnewbannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
