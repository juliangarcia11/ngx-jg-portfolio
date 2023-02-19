import {Routes} from "@angular/router";
import {WttrDisplayComponent} from "../components";
import {DashboardComponent} from "../components/dashboard/dashboard.component";

export const AppRoutes: Routes = [
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  { path: 'wttr', title: 'Wttr API', component: WttrDisplayComponent },
  { path: '',   redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to `dashboard` on empty path
  { path: '**', redirectTo: ''}  // redirect to `` when no path matches
];
