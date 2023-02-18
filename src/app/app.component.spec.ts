import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DataService} from "./services/data.service";
import {spyOnClass} from "jasmine-es6-spies/dist";
import {DialogService} from "./services/dialog.service";
import {RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {click_item, query_for_all_el, query_for_el} from "./spec-utils";
import {MatListModule} from "@angular/material/list";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
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
      ],
      providers: [
        {provide: DataService, useFactory: () => spyOnClass(DataService)},
        {provide: DialogService, useFactory: () => spyOnClass(DialogService)},
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should show a toolbar', () => {
    expect(query_for_el(fixture, '[data-test="toolbar"]')).toBeTruthy();
  });

  it('should show the assigned title', () => {
    expect(query_for_el(fixture, '[data-test="title"]')).toBeTruthy();
    expect(query_for_el(fixture, '[data-test="title"]').textContent).toContain(component.title);
  });

  it('should show a menu button', () => {
    expect(query_for_el(fixture, '[data-test="menu"]')).toBeTruthy();
  });

  it('should show a share button', () => {
    expect(query_for_el(fixture, '[data-test="share"]')).toBeTruthy();
  });

  it('should not show a side nav by default', () => {
    expect(query_for_el(fixture, '[data-test="side-nav"]').style.visibility).toBe('hidden');
  });

  it('should show a side nav when menu button is clicked', () => {
    click_item(fixture, '[data-test="menu"]');

    // Assert side nav is now open
    expect(query_for_el(fixture, '[data-test="side-nav"]')).toHaveClass('mat-drawer-opened');
  });

  it('should have at least 1 link item in the side nav', () => {
    expect(query_for_all_el(fixture, '[data-test="side-nav-link"]').length).toBeGreaterThanOrEqual(1);
  });

  // TODO:
  //    - should change the route when a side nav item is clicked
  //    - should open toast with current url after 'share' button is clicked

});
