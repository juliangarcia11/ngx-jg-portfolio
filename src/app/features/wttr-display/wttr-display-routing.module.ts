import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WttrDisplayComponent } from './wttr-display.component';

const routes: Routes = [
  {path: '', component: WttrDisplayComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WttrDisplayRoutingModule { }
