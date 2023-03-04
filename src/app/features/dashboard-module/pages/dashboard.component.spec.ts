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
  let loader: HarnessLoader;

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
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the welcome card with a title', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="dashboard-welcome-card"]'}));
    expect(cards.length).toBe(1);
    expect(await cards[0].getTitleText()).toBeTruthy();
  });

  it('should find the welcome card with a subtitle', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="dashboard-welcome-card"]'}));
    expect(cards.length).toBe(1);
    expect(await cards[0].getSubtitleText()).toBeTruthy();
  });

  it('should find at least 1 preview card', async () => {
    expect(query_for_el(fixture, '[data-test="dashboard-preview-card"]')).toBeTruthy();
  });

});
