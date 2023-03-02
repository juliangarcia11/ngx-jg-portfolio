import {
  Component,
  Input
} from '@angular/core';
import { StateCardStates } from './state-card-states.enum';
import { StateCardModel } from './state-card.model';

@Component({
  selector:    'app-state-card',
  templateUrl: './state-card.component.html',
  styleUrls:   ['./state-card.component.scss']
})
export class StateCardComponent {
  @Input()
  model: StateCardModel = new StateCardModel();

  States = StateCardStates;
}
