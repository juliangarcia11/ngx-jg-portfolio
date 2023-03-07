import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodComponent } from './apod.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { query_for_el } from '../../../core/utils';

describe('ApodComponent', () => {
  let component: ApodComponent;
  let fixture: ComponentFixture<ApodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [ ApodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an app content card', () => {
    expect(query_for_el(fixture, '[data-test="apod-content-card"]')).toBeTruthy();
  })
});
