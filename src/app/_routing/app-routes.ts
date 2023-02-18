import {Routes} from "@angular/router";
import {WttrDisplayComponent} from "../components";

export const AppRoutes: Routes = [
  {path: 'wttr', title: 'Wttr API', component: WttrDisplayComponent},
  { path: '**', redirectTo: ''}
];
