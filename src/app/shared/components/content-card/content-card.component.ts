import {
  Component,
  Input,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  @ViewChild('title')
  title?: HTMLElement;

  @ViewChild('subtitle')
  subtitle?: HTMLElement;

  @ViewChild('content')
  content?: HTMLElement;

}
