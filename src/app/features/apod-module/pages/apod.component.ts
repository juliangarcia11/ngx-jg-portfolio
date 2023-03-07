import { Component } from '@angular/core';
import { ApodConst } from '../models/apod.const';

@Component({
  selector:    'app-apod',
  templateUrl: './apod.component.html',
  styleUrls:   ['./apod.component.scss']
})
export class ApodComponent {

  title = ApodConst.title;
  subtitle = ApodConst.subtitle;

}
