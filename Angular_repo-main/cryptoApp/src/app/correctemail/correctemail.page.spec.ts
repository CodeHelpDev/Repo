import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrectemailPage } from './correctemail.page';

describe('CorrectemailPage', () => {
  let component: CorrectemailPage;
  let fixture: ComponentFixture<CorrectemailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
