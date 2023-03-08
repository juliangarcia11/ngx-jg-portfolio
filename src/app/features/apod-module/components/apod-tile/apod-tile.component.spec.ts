import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodTileComponent } from './apod-tile.component';

describe('ApodTileComponent', () => {
  let component: ApodTileComponent;
  let fixture: ComponentFixture<ApodTileComponent>;
  let day = 1;
  let month = 1;
  let year = 2023;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApodTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.day = 1;
    component.month = 1;
    component.year = 2023;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have day input', () => {
    expect(component.day).toBeTruthy();
  });

  it('should have month input', () => {
    expect(component.month).toBeTruthy();
  });

  it('should have year input', () => {
    expect(component.year).toBeTruthy();
  });
});
