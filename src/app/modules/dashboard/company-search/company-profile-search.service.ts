import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

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
export class CompanyProfileSearchService {

  constructor(private http: Http) {
  }

  search(text: string): Observable<CompanyProfile> {
    return this.http
      .get(`api/profiles/?name=${text}`)
      .map(response => response.json() as CompanyProfile);

  }
}
