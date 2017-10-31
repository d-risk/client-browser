import {CompanyName} from '../company-search/company-name-search.service';
import {CompanyProfile} from '../company-search/company-report-search.service';
import {Observable} from 'rxjs/Observable';

export class FakeData {
  companies: CompanyName[] = [
    {name: 'AAA'},
    {name: 'ABC'},
    {name: 'BBB'},
    {name: 'BCD'},
    {name: 'CCC'},
    {name: 'CDE'},
  ];
  profiles: CompanyProfile[] = [
    {name: 'AAA', rating: '1', stats: {}},
    {name: 'ABC', rating: '2', stats: {}},
    {name: 'BBB', rating: '3', stats: {}},
    {name: 'BCD', rating: '4', stats: {}},
    {name: 'CCC', rating: '5', stats: {}},
    {name: 'CDE', rating: '6', stats: {}},
  ];
  stats = {
    revenue: {
      name: 'Revenue',
      xAxisLabel: 'Month/Year',
      yAxisLabel: '$',
      data: []
    },
    ebitda: {
      name: 'EBITDA',
      xAxisLabel: 'Month/Year',
      yAxisLabel: '$',
      data: []
    },
    netProfit: {
      name: 'Net Profit',
      xAxisLabel: 'Month/Year',
      yAxisLabel: '$',
      data: []
    },
    debtCoverageRatio: {
      name: 'Debt Coverage Ratio',
      xAxisLabel: 'Month/Year',
      yAxisLabel: '%',
      data: []
    },
  };

  constructor() {
    const r = {name: 'Revenue', series: []};
    const s = {name: 'EBITDA', series: []};
    const t = {name: 'Net Profit', series: []};
    const u = {name: 'Debit Coverage Ratio', series: []};
    for (let i = 2000; i <= 2017; i++) {
      r.series.push({name: i.toString(), value: Math.round(Math.random() * 10000000)});
      s.series.push({name: i.toString(), value: Math.round(Math.random() * 10000)});
      t.series.push({name: i.toString(), value: Math.round(Math.random() * 100000)});
      u.series.push({name: i.toString(), value: Math.round(Math.random() * 100)});
    }
    this.stats.revenue.data.push(r);
    this.stats.ebitda.data.push(s);
    this.stats.netProfit.data.push(t);
    this.stats.debtCoverageRatio.data.push(u);
  }

  names(): CompanyName[] {
    return this.profiles.map(profile => {
      return {name: profile.name};
    });
  }

  getReport(text: string): Observable<CompanyProfile> {
    return Observable.of<CompanyProfile>(this.profiles.find(profile => profile.name.toLowerCase() === text.toLowerCase()));
  }

  values(): any[] {
    const r = [];
    for (const key in this.stats) {
      if (this.stats.hasOwnProperty(key)) {
        r.push(this.stats[key]);
      }
    }
    return r;
  }

}
