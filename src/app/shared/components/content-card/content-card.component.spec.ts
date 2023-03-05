import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentCardComponent } from './content-card.component';
import { query_for_el } from '../../../core/utils';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

describe('ContentCardComponent', () => {
  let component: ContentCardComponent;
  let fixture: ComponentFixture<ContentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatCardModule],
      declarations: [ ContentCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // TODO: more tests about this
  it('should have a headerAsRow param', async () => {
    expect(component.headerAsRow).toBeDefined();
  });

  it('should find the card with content', async () => {
    expect(query_for_el(fixture, '[data-test="content-card-content"]')).toBeTruthy();
  });

  it('should have innerHTML in title ViewChild()', async () => {
    expect(query_for_el(fixture, '[data-test="content-card-title"]').innerHTML.length).toBeGreaterThan(0);
  });

  it('should have innerHTML in subtitle ViewChild()', async () => {
    expect(query_for_el(fixture, '[data-test="content-card-subtitle"]').innerHTML.length).toBeGreaterThan(0);
  });

  it('should have innerHTML in content ViewChild()', async () => {
    expect(query_for_el(fixture, '[data-test="content-card-content"]').innerHTML.length).toBeGreaterThan(0);
  });
});
