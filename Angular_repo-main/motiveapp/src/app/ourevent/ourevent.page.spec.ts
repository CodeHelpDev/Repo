import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OureventPage } from './ourevent.page';

describe('OureventPage', () => {
  let component: OureventPage;
  let fixture: ComponentFixture<OureventPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OureventPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
