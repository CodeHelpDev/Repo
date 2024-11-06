import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdatedealsPage } from './updatedeals.page';

describe('UpdatedealsPage', () => {
  let component: UpdatedealsPage;
  let fixture: ComponentFixture<UpdatedealsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
