import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WttrRoutingModule } from './wttr-routing.module';
import {WttrDisplayComponent} from "../../components";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    WttrDisplayComponent
  ],
  exports: [
    WttrDisplayComponent
  ],
  imports: [
    CommonModule,
    WttrRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatMomentDateModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class WttrModule { }
