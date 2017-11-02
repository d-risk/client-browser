import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

declare let require: any;

export interface Configuration {
  [key: string]: Configuration | string;
}

@Injectable()
export class AppConfig {
  private defaults: Configuration;
  private config: Configuration;

  constructor(private http: HttpClient) {
  }

  get(key: string): any {
    return this.config && this.config[key] ? this.config[key] : this.defaults[key];
  }

  load() {
    this.defaults = require('./defaults.json');
    return new Promise((resolve) => {
        this.http
          .get<Configuration>('./assets/config.json', {observe: 'body'})
          .subscribe(response => {
              this.config = response;
              console.log('Loading file "config.json": ' + JSON.stringify(this.config));
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
