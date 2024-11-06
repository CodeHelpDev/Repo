import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Mainpage2Page } from './mainpage2.page';

describe('Mainpage2Page', () => {
  let component: Mainpage2Page;
  let fixture: ComponentFixture<Mainpage2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Mainpage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
