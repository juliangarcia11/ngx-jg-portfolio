import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApodDisplayComponent } from './apod-display.component';

describe('ApodDisplayComponent', () => {
  let component: ApodDisplayComponent;
  let fixture: ComponentFixture<ApodDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApodDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApodDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
