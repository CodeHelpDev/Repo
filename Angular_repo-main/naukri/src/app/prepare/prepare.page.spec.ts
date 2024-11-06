import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PreparePage } from './prepare.page';

describe('PreparePage', () => {
  let component: PreparePage;
  let fixture: ComponentFixture<PreparePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
