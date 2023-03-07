import { TestBed } from '@angular/core/testing';
import { GlobalErrorService } from './global-error.service';

describe('GlobalErrorService', () => {
  let service: GlobalErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GlobalErrorService]
    });
    service = TestBed.inject(GlobalErrorService);

    spyOn(window.console, 'error');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log error', () => {
    service.handleError('MOCKED ERROR')
    expect(window.console.error).toHaveBeenCalled();
  });
});
