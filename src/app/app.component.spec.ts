import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {spyOnClass} from "jasmine-es6-spies/dist";
import {Router, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatListModule} from "@angular/material/list";
import {Location} from '@angular/common';
import {Clipboard, ClipboardModule} from "@angular/cdk/clipboard"
import {MatSnackBarModule} from "@angular/material/snack-bar";

import { HeaderComponent } from './core/components';
import {
  DataService,
  DialogService
} from './core/services';

import {
  click_item,
  query_for_all_el,
  query_for_el
} from './core/utils';


import { AppRoutes } from './app-routes';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let clipboardService: jasmine.SpyObj<Clipboard>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(AppRoutes),
        HttpClientTestingModule,
        RouterOutlet,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        ClipboardModule,
        MatSnackBarModule
      ],
      declarations: [
        AppComponent, HeaderComponent
      ],
      providers: [
        {provide: DataService, useFactory: () => spyOnClass(DataService)},
        {provide: DialogService, useFactory: () => spyOnClass(DialogService)},
        {provide: Clipboard, useFactory: () => spyOnClass(Clipboard)},
      ]
    }).compileComponents();

    location = TestBed.get(Location);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // before each test, get the clipboard service & set the title
  beforeEach(() => {
    clipboardService = TestBed.get(Clipboard);

    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should show a header', () => {
    expect(query_for_el(fixture, '[data-test="header"]')).toBeTruthy();
  });

  it('should not show a side nav by default', () => {
    expect(query_for_el(fixture, '[data-test="side-nav"]').style.visibility).toBe('hidden');
  });

  it('should show a side nav when menu button is clicked', () => {
    click_item(fixture, '[data-test="menu"]');

    // Assert side nav is now open
    expect(query_for_el(fixture, '[data-test="side-nav"]')).toHaveClass('mat-drawer-opened');
  });

  it('should have 1 link item per route in the side nav', () => {
    expect(query_for_all_el(fixture, '[data-test="side-nav-link"]').length).toBe(component.navigationRoutes.length);
  });

  it('should navigate to "/dashboard" when the "Dashboard" side nav item is clicked', fakeAsync(() => {
    // click the 1st nav link, the dashboard link
    click_item(fixture, '#side-nav-link-0[data-test="side-nav-link"]');
    // allow router to do its business
    tick();
    // check path
    expect(location.path()).toBe('/dashboard');
  }));

  it('should have default app header title by default', () => {
    expect(component.header.title).toBe(component.appTitle);
  });

  it('should have default app header icon by default', () => {
    expect(component.header.icon).toBe(component.defaultIcon);
  });

  it('should have a header current url', () => {
    expect(component.header.currentUrl).toBeDefined();
  });

  it('should have a currentNavigationRoute', () => {
    expect(component.currentNavigationRoute).toBeTruthy();
  });
});
