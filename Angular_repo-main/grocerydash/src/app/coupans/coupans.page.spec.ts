import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoupansPage } from './coupans.page';

describe('CoupansPage', () => {
  let component: CoupansPage;
  let fixture: ComponentFixture<CoupansPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
