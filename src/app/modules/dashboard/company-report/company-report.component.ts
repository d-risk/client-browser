import {Component, OnInit} from '@angular/core';
import {CompanyReportSearchService} from './company-report-search.service';

@Component({
  selector: 'app-company-report-search',
  templateUrl: './company-report.component.html',
  styleUrls: ['./company-report.component.css']
})
export class CompanyReportComponent implements OnInit {
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

  constructor(private companyReportSearchService: CompanyReportSearchService) {
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

  ngOnInit() {
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

  onSelect(event) {
    console.log(event);
  }
}
