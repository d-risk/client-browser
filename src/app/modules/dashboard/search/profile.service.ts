import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';

export interface CompanyProfile {
  name: string;
  rating: string;
  stats: Stat[];
}

export interface Stat {
  name: string;
  xAxisLabel: string;
  yAxisLabel: string;
  data: Data[];
}

export interface Data {
  name: string;
  series: Series[];
}

export interface Series {
  name: string;
  value: number;
}

@Injectable()
export class ProfileService {

  constructor(private http: Http) {
  }

  search(text: string): Observable<CompanyProfile> {
    return this.http
      .get('api/profiles/', {params: {name: text}})
      .map((response) => {
        console.log('received = ' + JSON.stringify(response));
        return response.json() as CompanyProfile;
      });

  }
}
