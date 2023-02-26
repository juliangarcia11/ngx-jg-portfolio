import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WttrMatCardComponent } from './wttr-mat-card.component';
import {MatCardHarness} from "@angular/material/card/testing";
import {HarnessLoader} from "@angular/cdk/testing";
import {TestbedHarnessEnvironment} from "@angular/cdk/testing/testbed";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { WttrDisplayModel } from '../../models/wttr-display.model';

describe('WttrMatCardComponent', () => {
  let component: WttrMatCardComponent;
  let loader: HarnessLoader;
  let fixture: ComponentFixture<WttrMatCardComponent>;
  let mockedModel: WttrDisplayModel = new WttrDisplayModel();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        BrowserAnimationsModule,
      ],
      declarations: [ WttrMatCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WttrMatCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
  });

  // before each test, set the model
  beforeEach(() => {
    component.model = mockedModel;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find the mat card', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="wttr-card"]'}));
    expect(cards.length).toBe(1);
  });

  it('should have the default title on load', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="wttr-card"]'}));
    expect(cards.length).toBe(1);
    expect(await cards[0].getTitleText()).toBe(mockedModel.defaultTitle);
  });

  it('should have the subtitle on load', async () => {
    const cards = await loader.getAllHarnesses(MatCardHarness.with({selector: '[data-test="wttr-card"]'}));
    expect(cards.length).toBe(1);
    expect(await cards[0].getSubtitleText()).toBe(mockedModel.subtitle);
  });
});
