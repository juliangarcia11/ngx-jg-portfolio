import {Component} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, Routes} from "@angular/router";
import {
  AppRoutes,
  DashboardRoute,
  PathRoutes
} from './app-routes';
import {filter} from "rxjs";
import {HeaderInterface} from './core/components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'Ngx JG Portfolio';
  sideNavOpened: boolean = false;
  navigationRoutes: Routes;
  currentNavigationRoute: string = '/';
  header: HeaderInterface = { title: 'Ngx JG Portfolio', icon: 'home', currentUrl: '' };
  defaultIcon: string = 'home';

  constructor(private router: Router, private route: ActivatedRoute) {
    // filter out default route catching and store the set of potential navigation routes to be displayed in the side nav
    this.navigationRoutes = PathRoutes;

    // listen for the end of any navigation movement on the router
    router.events.pipe(
      filter(event => event instanceof NavigationEnd))
      .subscribe(event => this.handleNavigationEnd(event as NavigationEnd));
  }


  /**
   * Toggle the `sideNavOpened` parameter to the alternate boolean value
   */
  toggleSideNav(): void {
    this.sideNavOpened = !this.sideNavOpened;
  }

  /**
   * On Navigation End, update the current navigation route & the current header
   * @param event
   * @private
   */
  private handleNavigationEnd(event: NavigationEnd): void {
    // capture current nav route for use in template
    this.currentNavigationRoute = (event).url;
    // capture current info needed for header child component
    this.header = {
      title:      this.extractTitleFromRoute(),
      icon:       this.extractIconFromRoute(),
      currentUrl: window.location.href
    };
  }

  /**
   * Extract the title parameter for the current route
   * @private
   */
  private extractTitleFromRoute(): string {
    let routeTitle: string = this.route.firstChild?.snapshot.routeConfig?.title as string;

    // if the current routeTitle matches the DashboardRoute's title or the empty string, return the App's Title
    // else return the current routeTitle
    return [DashboardRoute?.title ?? '', ''].includes(routeTitle) ? this.appTitle : routeTitle;
  }

  /**
   * Extract the icon parameter for the current route
   * @private
   */
  private extractIconFromRoute() {
    let routeIcon: string = this.route.firstChild?.snapshot.data['icon'];
    return routeIcon ?? this.defaultIcon;
  }
}
