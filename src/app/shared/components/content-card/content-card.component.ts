import {
  Component,
  Input,
  ViewChild
} from '@angular/core';

/**
 * A MatCard styled for use through the app. Content of the card must be projected
 * via Angular Content Projection
 * Ref: https://angular.io/guide/content-projection
 *
 * @author Julian Garcia
 * @updated 2023/03/05
 */

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {

  /**
   * If true, the header content of the card will be displayed as a row of items
   * If false, the header content of the card will be displayed as a column of items
   */
  @Input()
  headerAsRow = true;

  /**
   * Reference to projected title content
   */
  @ViewChild('title')
  title?: HTMLElement;

  /**
   * Reference to projected subtitle content
   */
  @ViewChild('subtitle')
  subtitle?: HTMLElement;

  /**
   * Reference to projected content
   */
  @ViewChild('content')
  content?: HTMLElement;

}
