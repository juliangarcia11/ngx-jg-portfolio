import {ComponentFixture} from "@angular/core/testing";

/**
 * Find a particular element within the provided ComponentFixture
 * @param fixture
 * @param selector
 */
export const query_for_el = (fixture: ComponentFixture<unknown>, selector: string) =>
  fixture.nativeElement.querySelector(selector);

/**
 * Find a particular element within the provided ComponentFixture
 * @param fixture
 * @param selector
 */
export const query_for_all_el = (fixture: ComponentFixture<unknown>, selector: string) =>
  fixture.nativeElement.querySelectorAll(selector);
