import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ngx JG Portfolio';
  sideNavOpened: boolean = false;

  /**
   * Toggle the `sideNavOpened` parameter to the alternate boolean value
   */
  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
    console.log('open side nav', {opened: this.sideNavOpened});
  }
}
