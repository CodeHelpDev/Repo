import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirebaselistPage } from './firebaselist.page';

describe('FirebaselistPage', () => {
  let component: FirebaselistPage;
  let fixture: ComponentFixture<FirebaselistPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaselistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
