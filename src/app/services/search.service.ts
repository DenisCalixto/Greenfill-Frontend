import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap, map } from 'rxjs/operators';
import { throwError, Subject } from 'rxjs';

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
          for (const key in responseData) {
            leadersArray.push({...responseData[key]});
          } 
          return leadersArray;
        })
      );
  }

  private handleSearchResults(results) {
    // console.log(results);
  }

  // private handleAuthentication(
  //   email: string,
  //   userId: string,
  //   token: string,
  //   expiresIn: number
  // ) {
  //   const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
  //   const user = new User(email, userId, token, expirationDate);
  //   this.userId = userId;
  //   this.user.next(user);
  // }

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
