import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirebaseauthPage } from './firebaseauth.page';

describe('FirebaseauthPage', () => {
  let component: FirebaseauthPage;
  let fixture: ComponentFixture<FirebaseauthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseauthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
