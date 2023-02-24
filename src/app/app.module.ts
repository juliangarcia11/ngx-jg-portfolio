/**
 * Angular Imports
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

/**
 * Material Design Imports
 */
import {MatDialogModule} from "@angular/material/dialog"
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
import {MatTooltipModule} from "@angular/material/tooltip";

/**
 * Project Modules
 */
import {AppRoutingModule} from './_routing/app-routing.module';

/**
 * Application Components
 */
import {AppComponent} from './app.component';
import {AboutMeComponent} from './components';
import {ApodDisplayComponent} from './components';
import {DashboardComponent} from './components';
import {HeaderComponent} from './components';
import {WttrDisplayComponent} from './components';

// NOTE: example code; to be removed
import {HomesComponent} from './components/homes/homes.component';
import {BookingComponent} from './components/booking/booking.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomesComponent,
    BookingComponent,
    // WttrDisplayComponent,
    DashboardComponent,
    ApodDisplayComponent,
    AboutMeComponent
  ],
  exports: [
    AppRoutingModule,
    AppComponent,
    HeaderComponent,
    HomesComponent,
    BookingComponent,
    // WttrDisplayComponent,
    DashboardComponent,
    ApodDisplayComponent,
    AboutMeComponent
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
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1500}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
