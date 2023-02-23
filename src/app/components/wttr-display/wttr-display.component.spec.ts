import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WttrDisplayComponent } from './wttr-display.component';
import {query_for_el} from "../../spec-utils";
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
    component.searchControl.setValue('');
    expect(await formField.isControlValid()).toBe(false);
  });

  it('should be able to update the input with text', async () => {
    // load harnesses
    const input = await loader.getHarness(MatInputHarness);
    const formField = await loader.getHarness(MatFormFieldHarness);

    // set input value
    await input.setValue('PDX');

    // assert the input value
    expect(await input.getValue()).toBe('PDX');
    // assert the form field is now to be true
    expect(await formField.isControlValid()).toBe(true);
  });
});
