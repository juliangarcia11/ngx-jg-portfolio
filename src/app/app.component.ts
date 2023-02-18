import { Component } from '@angular/core';
import {Routes} from "@angular/router";
import {AppRoutes} from "./_routing/app-routes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ngx JG Portfolio';
  sideNavOpened: boolean = false;
  navigationRoutes: Routes;

  constructor() {
    this.navigationRoutes = AppRoutes.filter(route => route.path !== '**');
  }

  /**
   * Toggle the `sideNavOpened` parameter to the alternate boolean value
   */
  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
    console.log('open side nav', {opened: this.sideNavOpened});
  }
}
