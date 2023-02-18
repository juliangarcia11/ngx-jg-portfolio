import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WttrDisplayComponent } from './wttr-display.component';

describe('WttrDisplayComponent', () => {
  let component: WttrDisplayComponent;
  let fixture: ComponentFixture<WttrDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WttrDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WttrDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
