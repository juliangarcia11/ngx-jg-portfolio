import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent, Routes} from "@angular/router";
import {AppRoutes} from "./_routing/app-routes";
import {filter} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ngx JG Portfolio';
  sideNavOpened: boolean = false;
  navigationRoutes: Routes;
  currentNavigationRoute: string = '/';

  constructor(private router: Router, private route: ActivatedRoute) {
    // filter out default route catching and store the set of potential navigation routes to be displayed in the side nav
    this.navigationRoutes = AppRoutes.filter(route => !['**', ''].includes(route.path ?? ''));

    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentNavigationRoute = (event as NavigationEnd).url;
      });
  }


  /**
   * Toggle the `sideNavOpened` parameter to the alternate boolean value
   */
  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
