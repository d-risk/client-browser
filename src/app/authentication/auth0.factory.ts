import {Injectable} from '@angular/core';

import * as auth0 from 'auth0-js';

import {AppConfig} from '../configuration/app.config';

@Injectable()
export class Auth0Factory {
  private readonly _auth0;

  constructor(private config: AppConfig) {
    this._auth0 = new auth0.WebAuth({
      clientID: config.get('auth0.clientID'),
      domain: config.get('auth0.domain'),
      responseType: config.get('auth0.responseType'),
      audience: config.get('auth0.audience'),
      redirectUri: config.get('auth0.redirectUri'),
      scope: config.get('auth0.scope')
    });
  }

  get auth0() {
    return this._auth0;
  }
}
