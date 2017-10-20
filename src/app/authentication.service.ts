import {Injectable} from '@angular/core';
import {Response} from '@angular/http';
import {HttpClient, HttpResponse} from '@angular/common/http';

import 'rxjs/add/operator/map';
import {User} from './user';

@Injectable()
export class AuthenticationService {
  private _url = '/api/authenticate';
  private _key = 'currentUser';

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {
    return this.http
      .post(this._url, JSON.stringify({username: username, password: password}))
      .map((response: HttpResponse<any>) => {
        const user = response.body.json();
        if (user && user.token) {
          localStorage.setItem(this._key, JSON.stringify(user));
        }
        return user;
      });
  }

  logout() {
    localStorage.removeItem(this._key);
  }
}
