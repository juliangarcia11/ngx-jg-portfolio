import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

import { HeaderComponent } from './header.component';
import {click_item, query_for_el} from "../../spec-utils";

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let expectedTitle = 'Mocked Header Title';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule
      ],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = expectedTitle;
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

  it('should emit openSideNav on menu button click', () => {
    // set up a spy to listen for openSideNav emissions
    spyOn(component.openSideNav, 'emit');

    // click the menu button
    click_item(fixture, '[data-test="menu"]');

    // assert the event emission occurred
    expect(component.openSideNav.emit).toHaveBeenCalled();
  });
});
