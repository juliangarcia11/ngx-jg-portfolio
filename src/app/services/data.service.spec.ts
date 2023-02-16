import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { DataService } from './data.service';
import { HttpClient } from "@angular/common/http";
import { MockedHomes } from "../models/homes.mock";
import {of} from "rxjs";
import {HomeModel} from "../models/home.model";
import {MockedBooking} from "../models/booking.mock";
import {BookingModel} from "../models/booking.model";

describe('DataService', () => {
  let dataService: DataService;
  let httpClient: HttpClient;
  let dataServiceSpy: jasmine.Spy<jasmine.Func>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    dataService = TestBed.inject(DataService);
  });

  beforeEach(() => {
    // Spy on and mock the HttpClient
    httpClient = TestBed.get(HttpClient);
    spyOn(httpClient, 'get').and.returnValue(of(MockedHomes.map(m => new HomeModel(m))));
    spyOn(httpClient, 'post').and.returnValue(of(null));

    dataService = TestBed.inject(DataService);
    dataServiceSpy = jasmine.createSpy('dataServiceSpy');
  })

  it('should be created', () => {
    expect(dataService).toBeTruthy();
  });

  it('should getHomes$ and then return the list of homes', () => {
    // Use our service to get homes
    dataService.getHomes$().subscribe(dataServiceSpy);

    // Verify that the service returned mocked data
    expect(dataServiceSpy).toHaveBeenCalledWith(MockedHomes.map(m => new HomeModel(m)));

    // Verify that the service called the proper HTTP endpoint
    expect(httpClient.get).toHaveBeenCalledWith('assets/homes.json');
  });

  it('should bookHome$ and then return a null', () => {
    // Use out service to post a booking
    dataService.bookHome$().subscribe(dataServiceSpy);

    // Verify that the service returned mocked data
    expect(dataServiceSpy).toHaveBeenCalledWith(null);
    // todo
    // expect(dataServiceSpy).toHaveBeenCalledWith(MockedBooking);

    // Verify that the service called the proper HTTP endpoint
    // todo
    // expect(httpClient.post).toHaveBeenCalledWith('mocky', 'assets/booking.json');
  });

});
