import {Route, Routes} from "@angular/router";
import {AboutMeComponent, ApodDisplayComponent, DashboardComponent, WttrDisplayComponent} from "./features";

export const AppRoutes: Routes = [
  {path: 'dashboard', title: 'Dashboard', data: {icon: 'home'}, component: DashboardComponent},
  {path: 'wttr', title: 'Wttr API', data: {icon: 'cloud'}, loadChildren: () => import('./features/wttr-display/wttr-display.module').then(m => m.WttrDisplayModule)},
  {path: 'apod', title: 'APOD API', data: {icon: 'photo_camera'}, component: ApodDisplayComponent},
  {path: 'about-dev', title: 'About the Developer', data: {icon: 'info'}, component: AboutMeComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // redirect to `dashboard` on empty path
  {path: '**', redirectTo: ''}  // redirect to `` when no path matches
];

export const DashboardRoute = (): Route | undefined => {
  return AppRoutes.find(r => r.path === 'dashboard');
}
