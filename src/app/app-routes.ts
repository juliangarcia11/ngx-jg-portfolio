import {Route, Routes} from "@angular/router";
import {AboutMeComponent, ApodDisplayComponent} from "./features";
import { WttrConst } from './features/wttr-module/models/wttr.const';

export const AppRoutes: Routes = [
  {
    path:         'dashboard',
    title:        'Dashboard',
    data:         {icon: 'home'},
    loadChildren: () => import('./features/dashboard-module/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path:         'wttr',
    title:        'Wttr API',
    data:         {icon: 'cloud', preview: WttrConst},
    loadChildren: () => import('./features/wttr-module/wttr.module').then(m => m.WttrModule)
  },
  {path: 'apod', title: 'APOD API', data: {icon: 'photo_camera'}, component: ApodDisplayComponent},
  {path: 'about-dev', title: 'About the Developer', data: {icon: 'info'}, component: AboutMeComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // redirect to `dashboard` on empty path
  {path: '**', redirectTo: ''}  // redirect to `` when no path matches
];

/**
 * @returns Route The object defining the dashboard route
 */
export const DashboardRoute = AppRoutes.find(r => r.path && r.path === 'dashboard');

/**
 * @returns Routes | Route[] The objects defining the routes with valid 'path' parameters
 */
export const PathRoutes = AppRoutes.filter(r => r.path && !['**', ''].includes(r.path));

/**
 * @returns Routes | Route[] The objects defining the routes with an object set to the Route.data.preview param
 */
export const PreviewRoutes = AppRoutes.filter(r => r.path && r.data && r.data['preview']);
