import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { WttrService } from '../services/wttr.service';
import { WttrDisplayModel } from '../models/wttr-display.model';
import { StateCardStates } from '../../../shared/components';
import { WttrSearchFormComponent } from '../components/wttr-search-form/wttr-search-form.component';


@Component({
  selector:    'app-wttr-display',
  templateUrl: './wttr.component.html',
  styleUrls:   ['./wttr.component.scss']
})
export class WttrComponent implements OnInit {

  @ViewChild(WttrSearchFormComponent)
  search!: WttrSearchFormComponent;

  model!: WttrDisplayModel;

  constructor(
    private weatherService: WttrService
  ) { }

  ngOnInit() {
    this.resetDisplay();
  }

  /**
   * Reset the component model and the search form
   */
  resetDisplay() {
    this.model = new WttrDisplayModel();

    if (this.search)
      this.search.reset();
  }

  /**
   * Request the weather for a searched location
   * @param searchString
   */
  submitSearch(searchString: string) {
    this.model.search = searchString;
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
}

