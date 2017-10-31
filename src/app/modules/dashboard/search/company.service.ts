import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';

export interface CompanyName {
  name: string;
}

@Injectable()
export class CompanyService {

  constructor(private http: Http) {
  }

  search(text: string): Observable<CompanyName[]> {
    return this.http
      .get(`api/companies/?name=${text}`)
      .map(response => {
        console.log('response = ' + JSON.stringify(response));
        return response.json() as CompanyName[];
      });
  }

}
