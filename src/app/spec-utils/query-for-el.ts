import {ComponentFixture} from "@angular/core/testing";

export const query_for_el = (fixture: ComponentFixture<unknown>, selector: string) =>
  fixture.nativeElement.querySelector(selector);
