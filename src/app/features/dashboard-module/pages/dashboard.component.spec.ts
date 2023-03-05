import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {
  HarnessLoader,
  parallel
} from '@angular/cdk/testing';
import { MatCardModule } from '@angular/material/card';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatCardHarness } from '@angular/material/card/testing';
import { query_for_el } from '../../../core/utils';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatCardModule],
      declarations: [ DashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the welcome card', async () => {
    expect(query_for_el(fixture, '[data-test="dashboard-welcome-card"]')).toBeTruthy();
  });

  it('should find at least 1 preview card', async () => {
    expect(query_for_el(fixture, '[data-test="dashboard-preview-card"]')).toBeTruthy();
  });

  it('should have a title', async () => {
    expect(component.title.length).toBeGreaterThan(0);
  });

  it('should have a subtitle', async () => {
    expect(component.subtitle.length).toBeGreaterThan(0);
  });
});
