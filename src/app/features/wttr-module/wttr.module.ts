import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '../../shared/shared.module';
import { WttrRoutingModule } from './wttr-routing.module';

import { WttrComponent } from './pages/wttr.component';
import { WttrSearchFormComponent } from './components/wttr-search-form/wttr-search-form.component';


@NgModule({
  declarations: [
    WttrComponent,
    WttrSearchFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,

    SharedModule,

    WttrRoutingModule,
  ],
  exports: [
    WttrSearchFormComponent,
    WttrComponent
  ]
})
export class WttrModule { }
