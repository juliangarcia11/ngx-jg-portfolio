import {
  Component,
  Input
} from '@angular/core';
import { WttrDisplayModel } from '../../models/wttr-display.model';
import { SearchStates } from '../../models/search-states.enum';

@Component({
  selector: 'app-wttr-mat-card',
  templateUrl: './wttr-mat-card.component.html',
  styleUrls: ['./wttr-mat-card.component.scss']
})
export class WttrMatCardComponent {
  @Input()
  model: WttrDisplayModel = new WttrDisplayModel();

  States = SearchStates;
}
