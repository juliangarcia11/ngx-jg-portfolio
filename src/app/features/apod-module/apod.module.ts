import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodRoutingModule } from './apod-routing.module';
import { ApodComponent } from './pages/apod.component';



@NgModule({
  declarations: [ApodComponent],
  imports: [
    CommonModule,
    ApodRoutingModule
  ]
})
export class ApodModule { }
