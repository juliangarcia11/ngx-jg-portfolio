import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { StateCardComponent } from './components';
import { ContentCardComponent } from './components/content-card/content-card.component';

@NgModule({
  declarations: [
    StateCardComponent,
    ContentCardComponent
  ],
  exports: [
    StateCardComponent,
    ContentCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
