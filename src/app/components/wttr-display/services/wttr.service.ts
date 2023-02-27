import { Injectable } from '@angular/core';
import {
  map,
  Observable,
  tap
} from 'rxjs';
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
  private defaultFormat: string = '?1pqQF';

  constructor(
    private httpClient: HttpClient
  ) { }

  get$(search: string, responseType: string): Observable<any> {
    let options: any = {responseType: responseType};
    return this.httpClient.get(this.apiBaseUrl + search, options)
      .pipe(tap((results) => {
        //console.log('getting wttr', results);
      }));
  }

  getText$(search: string): Observable<any> {
    return this.get$(search + this.defaultFormat, 'text').pipe(
      map((htmlResult: string) => {
        // remove the search string from the start of the response text
        if (htmlResult.includes(search))
          htmlResult = htmlResult.replace(search, '');

        return htmlResult;
      }));
  };

  getBlob$ = (search: string): Observable<any> => this.get$(search, 'blob');
}
