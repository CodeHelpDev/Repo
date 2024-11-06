import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactcardPage } from './contactcard.page';

describe('ContactcardPage', () => {
  let component: ContactcardPage;
  let fixture: ComponentFixture<ContactcardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactcardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
