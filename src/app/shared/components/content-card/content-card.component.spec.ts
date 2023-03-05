import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardComponent } from './content-card.component';
import { query_for_el } from '../../../core/utils';
import {
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import {
  HarnessLoader
} from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('ContentCardComponent', () => {
  let component: ContentCardComponent;
  let fixture: ComponentFixture<ContentCardComponent>;
  let loader: HarnessLoader;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatCardModule],
      declarations: [ ContentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a headerAsRow param', () => {
    expect(component.headerAsRow).toBeDefined();
  });

  it('should show the spacer element if headerAsRow is TRUE', () => {
    component.headerAsRow = true;
    fixture.detectChanges();
    expect(query_for_el(fixture, '[data-test="spacer"]')).toBeTruthy();
  });

  it('should NOT show the spacer element if headerAsRow is FALSE', () => {
    component.headerAsRow = false;
    fixture.detectChanges();
    expect(query_for_el(fixture, '[data-test="spacer"]')).toBeFalsy();
  });

  it('should not have the \'header-column\' class on the header if headerAsRow is TRUE', () => {
    component.headerAsRow = true;
    fixture.detectChanges();
    expect(query_for_el(fixture, '[data-test="header"].header-column')).toBeFalsy();
  });

  it('should have the \'header-column\' class on the header if headerAsRow is FALSE', () => {
    component.headerAsRow = false;
    fixture.detectChanges();
    expect(query_for_el(fixture, '[data-test="header"].header-column')).toBeTruthy();
  });

  it('should find the card with content', async () => {
    expect(query_for_el(fixture, '[data-test="content"]')).toBeTruthy();
  });

  it('should have innerHTML in title ViewChild()', async () => {
    expect(query_for_el(fixture, '[data-test="title"]').innerHTML.length).toBeGreaterThan(0);
  });

  it('should have innerHTML in subtitle ViewChild()', async () => {
    expect(query_for_el(fixture, '[data-test="subtitle"]').innerHTML.length).toBeGreaterThan(0);
  });

  it('should have innerHTML in content ViewChild()', async () => {
    expect(query_for_el(fixture, '[data-test="content"]').innerHTML.length).toBeGreaterThan(0);
  });
});
