import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WttrDisplayComponent } from './wttr-display.component';
import {query_for_el} from "../../spec-utils";
import {Clipboard} from "@angular/cdk/clipboard";
import {MatSnackBar} from "@angular/material/snack-bar";
import {WttrDisplayModel} from "./wttr-display.model";
import {FormsModule} from "@angular/forms";

describe('WttrDisplayComponent', () => {
  let component: WttrDisplayComponent;
  let fixture: ComponentFixture<WttrDisplayComponent>;
  let expectedModel = new WttrDisplayModel();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [ WttrDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WttrDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    expect(getSearchInput()).toBeTruthy();
  });

  it('should have model', () => {
    expect(component.model).toBe(expectedModel);
  });

  it('should update the model when search input is edited', () => {
    // update the text field
    addPDXToSearchInput();
    // assert the model's search value has been updated
    expect(component.model.search).toBe('PDX');
  });

  /**
   * helper function
   *
   * Gets the 'search' <input> item
   */
  const getSearchInput = () => query_for_el(fixture, 'input[data-test="wttr-search-input"]');

  /**
   * helper function
   *
   * Sets a 'search' value of "PDX" and detects fixture changes
   */
  const addPDXToSearchInput = () => {
    // get search field
    const searchInput: HTMLInputElement = getSearchInput();

    // user enters search value of "PDX"
    searchInput.value = 'PDX';
    searchInput.dispatchEvent(new Event('input'));
  }
});
