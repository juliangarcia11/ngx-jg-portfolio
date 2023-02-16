import { ComponentFixture, TestBed } from '@angular/core/testing';

import {spyOnClass} from "jasmine-es6-spies/dist";
import {of} from "rxjs";

import { HomesComponent } from './homes.component';
import {DataService} from "../../services/data.service";
import {MockedHomes} from "../../models/homes.mock";
import {DialogService} from "../../services/dialog.service";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;
  let dataService: jasmine.SpyObj<DataService>;
  let dialogService: jasmine.SpyObj<DialogService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatButtonModule
      ],
      declarations: [ HomesComponent ],
      providers: [
        {provide: DataService, useFactory: () => spyOnClass(DataService)},
        {provide: DialogService, useFactory: () => spyOnClass(DialogService)},
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
  });

  // before each test, get the data service and mock a return of data from the service
  beforeEach(() => {
    dialogService = TestBed.get(DialogService);
    dataService = TestBed.get(DataService);
    dataService.getHomes$.and.returnValue(of(MockedHomes));

    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show homes', () => {

    const item = fixture.nativeElement.querySelectorAll('[data-test="home"]');
    expect(item.length).toBe(3);

  });

  it('should show home info', () => {

    const item = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(item.querySelector('[data-test="title"]').innerText).toBe('Home 1');
    expect(item.querySelector('[data-test="location"]').innerText).toBe('new york');
    expect(item.querySelector('[data-test="image"]')).toBeTruthy();

  });

  it('should show booking button', () => {

    const item = fixture.nativeElement.querySelector('[data-test="home"]');
    expect(item.querySelector('[data-test="book-btn"]')).toBeTruthy();

  });

  it('should use dialog service to open a dialog when clicking on the booking button', () => {

    // Grab the button to click
    const bookBtn = fixture.nativeElement.querySelector('[data-test="book-btn"] button');

    // Click the button
    bookBtn.click();

    // Assert that the dialog service was used to open a dialog
    expect(dialogService.open).toHaveBeenCalled();
  });
});
