import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WttrDisplayComponent } from './wttr-display.component';
import {click_item, query_for_el} from "../../spec-utils";
import {WttrModel} from "./wttr.model";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatInputModule} from "@angular/material/input";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import {HarnessLoader} from "@angular/cdk/testing";
import {MatCardModule} from "@angular/material/card";
import {MatCardHarness} from "@angular/material/card/testing";
import {MatFormFieldHarness} from "@angular/material/form-field/testing";
import {MatInputHarness} from "@angular/material/input/testing";
import {MatIconModule} from "@angular/material/icon";

describe('WttrDisplayComponent', () => {
  let component: WttrDisplayComponent;
  let loader: HarnessLoader;
  let fixture: ComponentFixture<WttrDisplayComponent>;
  let expectedModel = new WttrModel();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      declarations: [ WttrDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WttrDisplayComponent);
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

  it('should show a search input', () => {
    expect(query_for_el(fixture, 'input[data-test="wttr-search-input"]')).toBeTruthy();
  });

  it('should show a search button', () => {
    expect(query_for_el(fixture, 'button[data-test="wttr-search-button"]')).toBeTruthy();
  });

  it('should show a DISABLED search button by default', () => {
    expect(query_for_el(fixture, 'button[data-test="wttr-search-button"]').disabled).toBeTruthy();
  });

  it('should have model', () => {
    expect(component.model).toBe(expectedModel);
  });

  it('should find card with text', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="wttr-card"]'}));
    expect(cards.length).toBe(1);
    expect(await cards[0].getTitleText()).toBe(component.title);
  });

  it('should find search form field', async () => {
    const formFields = await loader.getAllHarnesses(MatFormFieldHarness);
    expect(formFields.length).toBe(1);
  });

  it('should be able to get control of search form field', async () => {
    const formField = await loader.getHarness(MatFormFieldHarness);
    expect((await formField.getControl()) instanceof MatInputHarness).toBe(true);
  });

  it('should be able to check if search form field is invalid', async () => {
    const formField = await loader.getHarness(MatFormFieldHarness);
    component.searchForm.get('search')?.setValue('');
    expect(await formField.isControlValid()).toBe(false);
  });

  it('should be able to update the input with text', async () => {
    // load harnesses
    const input = await loader.getHarness(MatInputHarness);
    const formField = await loader.getHarness(MatFormFieldHarness);

    // set input value
    await input.setValue('PDX');

    // assert the input value is PDX
    expect(await input.getValue()).toBe('PDX');
    // assert the form field is now valid
    expect(await formField.isControlValid()).toBe(true);
  });

  it('should be able to disable formField', async () => {
    const formField = await loader.getHarness(MatFormFieldHarness);
    component.searchForm.get('search')?.disable();
    expect(await formField.isDisabled()).toBe(true);
  });

  it('should show an ENABLED search button when the input has a value', async () => {
    // load harnesses
    const input = await loader.getHarness(MatInputHarness);
    const formField = await loader.getHarness(MatFormFieldHarness);

    // set input value
    await input.setValue('PDX');

    // assert the search button is not disabled (is enabled)
    expect(query_for_el(fixture, 'button[data-test="wttr-search-button"]').disabled).toBeFalse();
    // assert the form field is now valid
    expect(await formField.isControlValid()).toBe(true);
  });

  it('should submit the search form when the search button is clicked', async () => {
    // load harnesses
    const input = await loader.getHarness(MatInputHarness);
    const formField = await loader.getHarness(MatFormFieldHarness);
    // set up a spy to listen for form submit emissions
    spyOn(component, 'submitSearch');

    // set input value
    await input.setValue('PDX');

    // assert the search button is not disabled (is enabled)
    expect(query_for_el(fixture, 'button[data-test="wttr-search-button"]').disabled).toBeFalse();
    // assert the form field is now valid
    expect(await formField.isControlValid()).toBe(true);
    // submit the form by clicking the button
    click_item(fixture, 'button[data-test="wttr-search-button"]');
    // assert the submitSearch emission occurred
    expect(component.submitSearch).toHaveBeenCalled();
  });
});
