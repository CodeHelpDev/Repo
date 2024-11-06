import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QwikPage } from './qwik.page';

describe('QwikPage', () => {
  let component: QwikPage;
  let fixture: ComponentFixture<QwikPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(QwikPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
