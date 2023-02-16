import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create header component', () => {
    expect(component).toBeTruthy();
  });

  it('should show logo', () => {

    const item = fixture.nativeElement.querySelector('[data-test="logo"]');
    expect(item).toBeTruthy();

  });

  it('should show search', () => {

    const item = fixture.nativeElement.querySelector('[data-test="search"]');
    expect(item).toBeTruthy();

  });

  it('should show menu', () => {

    const item = fixture.nativeElement.querySelector('[data-test="menu"]');
    expect(item).toBeTruthy();

  });

  it('should show filters', () => {
    const filterSelectors = ['home-type', 'dates', 'guests', 'price', 'rooms', 'amenities'];
    filterSelectors.forEach(filter => {
      const item = fixture.nativeElement.querySelector(`[data-test="${filter}"]`);
      expect(item).toBeTruthy();
    });
  });
});
