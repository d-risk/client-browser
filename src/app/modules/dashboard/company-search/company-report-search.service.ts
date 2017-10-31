import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

export interface CompanyProfile {
  name: string;
  rating: string;
  stats: any;
}

@Injectable()
export class CompanyReportSearchService {

  constructor(private http: Http) {
  }

  search(text: string): Observable<CompanyProfile> {
    return this.http
      .get(`api/profiles/?name=${text}`)
      .map(response => response.json() as CompanyProfile);

  }
}
