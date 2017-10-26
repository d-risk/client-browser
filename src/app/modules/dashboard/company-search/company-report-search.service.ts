import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

export interface CompanyReport {
  name: string;
  rating: string;
  stats: any;
}

@Injectable()
export class CompanyReportSearchService {
  reports: CompanyReport[] = [
    {name: 'AAA', rating: '1', stats: {}},
    {name: 'ABC', rating: '2', stats: {}},
    {name: 'BBB', rating: '3', stats: {}},
    {name: 'BCD', rating: '4', stats: {}},
    {name: 'CCC', rating: '5', stats: {}},
    {name: 'CDE', rating: '6', stats: {}},
  ];

  constructor() {
  }

  search(text: string): Observable<CompanyReport[]> {
    return Observable.of<CompanyReport[]>(this.reports.filter(report => report.name.toLowerCase() === text.toLowerCase()));
  }
}
