import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {}

  registerUser(userData): Observable<any> {
    return this.http.post('http://127.0.0.1:8000/api/users/', userData);
  }
  login(userData): Observable<any> {
    return this.http.post<any>('http://127.0.0.1:8000/api/auth/', userData)
      .map(res => {
          if (res && res.token) {
            userData.token = res.token;
            localStorage.setItem('currentUser', JSON.stringify(userData));
          }

        return userData;
      });
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
  }
}
