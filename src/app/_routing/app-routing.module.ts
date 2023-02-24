import {NgModule} from '@angular/core';
import {Route, RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "../components";

export const AppRoutes: Routes = [
  {path: 'dashboard', title: 'Dashboard', component: DashboardComponent, data: {icon: 'home'}},
  { path: 'wttr', title: 'Wttr API', data: {icon: 'cloud'},  loadChildren: () => import('../_submodules/wttr/wttr.module').then(m => m.WttrModule) },
  // {path: 'wttr', title: 'Wttr API', component: WttrDisplayComponent, data: {icon: 'cloud'}},
  // {path: 'apod', title: 'APOD API', component: ApodDisplayComponent, data: {icon: 'photo_camera'}},
  // {path: 'about-dev', title: 'About the Developer', component: AboutMeComponent, data: {icon: 'info'}},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // redirect to `dashboard` on empty path
  {path: '**', redirectTo: ''}  // redirect to `` when no path matches
];
export const DashboardRoute = (): Route | undefined => {
  return AppRoutes.find(r => r.path === 'dashboard');
}

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
