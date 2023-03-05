import { Component } from '@angular/core';
import { PreviewableRoutes } from '../../../app-routes';
import { Route } from '@angular/router';
import { RoutePreviewInterface } from '../../../core/models';
import { DashboardConst } from '../models/dashboard.const';

@Component({
  selector:    'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:   ['./dashboard.component.scss']
})
export class DashboardComponent {

  title = DashboardConst.title;
  subtitle = DashboardConst.subtitle;

  redirects: RoutePreviewInterface[];

  constructor() {
    this.redirects = PreviewableRoutes?.map(route => {
       if (!route.data || !route.data['preview']) return;

       return route.data['preview'];
    });
  }
}
