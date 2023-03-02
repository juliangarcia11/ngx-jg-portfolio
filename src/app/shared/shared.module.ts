import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StateCardComponent } from './state-card/state-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    StateCardComponent
  ],
  exports: [
    StateCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
