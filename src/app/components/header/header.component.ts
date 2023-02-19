import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Clipboard} from "@angular/cdk/clipboard"
import {MatSnackBar} from "@angular/material/snack-bar";

/**
 * HeaderComponent utilizes MatToolbar to create a page header with:
 *    1) Menu button (opens side nav)
 *    2) Title string
 *    3) Share button (copies URL to clipboard)
 */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input()
  title: string = '';

  @Input()
  currentUrl: string = '';

  @Output()
  onClickMenu = new EventEmitter<void>();

  constructor(
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) { }

  /**
   * When the menu button is clicked, emit the event to parent components
   */
  handleMenuClick(): void {
    this.onClickMenu.emit();
  }

  /**
   * When the share button is clicked, ask the Clipboard service to
   * copy the value of the `currentUrl` parameter & inform the user
   */
  handleShareClick(): void {
    this.clipboard.copy(this.currentUrl);
    this.snackBar.open(`Copied ${this.currentUrl} to clipboard!`, 'Ok!');
  }
}
