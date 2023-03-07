import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodRoutingModule } from './apod-routing.module';
import { ApodComponent } from './pages/apod.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [ApodComponent],
  imports: [
    CommonModule,
    ApodRoutingModule,
    SharedModule
  ]
})
export class ApodModule { }
