import { TestBed } from '@angular/core/testing';

import { WttrService } from './wttr.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

describe('WttrService', () => {
  let wttrService: WttrService;
  let wttrServiceSpy: jasmine.Spy<jasmine.Func>;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    wttrService = TestBed.inject(WttrService);
  });

  beforeEach(() => {
    // Spy on and mock the HttpClient
    httpClient = TestBed.get(HttpClient);

    wttrService = TestBed.inject(WttrService);
    wttrServiceSpy = jasmine.createSpy('wttrServiceSpy');
  })

  it('should be created', () => {
    expect(wttrService).toBeTruthy();
  });

  // here we are testing that OUR logic (Rxjs) is sound, NOT that the HTTP call works
  it('should getBase$ from wttr', () => {
    // set up a spy so that when we call the getBase$ fn, 'getBase$ result' will be returned
    spyOn(httpClient, 'get').and.returnValue(of('getBase$ result'));

    // Use service to get data
    wttrService.getBase$('PDX').subscribe(wttrServiceSpy);

    // Verify that the service returned mocked data
    expect(wttrServiceSpy).toHaveBeenCalledOnceWith('getBase$ result');
  });
});
