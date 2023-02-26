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

  get$(search: string, responseType: string): Observable<any> {
    let options: any = {responseType: responseType};
    return this.httpClient.get(this.apiBaseUrl + search, options)
      .pipe(tap((results) => {
        //console.log('getting wttr', results);
      }));
  }

  getText$ = (search: string): Observable<any> => this.get$(search, 'text');
  getBlob$ = (search: string): Observable<any> => this.get$(search, 'blob');
}
