import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MywalletPage } from './mywallet.page';

describe('MywalletPage', () => {
  let component: MywalletPage;
  let fixture: ComponentFixture<MywalletPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MywalletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
