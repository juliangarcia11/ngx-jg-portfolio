import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { WttrService } from './services/wttr.service';
import { WttrDisplayModel } from './models/wttr-display.model';
import { SearchStates } from './models/search-states.enum';


@Component({
  selector: 'app-wttr-display',
  templateUrl: './wttr-display.component.html',
  styleUrls: ['./wttr-display.component.scss']
})
export class WttrDisplayComponent {

  public searchFormExpanded = true;

  model: WttrDisplayModel;
  searchForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private weatherService: WttrService
  ) {
    this.model = new WttrDisplayModel();
    this.searchForm = this.fb.group({
      search: this.fb.control(this.model.search, [Validators.required, Validators.minLength(1)])
    });
  }

  getErrorMessage(controlName: string): string {
    if (this.searchForm.get(controlName)?.hasError('required')) {
      return 'You must enter a value';
    }

    return 'Unknown Error :(';
  }

  submitSearch() {
    this.model.search = this.searchForm.value.search;
    this.model.state = SearchStates.SEARCHING;
    this.weatherService.getText$(this.model.search).subscribe({
      next: (resultingHtml) => {
        this.model.state = SearchStates.PARSING;
        this.model.result = resultingHtml;
      },
      error: (e) => {
        console.error(e);
        this.model.state = SearchStates.RESPONSE_ERROR;
      },
      complete: () => {
        console.info('wttr search complete');
        this.model.state = SearchStates.DONE;
      }
    });
  }
}

