import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WttrDisplayComponent} from "../../components";

const routes: Routes = [{ path: '', component: WttrDisplayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WttrRoutingModule { }
