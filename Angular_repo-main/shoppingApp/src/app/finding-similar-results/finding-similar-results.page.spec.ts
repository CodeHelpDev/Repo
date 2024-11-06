import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FindingSimilarResultsPage } from './finding-similar-results.page';

describe('FindingSimilarResultsPage', () => {
  let component: FindingSimilarResultsPage;
  let fixture: ComponentFixture<FindingSimilarResultsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FindingSimilarResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
