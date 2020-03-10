import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailypostPage } from './dailypost.page';

describe('DailypostPage', () => {
  let component: DailypostPage;
  let fixture: ComponentFixture<DailypostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailypostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailypostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
