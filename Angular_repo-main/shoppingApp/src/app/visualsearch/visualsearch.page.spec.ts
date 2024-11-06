import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualsearchPage } from './visualsearch.page';

describe('VisualsearchPage', () => {
  let component: VisualsearchPage;
  let fixture: ComponentFixture<VisualsearchPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
