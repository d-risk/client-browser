import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';

import 'rxjs/add/operator/map';

export interface Token {
  token: string;
}

@Injectable()
export class AuthenticationService {
  private _url = '/api/authentications';
  private _key = 'token';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http
      .post(this._url, JSON.stringify({username: username, password: password}), {observe: 'response'})
      .map((response: HttpResponse<any>) => {
        // TODO this is not exactly correct, fix it at a later time
        const token = JSON.parse(response.body);
        const body = response.body;
        if (body && token.token) {
          localStorage.setItem(this._key, JSON.stringify(token.token));
        }
        return body;
      });
  }

  logout() {
    localStorage.removeItem(this._key);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this._key);
  }
}
