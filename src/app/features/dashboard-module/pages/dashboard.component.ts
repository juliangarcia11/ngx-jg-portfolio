import { Component } from '@angular/core';
import { PreviewableRoutes } from '../../../app-routes';
import { Route } from '@angular/router';
import { RoutePreviewInterface } from '../../../core/models';

@Component({
  selector:    'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:   ['./dashboard.component.scss']
})
export class DashboardComponent {

  redirects: RoutePreviewInterface[];

  constructor() {
    this.redirects = PreviewableRoutes?.map(route => {
       if (!route.data || !route.data['preview']) return;

       return route.data['preview'];
    });
  }
}
