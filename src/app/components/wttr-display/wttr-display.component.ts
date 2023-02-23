import {Component} from '@angular/core';
import {WttrModel} from "./wttr.model";
import {FormBuilder, FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-wttr-display',
  templateUrl: './wttr-display.component.html',
  styleUrls: ['./wttr-display.component.scss']
})
export class WttrDisplayComponent {

  private _title: string = 'Search for the weather';
  public get title(): string { return this._title; }

  private _subtitle: string = 'Powered by \'wttr.in\'';
  public get subtitle(): string { return this._subtitle; }

  model: WttrModel;
  searchControl: FormControl;

  constructor(private fb: FormBuilder) {
    this.model = new WttrModel();
    this.searchControl = this.fb.control(
      this.model.search,[Validators.required, Validators.minLength(1)]);
  }

  getErrorMessage(): string {
    if (this.searchControl.hasError('required')) {
      return 'You must enter a value';
    }

    return 'Unknown Error :(';
  }
}

