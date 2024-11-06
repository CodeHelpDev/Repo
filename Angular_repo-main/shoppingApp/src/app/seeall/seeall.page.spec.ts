import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeeallPage } from './seeall.page';

describe('SeeallPage', () => {
  let component: SeeallPage;
  let fixture: ComponentFixture<SeeallPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
