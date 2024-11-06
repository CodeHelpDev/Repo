import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncorrectemailPage } from './incorrectemail.page';

describe('IncorrectemailPage', () => {
  let component: IncorrectemailPage;
  let fixture: ComponentFixture<IncorrectemailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IncorrectemailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
