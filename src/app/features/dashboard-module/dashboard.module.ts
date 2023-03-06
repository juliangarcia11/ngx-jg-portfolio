import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { FeaturePreviewCardComponent } from './components/feature-preview-card/feature-preview-card.component';
import { SharedModule } from '../../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    DashboardComponent,
    FeaturePreviewCardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
