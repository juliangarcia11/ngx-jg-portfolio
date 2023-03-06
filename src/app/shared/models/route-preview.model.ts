import { RoutePreviewInterface } from './route-preview.interface';
import { Route } from '@angular/router';

/**
 * Gathers parameters from a given Route object
 */
export class RoutePreview implements RoutePreviewInterface {
  errorTitle: string;
  icon: string;
  showPreview: boolean;
  path: string;
  subtitle: string;
  title: string;

  private readonly ICON_KEY = 'icon';
  private readonly PREVIEW_KEY = 'preview';

  constructor(json?: Route) {
    this.errorTitle = json?.data ? json.data[this.PREVIEW_KEY].errorTitle : '';
    this.icon = json?.data && json.data[this.ICON_KEY] ? json.data[this.ICON_KEY] : '';
    this.showPreview = json?.data ? json.data[this.PREVIEW_KEY].showPreview : '';
    this.subtitle = json?.data ? json.data[this.PREVIEW_KEY].subtitle : '';
    this.title = json?.data ? json.data[this.PREVIEW_KEY].title : '';
    this.path = json?.path ?? '';
  }
}
