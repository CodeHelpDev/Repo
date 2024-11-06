import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealestatePage } from './realestate.page';

describe('RealestatePage', () => {
  let component: RealestatePage;
  let fixture: ComponentFixture<RealestatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
