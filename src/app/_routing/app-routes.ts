import {Route, Routes} from "@angular/router";
import {AboutMeComponent, ApodDisplayComponent, DashboardComponent, WttrDisplayComponent} from "../components";

export const AppRoutes: Routes = [
  {path: 'dashboard', title: 'Dashboard', component: DashboardComponent, data: {icon: 'home'}},
  {path: 'wttr', title: 'Wttr API', component: WttrDisplayComponent, data: {icon: 'cloud'}},
  {path: 'apod', title: 'APOD API', component: ApodDisplayComponent, data: {icon: 'photo_camera'}},
  {path: 'about-dev', title: 'About the Developer', component: AboutMeComponent, data: {icon: 'info'}},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // redirect to `dashboard` on empty path
  {path: '**', redirectTo: ''}  // redirect to `` when no path matches
];

export const DashboardRoute = (): Route | undefined => {
  return AppRoutes.find(r => r.path === 'dashboard');
}
