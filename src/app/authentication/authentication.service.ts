import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map';

import {Auth0Factory} from './auth0.factory';

@Injectable()
export class AuthenticationService {
  private _accessToken = 'access_token';
  private _expiresAt = 'expires_at';
  private _profile = 'profile';
  private _auth0;
  private _user;

  constructor(private auth0Factory: Auth0Factory) {
    this._auth0 = auth0Factory.auth0;
    if (this.isAuthenticated()) {
      this._user = JSON.parse(localStorage.getItem(this._profile));
    } else {
      this.logout();
    }
  }

  login() {
    this._auth0.authorize();
  }

  logout() {
    localStorage.removeItem(this._accessToken);
    localStorage.removeItem(this._expiresAt);
    localStorage.removeItem(this._profile);
  }

  isAuthenticated(): boolean {
    return Date.now() < JSON.parse(localStorage.getItem(this._expiresAt));
  }

  handleAuthentication(): void {
    this._auth0.parseHash((error, authentication) => {
      if (authentication && authentication.accessToken) {
        window.location.hash = '';
        this._info(authentication);
      } else if (error) {
        console.log(error);
      }
    });
  }

  get user() {
    return this._user;
  }

  private _info(authentication) {
    this._auth0.client.userInfo(authentication.accessToken, (error, profile) => {
      if (profile) {
        this._store(authentication, profile);
        this._user = profile;
      } else if (error) {
        console.error(`Error authenticating: ${error.error}`);
      }
    });
  }

  private _store(authentication, profile): void {
    localStorage.setItem(this._accessToken, authentication.accessToken);
    localStorage.setItem(this._expiresAt, JSON.stringify((authentication.expiresIn * 1000) + Date.now()));
    localStorage.setItem(this._profile, JSON.stringify(profile));
  }

}
