import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenPage } from './men.page';

describe('MenPage', () => {
  let component: MenPage;
  let fixture: ComponentFixture<MenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
