import { Injectable } from '@angular/core';
import {map, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {HomeModel} from "../models/home.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient: HttpClient
  ) { }

  /**
   * Get the homes.json file data
   * @returns Observable<HomeModel[]>
   */
  getHomes$(): Observable<HomeModel[]> {
    return this.httpClient.get<any>('assets/homes.json').pipe(
      map((homes: any[]) => homes.map(h => new HomeModel(h)))
    );
  }

  bookHome$(): Observable<any> {
    // mocky:::
    //    https://run.mocky.io/v3/cbe1cf4c-6e2d-4167-829a-dd3833a0bb4f
    const url = 'https://run.mocky.io/v3/cbe1cf4c-6e2d-4167-829a-dd3833a0bb4f';
    return this.httpClient.post(url,{});
  }
}
