import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrectcodePage } from './correctcode.page';

describe('CorrectcodePage', () => {
  let component: CorrectcodePage;
  let fixture: ComponentFixture<CorrectcodePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectcodePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
