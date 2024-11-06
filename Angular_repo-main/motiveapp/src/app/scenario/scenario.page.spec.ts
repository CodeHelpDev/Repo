import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScenarioPage } from './scenario.page';

describe('ScenarioPage', () => {
  let component: ScenarioPage;
  let fixture: ComponentFixture<ScenarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
