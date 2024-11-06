import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormvaliPage } from './formvali.page';

describe('FormvaliPage', () => {
  let component: FormvaliPage;
  let fixture: ComponentFixture<FormvaliPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormvaliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
