import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WttrComponent } from './wttr.component';
import {click_item, query_for_el} from '../../../core/utils';
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import {HarnessLoader} from "@angular/cdk/testing";
import {spyOnClass} from "jasmine-es6-spies/dist";
import {WttrService} from "../services/wttr.service";
import { WttrDisplayModel } from '../models/wttr-display.model';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { WttrSearchFormComponent } from '../components/wttr-search-form/wttr-search-form.component';
import { FormBuilder } from '@angular/forms';

describe('WttrComponent', () => {
  let component: WttrComponent;
  let loader: HarnessLoader;
  let fixture: ComponentFixture<WttrComponent>;
  let expectedModel = new WttrDisplayModel();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        MatButtonModule
      ],
      declarations: [ WttrComponent ],
      providers: [
        FormBuilder,
        {provide: WttrService, useFactory: () => spyOnClass(WttrService)},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WttrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  // before each test, set the model
  beforeEach(() => {
    component.model = expectedModel;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*********************************************************
   * Component Parameter Specs
   *********************************************************/

  it('should have model', () => {
    expect(component.model).toBe(expectedModel);
  });

  /*********************************************************
   * Component Function Specs
   *********************************************************/
  it('should reset the model when \'resetDisplay()\' is called', () => {
    component.model.search = 'mock search';
    component.model.result = 'mock result';
    fixture.detectChanges();
    component.resetDisplay();
    expect(component.model.search).toBe('');
    expect(component.model.result).toBe('');
  });


  /*********************************************************
   * HTML Element Specs
   *********************************************************/

  it('should have an state card element', () => {
    expect(query_for_el(fixture, '[data-test="wttr-state-card"]')).toBeTruthy();
  });

  it('should have a search form element', () => {
    expect(query_for_el(fixture, '[data-test="wttr-search-form"]')).toBeTruthy();
  });

  it('should have a search results element', () => {
    expect(query_for_el(fixture, '[data-test="wttr-search-results"]')).toBeTruthy();
  });

  it('should have a search reset button element', () => {
    expect(query_for_el(fixture, '[data-test="wttr-search-reset"]')).toBeTruthy();
  });
});
