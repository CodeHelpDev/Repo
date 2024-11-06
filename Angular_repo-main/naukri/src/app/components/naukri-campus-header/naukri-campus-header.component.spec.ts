import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaukriCampusHeaderComponent } from './naukri-campus-header.component';

describe('NaukriCampusHeaderComponent', () => {
  let component: NaukriCampusHeaderComponent;
  let fixture: ComponentFixture<NaukriCampusHeaderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NaukriCampusHeaderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaukriCampusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
