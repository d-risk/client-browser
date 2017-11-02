import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare let require: any;

export interface Configuration {
  [key: string]: Configuration | string;
}

@Injectable()
export class AppConfig {
  private _defaults_file = './defaults.json';
  private _config_file = './assets/config.json';
  private _defaults: Configuration;
  private _config: Configuration;

  constructor(private http: HttpClient) {
  }

  get(key: string): any {
    return this._config && this._config[key] ? this._config[key] : this._defaults[key];
  }

  load() {
    this._defaults = require(this._defaults_file);
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
