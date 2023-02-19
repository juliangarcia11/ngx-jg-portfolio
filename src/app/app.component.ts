import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, Routes} from "@angular/router";
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
  currentLocation: string = '/';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.currentLocation = router.url;
    // filter out default route catching and store the set of potential navigation routes to be displayed in the side nav
    this.navigationRoutes = AppRoutes.filter(route => !['**', ''].includes(route.path ?? ''));

    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        this.currentNavigationRoute = (event as NavigationEnd).url;
        this.currentLocation = window.location.href;
      });
  }


  /**
   * Toggle the `sideNavOpened` parameter to the alternate boolean value
   */
  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
  }
}
