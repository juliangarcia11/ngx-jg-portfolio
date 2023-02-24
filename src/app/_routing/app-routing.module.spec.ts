import {fakeAsync, TestBed, tick} from "@angular/core/testing";
import {Location} from '@angular/common';
import {AppComponent} from "../app.component";
import {Router, RouterOutlet} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {WttrDisplayComponent} from "../components";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {AppRoutes} from "./app-routing.module";

describe('AppRoutingModule', () => {
  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(AppRoutes),
        HttpClientTestingModule,
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule
      ],
      declarations: [
        AppComponent
      ]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should navigate to "/dashboard" by default', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/dashboard');
  }));

  it('should navigate to "/wttr" when "wttr" route is navigated to', fakeAsync(() => {
    router.navigate(['wttr']);
    tick();
    expect(location.path()).toBe('/wttr');
  }));

  it('should navigate to "/" when an unknown route is navigated to', fakeAsync(() => {
    router.navigate(['unknown-spec-route']);
    tick();
    expect(location.path()).toBe('/');
  }));
});
