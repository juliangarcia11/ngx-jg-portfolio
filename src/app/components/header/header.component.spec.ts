import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import { HeaderComponent } from './header.component';
import {click_item, query_for_el} from "../../spec-utils";
import {Clipboard, ClipboardModule} from "@angular/cdk/clipboard"
import {spyOnClass} from "jasmine-es6-spies/dist";
import {Location} from "@angular/common";

describe('HeaderComponent', () => {
  let location: Location;
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let clipboardSpy: jasmine.SpyObj<Clipboard>;
  let expectedTitle = 'Mocked Header Title';
  let expectedRoute = "mocked-route";

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        ClipboardModule
      ],
      declarations: [ HeaderComponent ],
      providers: [
        {provide: Clipboard, useFactory: () => spyOnClass(Clipboard)}
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
    component.title = expectedTitle;
    component.currentUrl = expectedRoute;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a toolbar', () => {
    expect(query_for_el(fixture, '[data-test="toolbar"]')).toBeTruthy();
  });

  it('should show the assigned title', () => {
    expect(query_for_el(fixture, '[data-test="title"]')).toBeTruthy();
    expect(query_for_el(fixture, '[data-test="title"]').textContent).toContain(expectedTitle);
  });

  it('should show a menu button', () => {
    expect(query_for_el(fixture, '[data-test="menu"]')).toBeTruthy();
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
    expect(component.currentUrl).toBe(expectedRoute);
  });

  // TODO: should open toast with current url after 'share' button is clicked

});
