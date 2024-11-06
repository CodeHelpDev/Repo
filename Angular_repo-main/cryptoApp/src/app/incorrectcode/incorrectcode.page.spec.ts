import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncorrectcodePage } from './incorrectcode.page';

describe('IncorrectcodePage', () => {
  let component: IncorrectcodePage;
  let fixture: ComponentFixture<IncorrectcodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
