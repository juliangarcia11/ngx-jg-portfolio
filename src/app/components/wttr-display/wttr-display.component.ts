import {Component} from '@angular/core';
import {WttrModel} from "./wttr.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {WttrService} from "./wttr.service";


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

  public loading: boolean = false;
  public searchFormExpanded = true;

  model: WttrModel;
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private weatherService: WttrService
  ) {
    this.model = new WttrModel();
    this.searchForm = this.fb.group({
      search: this.fb.control({ value: this.model.search, disabled: this.loading }, [Validators.required, Validators.minLength(1)])
    });
  }

  getErrorMessage(controlName: string): string {
    if (this.searchForm.get(controlName)?.hasError('required')) {
      return 'You must enter a value';
    }

    return 'Unknown Error :(';
  }

  submitSearch() {
    this.loading = true;
    this.model = new WttrModel(this.searchForm.value);
    this.weatherService.getBase$(this.model.search).subscribe((resultingHtml) => {
      this.model.result = resultingHtml;
      this.loading = false;
      this.searchFormExpanded = false;
    })
  }
}

