import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
  private _url = '/api/authenticate';
  private _key = 'token';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http
      .post(this._url, JSON.stringify({username: username, password: password}))
      .map((response: HttpResponse<any>) => {
        const user = response.body;
        if (user && user.token) {
          localStorage.setItem(this._key, JSON.stringify(user.token));
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem(this._key);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this._key);
  }
}
