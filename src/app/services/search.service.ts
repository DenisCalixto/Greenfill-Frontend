import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';
import { Store } from '../models/Store';

export interface Search {
  id: string;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class SearchService {

  constructor(private http: HttpClient, private router: Router) {}

  search(searchText: string) {
    return this.http
      .post<Search[]>(
        'http://greenfill.deniscalixto.wmdd.ca/search',
        {
          search: searchText
        }
      )
      .pipe(
        catchError(this.handleError),
        map(responseData => {
          const leadersArray: Search[] = [];
          // tslint:disable-next-line: forin
          for (const key in responseData) {
            leadersArray.push({...responseData[key]});
          }
          return leadersArray;
        })
      );
  }

  fetchStore(storeId: string) {
    return this.http
      .get<Store>(
        'http://greenfill.deniscalixto.wmdd.ca/company/' + storeId
      )
      .pipe(
        catchError(this.handleError),
        map(responseData => {
          let store = new Store();
          store = responseData['company'];
          return store;
        })
      );
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email exists already';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is not correct.';
        break;
    }
    return throwError(errorMessage);
  }
}
