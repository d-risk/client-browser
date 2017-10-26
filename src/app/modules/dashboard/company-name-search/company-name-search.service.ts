import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/of';

export interface Company {
  name: string;
}

@Injectable()
export class CompanyNameSearchService {

  companies: Company[] = [
    {name: 'AAA'},
    {name: 'ABC'},
    {name: 'BBB'},
    {name: 'BCD'},
    {name: 'CCC'},
    {name: 'CDE'},
  ];

  constructor() {
  }

  search(text: string): Observable<Company[]> {
    // this.companies.filter(company => company.name.startsWith(text));
    return Observable.of<Company[]>(this.companies.filter(company => company.name.toLowerCase().startsWith(text.toLowerCase())));
  }

}
