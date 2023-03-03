import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector:    'app-wttr-search-form',
  templateUrl: './wttr-search-form.component.html',
  styleUrls:   ['./wttr-search-form.component.scss']
})
export class WttrSearchFormComponent implements OnInit {

  @Output()
  onSubmit = new EventEmitter<string>();

  searchControl!: FormControl;

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.reset();
  }

  reset() {
    this.searchControl = this.fb.control('', [Validators.required, Validators.minLength(1)]);
  }

  submitSearch() {
    this.onSubmit.emit(this.searchControl.value);
  }

  getErrorMessage(): string {
    if (this.searchControl.hasError('required')) {
      return 'You must enter a value';
    }

    return 'Unknown Error :(';
  }
}
