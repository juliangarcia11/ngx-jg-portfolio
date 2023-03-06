import { Component } from '@angular/core';
import { PreviewRoutes } from '../../../app-routes';
import { Route } from '@angular/router';
import { RoutePreviewInterface } from '../../../core/models';
import { DashboardConst } from '../models/dashboard.const';
import { RoutePreview } from '../../../shared/models/route-preview.model';

@Component({
  selector:    'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:   ['./dashboard.component.scss']
})
export class DashboardComponent {

  title = DashboardConst.title;
  subtitle = DashboardConst.subtitle;
  previews: RoutePreviewInterface[];

  constructor() {
    this.previews = PreviewRoutes?.map(route => new RoutePreview(route)) ?? [];
  }
}
