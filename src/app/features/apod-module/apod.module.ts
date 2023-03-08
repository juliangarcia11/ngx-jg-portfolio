import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodRoutingModule } from './apod-routing.module';
import { ApodComponent } from './pages/apod.component';
import { SharedModule } from '../../shared/shared.module';
import { ApodCalendarComponent } from './components/apod-calendar/apod-calendar.component';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [ApodComponent, ApodCalendarComponent],
  imports: [
    CommonModule,
    ApodRoutingModule,
    SharedModule,
    MatGridListModule
  ]
})
export class ApodModule { }
