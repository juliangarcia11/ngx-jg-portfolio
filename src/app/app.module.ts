import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog"

import { AppRoutingModule } from './_routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomesComponent } from './components/homes/homes.component';
import { BookingComponent } from './components/booking/booking.component';
import { WttrDisplayComponent } from './components/wttr-display/wttr-display.component';
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule} from "@angular/material/snack-bar";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMomentDateModule} from "@angular/material-moment-adapter";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomesComponent,
    BookingComponent,
    WttrDisplayComponent,
    DashboardComponent
  ],
  exports: [
    AppRoutingModule,
    AppComponent,
    HeaderComponent,
    HomesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
    MatListModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
