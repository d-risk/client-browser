import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare let require: any;

export interface Configuration {
  [key: string]: Configuration | string;
}

@Injectable()
export class AppConfig {
  private _config_file = './assets/config.json';
  private _defaults: Configuration = require('./defaults.json');
  private _config: Configuration;

  constructor(private http: HttpClient) {
  }

  get(key: string): any {
    return this._config && this._config[key] ? this._config[key] : this._defaults[key];
  }

  load() {
    return new Promise((resolve) => {
        this.http
          .get<Configuration>(this._config_file, {observe: 'body'})
          .subscribe(response => {
              this._config = response;
              console.log('Loading file "config.json": ' + JSON.stringify(this._config));
              resolve(true);
            },
            error => {
              console.log('Unable to load file "config.json": ' + JSON.stringify(error));
              resolve(true);
            }
          );
      }
    );
  }
}
