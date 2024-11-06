import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SendrequestPage } from './sendrequest.page';

describe('SendrequestPage', () => {
  let component: SendrequestPage;
  let fixture: ComponentFixture<SendrequestPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SendrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
