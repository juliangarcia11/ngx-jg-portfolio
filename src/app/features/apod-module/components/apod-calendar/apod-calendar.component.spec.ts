import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodCalendarComponent } from './apod-calendar.component';

describe('ApodCalendarComponent', () => {
  let component: ApodCalendarComponent;
  let fixture: ComponentFixture<ApodCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApodCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
