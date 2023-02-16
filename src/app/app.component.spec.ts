import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {HomesComponent} from "./components/homes/homes.component";
import {HeaderComponent} from "./components/header/header.component";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {DataService} from "./services/data.service";
import {spyOnClass} from "jasmine-es6-spies/dist";
import {DialogService} from "./services/dialog.service";
import {RouterOutlet} from "@angular/router";
import {query_for_el} from "./spec-utils";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, HttpClientTestingModule, RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule
      ],
      declarations: [
        AppComponent, HomesComponent, HeaderComponent
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
    let titleItem = query_for_el(fixture, '[data-test="title"]');
    expect(titleItem).toBeTruthy();
    expect(titleItem.textContent).toContain(component.title);
  });

  it('should show a menu button', () => {
    expect(query_for_el(fixture, '[data-test="menu"]')).toBeTruthy();
  });

  it('should show a share button', () => {
    expect(query_for_el(fixture, '[data-test="share"]')).toBeTruthy();
  });
});
