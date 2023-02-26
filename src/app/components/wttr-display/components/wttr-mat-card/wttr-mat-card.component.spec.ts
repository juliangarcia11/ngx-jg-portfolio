import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WttrMatCardComponent } from './wttr-mat-card.component';
import {MatCardHarness} from "@angular/material/card/testing";
import {HarnessLoader} from "@angular/cdk/testing";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { WttrDisplayModel } from '../../models/wttr-display.model';
import { query_for_el } from '../../../../spec-utils';

describe('WttrMatCardComponent', () => {
  let component: WttrMatCardComponent;
  let loader: HarnessLoader;
  let fixture: ComponentFixture<WttrMatCardComponent>;
  let mockedModel: WttrDisplayModel = new WttrDisplayModel();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        BrowserAnimationsModule,
      ],
      declarations: [ WttrMatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WttrMatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  // before each test, set the model
  beforeEach(() => {
    component.model = new WttrDisplayModel();
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /***********************************************************
   * Basic Mat Card Harness Tests
   ***********************************************************/

  it('should find the mat card', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="wttr-card"]'}));
    expect(cards.length).toBe(1);
  });

  it('should have the default title on load', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="wttr-card"]'}));
    expect(cards.length).toBe(1);
    expect(await cards[0].getTitleText()).toBe(mockedModel.defaultTitle);
  });

  it('should have the subtitle on load', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="wttr-card"]'}));
    expect(cards.length).toBe(1);
    expect(await cards[0].getSubtitleText()).toBe(mockedModel.subtitle);
  });

  /***********************************************************
   * CSS class vs SearchState Tests
   ***********************************************************/

  it('should have the \'search\' css class on initialization', () => {
    expect(query_for_el(fixture, '.search[data-test="wttr-card"]')).toBeTruthy();
  });

  it('should have the \'search\' css class if the state is \'UNTOUCHED\'', () => {
    component.model.state = component.States.UNTOUCHED;
    fixture.detectChanges();
    expect(query_for_el(fixture, '.search[data-test="wttr-card"]')).toBeTruthy();
  });

  it('should have the \'search\' css class if the state is \'VALID\'', () => {
    component.model.state = component.States.VALID;
    fixture.detectChanges();
    expect(query_for_el(fixture, '.search[data-test="wttr-card"]')).toBeTruthy();
  });

  it('should have the \'search\' css class if the state is \'INVALID\'', () => {
    component.model.state = component.States.INVALID;
    fixture.detectChanges();
    expect(query_for_el(fixture, '.search[data-test="wttr-card"]')).toBeTruthy();
  });

  it('should have the \'search loading\' css classes if the state is \'SEARCHING\'', () => {
    component.model.state = component.States.SEARCHING;
    fixture.detectChanges();
    expect(query_for_el(fixture, '.search.loading[data-test="wttr-card"]')).toBeTruthy();
  });

  it('should have the \'search loading\' css classes if the state is \'PARSING\'', () => {
    component.model.state = component.States.PARSING;
    fixture.detectChanges();
    expect(query_for_el(fixture, '.search.loading[data-test="wttr-card"]')).toBeTruthy();
  });

  it('should have the \'results\' css class if the state is \'DONE\'', () => {
    component.model.state = component.States.DONE;
    fixture.detectChanges();
    expect(query_for_el(fixture, '.results[data-test="wttr-card"]')).toBeTruthy();
  });

  it('should have the \'error\' css class if the state is \'PARSE_ERROR\'', () => {
    component.model.state = component.States.PARSE_ERROR;
    fixture.detectChanges();
    expect(query_for_el(fixture, '.error[data-test="wttr-card"]')).toBeTruthy();
  });

  it('should have the \'error\' css class if the state is \'RESPONSE_ERROR\'', () => {
    component.model.state = component.States.RESPONSE_ERROR;
    fixture.detectChanges();
    expect(query_for_el(fixture, '.error[data-test="wttr-card"]')).toBeTruthy();
  });
});
