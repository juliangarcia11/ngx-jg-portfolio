import { TestBed } from '@angular/core/testing';
import { DialogService } from './dialog.service';
import {MatDialog} from "@angular/material/dialog";
import {spyOnClass} from "jasmine-es6-spies/dist";
import {ComponentType} from "@angular/cdk/overlay";

describe('DialogService', () => {
  let dialogService: DialogService;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DialogService,
        { provide: MatDialog, useFactory: () => spyOnClass(MatDialog) }
      ]
    });
    dialogService = TestBed.inject(DialogService);
    matDialogSpy = TestBed.inject(MatDialog) as jasmine.SpyObj<MatDialog>;
  });

  it('should be created', () => {
    expect(dialogService).toBeTruthy();
  });

  it('should request the dialog be opened from the MatDialog service', () => {
    // Ask the service to open a dialog of a mocked Component with no data
    dialogService.open({} as ComponentType<unknown>, {});

    // Assert that the dialog service was used to open a dialog
    expect(matDialogSpy.open).toHaveBeenCalled();
  });
});
