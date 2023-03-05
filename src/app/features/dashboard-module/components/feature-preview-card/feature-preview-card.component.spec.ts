import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePreviewCardComponent } from './feature-preview-card.component';
import { MatCardModule } from '@angular/material/card';
import { MockedFeaturePreviewConst } from '../../models/mocked-feature-preview.const';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatCardHarness } from '@angular/material/card/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

fdescribe('FeaturePreviewCardComponent', () => {
  let component: FeaturePreviewCardComponent;
  let fixture: ComponentFixture<FeaturePreviewCardComponent>;
  let loader: HarnessLoader;
  let mockFeature = MockedFeaturePreviewConst;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [MatCardModule],
      declarations: [ FeaturePreviewCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturePreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  beforeEach(() => {
    component.feature = mockFeature;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a feature', async () => {
    expect(component.feature.title.length).toBeGreaterThan(0);
  });

  it('should have a feature title', async () => {
    expect(component.feature.title.length).toBeGreaterThan(0);
  });

  it('should have a feature subtitle', async () => {
    expect(component.feature.subtitle.length).toBeGreaterThan(0);
  });
});
