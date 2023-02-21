import {ComponentFixture, fakeAsync, TestBed} from '@angular/core/testing';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import { HeaderComponent } from './header.component';
import {click_item, query_for_el} from "../../spec-utils";
import {Clipboard, ClipboardModule} from "@angular/cdk/clipboard"
import {spyOnClass} from "jasmine-es6-spies/dist";
import {Location} from "@angular/common";
import {MatSnackBar, MatSnackBarModule} from "@angular/material/snack-bar";
import {RouterTestingModule} from "@angular/router/testing";
import {AppRoutes} from "../../_routing/app-routes";
import {HeaderInterface} from "./header.interface";
import {MatTooltipModule} from "@angular/material/tooltip";

describe('HeaderComponent', () => {
  let location: Location;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let clipboardSpy: jasmine.SpyObj<Clipboard>;
  let snackBarSpy: jasmine.SpyObj<MatSnackBar>;
  let expectedHeader: HeaderInterface = { currentUrl: 'mocked-route', icon: 'home', title: 'Mocked Header Title' };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(AppRoutes),
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        ClipboardModule,
        MatSnackBarModule,
        MatTooltipModule
      ],
      declarations: [ HeaderComponent ],
      providers: [
        {provide: Clipboard, useFactory: () => spyOnClass(Clipboard)},
        {provide: MatSnackBar, useFactory: () => spyOnClass(MatSnackBar)},
      ]
    })
    .compileComponents();

    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // before each test, get the clipboard service & set the title
  beforeEach(() => {
    clipboardSpy = TestBed.inject(Clipboard) as jasmine.SpyObj<Clipboard>;
    snackBarSpy = TestBed.inject(MatSnackBar) as jasmine.SpyObj<MatSnackBar>;
    component.model = expectedHeader;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have model', () => {
    expect(component.model).toBe(expectedHeader);
  });

  it('should show a toolbar', () => {
    expect(query_for_el(fixture, '[data-test="toolbar"]')).toBeTruthy();
  });

  it('should show the assigned title', () => {
    expect(query_for_el(fixture, '[data-test="title"]')).toBeTruthy();
    expect(query_for_el(fixture, '[data-test="title"]').textContent).toContain(expectedHeader.title);
  });

  it('should show the assigned icon', () => {
    expect(query_for_el(fixture, '[data-test="header-icon"]')).toBeTruthy();
    expect(query_for_el(fixture, '[data-test="header-icon"]').textContent).toContain(expectedHeader.icon);
  });

  it('should show a menu button', () => {
    expect(query_for_el(fixture, '[data-test="menu"]')).toBeTruthy();
  });

  // TODO Mat Test Harness
  xit('should show a tooltip when menu button is hovered on', () => {

    expect(query_for_el(fixture, '[data-test="menu-tooltip"]')).toBeTruthy()
  });

  it('should show a share button', () => {
    expect(query_for_el(fixture, '[data-test="share"]')).toBeTruthy();
  });

  it('should emit openSideNav on \'Menu\' button click', () => {
    // set up a spy to listen for openSideNav emissions
    spyOn(component.onClickMenu, 'emit');

    // click the menu button
    click_item(fixture, '[data-test="menu"]');

    // assert the event emission occurred
    expect(component.onClickMenu.emit).toHaveBeenCalled();
  });

  it('should call clipboard.copy on \'Share\' button click', () => {
    // click the share button
    click_item(fixture, '[data-test="share"]');

    // assert that the clipboard service was called
    expect(clipboardSpy.copy).toHaveBeenCalled();
  });

  it('should have an assigned currentRoute', () => {
    expect(component.model.currentUrl).toBe(expectedHeader.currentUrl);
  });

  it('should call snackBar.open on \'Share\' button click', () => {
    // click the share button
    click_item(fixture, '[data-test="share"]');

    // assert that the clipboard service was called
    expect(snackBarSpy.open).toHaveBeenCalled();
  });
});
