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

  getBase$(search: string): Observable<any> {
    return this.httpClient.get(this.apiBaseUrl + search, { responseType: 'text' })
      .pipe(tap((results) => {
        //console.log('getting wttr', results);
      }));
  }
}
