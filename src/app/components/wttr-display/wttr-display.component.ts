import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { WttrService } from './services/wttr.service';
import { WttrDisplayModel } from './models/wttr-display.model';
import { StateCardStates } from '../../shared/state-card/state-card-states.enum';


@Component({
  selector: 'app-wttr-display',
  templateUrl: './wttr-display.component.html',
  styleUrls: ['./wttr-display.component.scss']
})
export class WttrDisplayComponent implements OnInit {

  model!: WttrDisplayModel;
  searchForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private weatherService: WttrService
  ) { }

  ngOnInit() {
    this.resetDisplay();
  }

  getErrorMessage(controlName: string): string {
    if (this.searchForm.get(controlName)?.hasError('required')) {
      return 'You must enter a value';
    }

    return 'Unknown Error :(';
  }

  submitSearch() {
    this.model.search = this.searchForm.value.search;
    this.model.state = StateCardStates.SEARCHING;
    this.weatherService.getText$(this.model.search).subscribe({
      next: (resultingHtml) => {
        this.model.state = StateCardStates.PARSING;
        this.model.result = resultingHtml;
      },
      error: (e) => {
        console.error(e);
        this.model.state = StateCardStates.RESPONSE_ERROR;
      },
      complete: () => {
        console.info('wttr search complete');
        this.model.state = StateCardStates.DONE;
      }
    });
  }

  resetDisplay() {
    this.model = new WttrDisplayModel();
    this.searchForm = this.fb.group({
      search: this.fb.control(this.model.search, [Validators.required, Validators.minLength(1)])
    });
  }
}

