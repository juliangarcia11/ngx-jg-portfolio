import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WttrDisplayRoutingModule } from './wttr-display-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { WttrDisplayComponent } from './wttr-display.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    WttrDisplayComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,

    SharedModule,

    WttrDisplayRoutingModule,
  ],
  exports: [
    WttrDisplayComponent
  ]
})
export class WttrDisplayModule { }
