import { Injectable } from '@angular/core';
import {Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";

/**
 * See: https://github.com/chubin/wttr.in
 */

@Injectable({
  providedIn: 'root'
})
export class WttrService {

  private apiBaseUrl: string = 'https://wttr.in/';
  private jsonFormat: string = '?format=j1';

  constructor(
    private httpClient: HttpClient
  ) { }

  getBase$(): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl)
      .pipe(tap((results) => {
        //console.log('getting wttr', results);
      }));
  }
}
