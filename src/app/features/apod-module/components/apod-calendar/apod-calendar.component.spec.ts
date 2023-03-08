import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodCalendarComponent } from './apod-calendar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {
  query_for_all_el,
  query_for_el
} from '../../../../core/utils';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('ApodCalendarComponent', () => {
  let component: ApodCalendarComponent;
  let fixture: ComponentFixture<ApodCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatGridListModule],
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

  it('should have a day of week grid', () => {
    expect(query_for_el(fixture, '[data-test="day-of-week-grid"]')).toBeTruthy();
  });

  it('should have a calendar grid', () => {
    expect(query_for_el(fixture, '[data-test="calendar-grid"]')).toBeTruthy();
  });

  it('should show at least 28 mat-grid-tiles', () => {
    let tiles = query_for_all_el(fixture, '[data-test="apod-tile"]');
    expect(tiles).toBeTruthy();
    expect(tiles.length).toBeGreaterThanOrEqual(28);
  });

  it('should have >= 28 totalTiles', () => {
    expect(component.totalTiles).toBeGreaterThanOrEqual(28);
  });
});
