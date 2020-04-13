import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoUsefulPage } from './info-useful.page';

describe('InfoUsefulPage', () => {
  let component: InfoUsefulPage;
  let fixture: ComponentFixture<InfoUsefulPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoUsefulPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoUsefulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
