import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApodRoutingModule } from './apod-routing.module';
import { ApodComponent } from './pages/apod.component';
import { SharedModule } from '../../shared/shared.module';
import { ApodCalendarComponent } from './components/apod-calendar/apod-calendar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApodTileComponent } from './components/apod-tile/apod-tile.component';



@NgModule({
  declarations: [ApodComponent, ApodCalendarComponent, ApodTileComponent],
  imports: [
    CommonModule,
    ApodRoutingModule,
    SharedModule,
    MatGridListModule
  ]
})
export class ApodModule { }
