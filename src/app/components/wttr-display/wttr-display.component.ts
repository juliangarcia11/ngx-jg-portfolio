import {Component} from '@angular/core';
import {WttrDisplayModel} from "./wttr-display.model";


@Component({
  selector: 'app-wttr-display',
  templateUrl: './wttr-display.component.html',
  styleUrls: ['./wttr-display.component.scss']
})
export class WttrDisplayComponent {

  model: WttrDisplayModel = new WttrDisplayModel();

}

