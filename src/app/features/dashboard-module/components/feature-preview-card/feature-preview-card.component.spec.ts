import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturePreviewCardComponent } from './feature-preview-card.component';
import { MatCardModule } from '@angular/material/card';
import { MockedFeaturePreviewConst } from '../../models/mocked-feature-preview.const';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatCardHarness } from '@angular/material/card/testing';

describe('FeaturePreviewCardComponent', () => {
  let component: FeaturePreviewCardComponent;
  let fixture: ComponentFixture<FeaturePreviewCardComponent>;
  let loader: HarnessLoader;
  let mockFeature = MockedFeaturePreviewConst;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

  it('should find the feature preview card with a title', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="dashboard-preview-card"]'}));
    expect(cards.length).toBe(1);
    expect(await cards[0].getTitleText()).toBeTruthy();
  });

  it('should find the feature preview card with a subtitle', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="dashboard-preview-card"]'}));
    expect(cards.length).toBe(1);
    expect(await cards[0].getSubtitleText()).toBeTruthy();
  });
});
