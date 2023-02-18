import {ComponentFixture} from "@angular/core/testing";
import {query_for_el} from "./query-for-el";

/**
 * Find the item that matches the `el_query` and click it
 * @param fixture
 * @param el_query
 */

export const click_item = (fixture: ComponentFixture<unknown>, el_query: string) => {
  // find the button
  const button = query_for_el(fixture, el_query);

  // click the button
  button.click();

  // detect any changes
  fixture.detectChanges();
};
