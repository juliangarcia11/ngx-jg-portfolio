import {
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { WttrComponent } from './wttr.component';
import { query_for_el } from '../../../core/utils';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { WttrService } from '../services/wttr.service';
import { WttrDisplayModel } from '../models/wttr-display.model';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder } from '@angular/forms';
import { StateCardStates } from '../../../shared/components';
import {
  of,
  throwError
} from 'rxjs';

class MockedWttrService {
  getText$ = (search: string) => search.length > 0 ? of(search) : throwError('no search');
}

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
        {provide: WttrService, useClass: MockedWttrService},
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
    component.model.state = StateCardStates.UNTOUCHED;
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

  it('should change the model state after \'submitSearch()\' is called', () => {
    expect(component.model.state).toBe(StateCardStates.UNTOUCHED);

    // manually call the search function
    component.submitSearch('mocked search');
    fixture.detectChanges();

    expect(component.model.state).not.toBe(StateCardStates.UNTOUCHED);
  });

  it('should change the model state to RESPONSE_ERROR if \'submitSearch()\' errors', () => {
    // manually call the search function
    component.submitSearch('');
    fixture.detectChanges();

    expect(component.model.state).toBe(StateCardStates.RESPONSE_ERROR);
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
