import {ComponentFixture, TestBed} from '@angular/core/testing';

import {BookingComponent} from './booking.component';
import {MockedHomes} from "../../models/homes.mock";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HomeModel} from "../../models/home.model";
import {FormsModule} from "@angular/forms";
import {DataService} from "../../services/data.service";
import {spyOnClass} from "jasmine-es6-spies/dist";
import {of} from "rxjs";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {usd_formatter, query_for_el} from "../../spec-utils";




describe('BookingComponent', () => {
  /**
   * test based parameters
   */
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let matDialogService: jasmine.SpyObj<MatDialogRef<BookingComponent>>;
  let matSnackBarService: jasmine.SpyObj<MatSnackBar>;
  let dialogData: { home: HomeModel };


  /**
   * before all tests
   */
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        MatButtonModule,
        MatInputModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatMomentDateModule,
        MatDatepickerModule
      ],
      declarations: [BookingComponent],
      providers: [
        {provide: DataService, useFactory: () => spyOnClass(DataService)},
        {provide: MAT_DIALOG_DATA, useValue: {}},
        {provide: MatDialogRef, useFactory: () => spyOnClass(MatDialogRef)},
        {provide: MatSnackBar, useFactory: () => spyOnClass(MatSnackBar)}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    dataService = TestBed.get(DataService);
    matDialogService = TestBed.get(MatDialogRef);
    matSnackBarService = TestBed.get(MatSnackBar);

    // get the starting value for the dialog data
    dialogData = TestBed.get(MAT_DIALOG_DATA);

    // set mock data for dialog
    dialogData.home = MockedHomes[0];

    // update the fixture to pull in mocked data
    fixture.detectChanges();
  })




  /**
   * tests
   */
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should show title', () => {
    const item = query_for_el(fixture, '[data-test="title"]');
    expect(item.textContent).toContain('Book: ' + MockedHomes[0].title);
  });


  it('should show price per night', () => {
    const item = query_for_el(fixture, '[data-test="price-nightly"]');
    expect(item.textContent).toContain(usd_formatter.format(MockedHomes[0].price_nightly));
  });


  it('should show check in date field', () => {
    const item = query_for_el(fixture, '[data-test="check-in-date"]');
    expect(item).toBeTruthy();
  });


  it('should show check out date field', () => {
    const item = query_for_el(fixture, '[data-test="check-out-date"]');
    expect(item).toBeTruthy();
  });


  it('should show total price to be \'--\' when no dates are selected', () => {
    const item = query_for_el(fixture, '[data-test="price-total"]');
    expect(item.value).toContain('--');
  });


  it('should show total price to be $375.00', () => {
    // select dates to calculate the total price for a stay
    selectDates();

    // assert that the total shows that 3 nights * the home's price-nightly $125, so 3 * $125 = $375
    expect(query_for_el(fixture, '[data-test="price-total"]').value).toContain(usd_formatter.format(dialogData.home.price_nightly * 3));
  });


  it('should show submit button', () => {
    const item = query_for_el(fixture, '[data-test="submit-btn"] button');
    expect(item).toBeTruthy();
  });


  it('should book home after clicking the submit button', () => {
    dataService.bookHome$.and.returnValue(of(null));

    // select dates to be sent to the service
    selectDates();

    // Grab the button to click
    const submitBtn = query_for_el(fixture, '[data-test="submit-btn"] button');

    // Click the button
    submitBtn.click();

    // Assert that the data service was used to create a booking
    expect(dataService.bookHome$).toHaveBeenCalled();
  });


  it('should close the dialog and show notification after clicking the submit button', () => {
    dataService.bookHome$.and.returnValue(of(null));

    // select dates to be sent to the service
    selectDates();

    // Grab the button to click
    const submitBtn = query_for_el(fixture, '[data-test="submit-btn"] button');

    // Click the button
    submitBtn.click();

    // Assert that the dialog service was used to close the booking dialog
    expect(matDialogService.close).toHaveBeenCalled();

    // Assert that a notification was shown
    expect(matSnackBarService.open).toHaveBeenCalled();
  });


  /**
   * helper function
   *
   * Sets a 'check-in' date of "12/20/19" and a 'check-out' date of "12/23/19" and detects fixture changes
   */
  const selectDates = () => {
    // get check in date field
    const checkInField: HTMLInputElement = query_for_el(fixture, '[data-test="check-in-date"]');

    // user enters check in date 12/20/19
    checkInField.value = '12/20/19';
    checkInField.dispatchEvent(new Event('input'));

    // get check out date field
    const checkOutField: HTMLInputElement = query_for_el(fixture, '[data-test="check-out-date"]');

    // user enters check out date 12/23/19
    checkOutField.value = '12/23/19';
    checkOutField.dispatchEvent(new Event('input'));

    // update feature component
    fixture.detectChanges();
  }
});
