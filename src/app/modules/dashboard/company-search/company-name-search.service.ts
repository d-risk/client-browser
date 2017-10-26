import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';

export interface CompanyName {
  name: string;
}

@Injectable()
export class CompanyNameSearchService {

  companies: CompanyName[] = [
    {name: 'AAA'},
    {name: 'ABC'},
    {name: 'BBB'},
    {name: 'BCD'},
    {name: 'CCC'},
    {name: 'CDE'},
  ];

  constructor() {
  }

  search(text: string): Observable<CompanyName[]> {
    // this.companies.filter(company => company.name.startsWith(text));
    return Observable.of<CompanyName[]>(this.companies.filter(company => company.name.toLowerCase().startsWith(text.toLowerCase())));
  }

}
