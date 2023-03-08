import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-apod-tile',
  templateUrl: './apod-tile.component.html',
  styleUrls: ['./apod-tile.component.scss']
})
export class ApodTileComponent implements OnInit {

  @Input()
  day!: number;

  @Input()
  month!: number;

  @Input()
  year!: number;

  ngOnInit() {
    console.log('%c👽yo', 'color: black; background-color: #CBF1D0; font-size: 18px;', {
      self: this
    });
  }
}
