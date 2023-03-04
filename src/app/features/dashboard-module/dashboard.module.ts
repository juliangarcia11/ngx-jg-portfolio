import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { FeaturePreviewCardComponent } from './components/feature-preview-card/feature-preview-card.component';


@NgModule({
  declarations: [
    DashboardComponent,
    FeaturePreviewCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
