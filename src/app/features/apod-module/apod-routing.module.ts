import { ApodComponent } from './pages/apod.component';
import {
  RouterModule,
  Routes
} from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', component: ApodComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApodRoutingModule { }
