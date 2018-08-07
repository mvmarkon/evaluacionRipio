import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AccountService {
  private url = 'http://localhost:8000/api/operations/accounts/';

  constructor(
    private http: HttpClient
  ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(`Error ${operation} failed: ${error.error}`);
      return of(result as T);
    };
  }
  getAccounts(): Observable<any> {
    const url = `${this.url}`;
    return this.http.get(url).pipe(
      catchError(this.handleError<any>('updateUser'))
    );
  }
}
