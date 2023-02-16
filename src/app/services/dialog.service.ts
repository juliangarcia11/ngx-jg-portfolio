import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {MatDialog} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
    public dialog: MatDialog
  ) { }

  /**
   * Provide a Component and some data & request that a Material Dialog be opened
   * Data can be injected into the component by adding the following to the constructor params of the 'dialogComponent':
   *     @Inject(MAT_DIALOG_DATA) public data: any
   */
  open(dialogComponent: ComponentType<unknown>, data: any): void {
    const dialogRef = this.dialog.open(dialogComponent, data);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
