import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
} from '@angular/core/testing';
import { FeaturePreviewsComponent } from './feature-previews.component';
import { MatCardModule } from '@angular/material/card';
import { MockedFeaturePreviewConst } from '../../models/mocked-feature-preview.const';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RoutePreview } from '../../../../shared/models/route-preview.model';
import {
  click_item,
  query_for_el
} from '../../../../core/utils';
import { ContentCardComponent } from '../../../../shared/components/content-card/content-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppRoutes } from '../../../../app-routes';

describe('FeaturePreviewsComponent', () => {
  let component: FeaturePreviewsComponent;
  let fixture: ComponentFixture<FeaturePreviewsComponent>;
  let loader: HarnessLoader;
  let mockFeature = MockedFeaturePreviewConst;
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatCardModule, MatIconModule, MatButtonModule,
        RouterTestingModule.withRoutes(AppRoutes)],
      declarations: [ FeaturePreviewsComponent ]
    })
    .compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(FeaturePreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  beforeEach(() => {
    component.features = [new RoutePreview(mockFeature)];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a feature', async () => {
    expect(component.features[0].title.length).toBeGreaterThan(0);
  });

  it('should have a feature title', async () => {
    expect(component.features[0].title.length).toBeGreaterThan(0);
  });

  it('should have a feature subtitle', async () => {
    expect(component.features[0].subtitle.length).toBeGreaterThan(0);
  });

  it('should show a preview card', () => {
    expect(query_for_el(fixture, '[data-test="feature-preview-card"]')).toBeTruthy();
  });

  it('should show a preview link button', () => {
    expect(query_for_el(fixture, '[data-test="feature-preview-link"]')).toBeTruthy();
  });

  it('should navigate to "/wttr" when preview link is clicked', fakeAsync(() => {
    click_item(fixture, '[data-test="feature-preview-link"]');
    fixture.detectChanges();
    tick();
    expect(location.path()).toBe('/wttr');
  }));
});
