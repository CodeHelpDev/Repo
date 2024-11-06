import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatebannerPage } from './updatebanner.page';

describe('UpdatebannerPage', () => {
  let component: UpdatebannerPage;
  let fixture: ComponentFixture<UpdatebannerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatebannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
