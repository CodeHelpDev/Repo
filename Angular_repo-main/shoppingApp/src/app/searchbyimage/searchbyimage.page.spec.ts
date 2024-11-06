import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchbyimagePage } from './searchbyimage.page';

describe('SearchbyimagePage', () => {
  let component: SearchbyimagePage;
  let fixture: ComponentFixture<SearchbyimagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbyimagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
