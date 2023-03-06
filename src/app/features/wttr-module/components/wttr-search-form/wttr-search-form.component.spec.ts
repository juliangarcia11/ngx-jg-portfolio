import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WttrSearchFormComponent } from './wttr-search-form.component';
import { MatFormFieldHarness } from '@angular/material/form-field/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {
  click_item,
  query_for_el
} from '../../../../core/utils';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {
  FormBuilder,
  ReactiveFormsModule
} from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

describe('WttrSearchFormComponent', () => {
  let component: WttrSearchFormComponent;
  let loader: HarnessLoader;
  let fixture: ComponentFixture<WttrSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatInputModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        MatIconModule
      ],
      declarations: [ WttrSearchFormComponent ],
      providers: [
        FormBuilder
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WttrSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a search button', () => {
    expect(query_for_el(fixture, 'button[data-test="wttr-search-button"]')).toBeTruthy();
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
    const input = await setPDXasInput();
    const formField = await assertSubmissionReady();

    // assert the input value is PDX
    expect(await input.getValue()).toBe('PDX');
    // assert the form field is now valid
    expect(await formField.isControlValid()).toBe(true);
  });

  it('should be able to disable formField', async () => {
    const formField = await loader.getHarness(MatFormFieldHarness);
    component.searchControl?.disable();
    expect(await formField.isDisabled()).toBe(true);
  });

  it('should show an ENABLED search button when the input has a value', async () => {
    await setPDXasInput();
    await assertSubmissionReady();
  });

  it('should submit the search form when the search button is clicked', async () => {
    await setPDXasInput();
    await assertSubmissionReady();

    // create spy to watch for a call to submitSearch
    spyOn(component, 'submitSearch');
    // submit the form by clicking the button
    click_item(fixture, 'button[data-test="wttr-search-button"]');
    // assert the submitSearch emission occurred
    expect(component.submitSearch).toHaveBeenCalled();
  });

  it('should emit search string when submitSearch() is called', () => {
    // set up a spy to listen for openSideNav emissions
    spyOn(component.onSubmit, 'emit');

    // manually call submission
    component.submitSearch();

    // assert the event emission occurred
    expect(component.onSubmit.emit).toHaveBeenCalled();
  });

  it('should return a string when getErrorMessage is called', () => {
    expect(component.getErrorMessage()).toBeTruthy();
    expect(component.getErrorMessage().length).toBeTruthy();
  })

  /********************************************************
   * Helper Functions
   * *******************************************************/

  /**
   * Set the value of the search input to 'PDX'
   * @returns Promise<MatInputHarness> The input harness associated to the search input
   */
  const setPDXasInput = async (): Promise<MatInputHarness> => {
    // load harnesses
    const input = await loader.getHarness(MatInputHarness);
    // set input value
    await input.setValue('PDX');

    return input;
  };

  /**
   * Set the input, verify the formField is valid, and the search button is enabled
   * @returns Promise<MatFormFieldHarness> The form field harness associated to the search input
   */
  const assertSubmissionReady = async (): Promise<MatFormFieldHarness> => {
    await setPDXasInput();
    // load harness
    const formField = await loader.getHarness(MatFormFieldHarness);
    // assert the form field is now valid
    expect(await formField.isControlValid()).toBe(true);
    // assert the search button is not disabled (is enabled)
    expect(query_for_el(fixture, 'button[data-test="wttr-search-button"]').disabled).toBeFalse();

    return formField;
  };
});
