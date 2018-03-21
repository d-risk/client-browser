import {Component, Input, OnInit} from '@angular/core';

import {FinancialsReport} from "../../../../../credit-report/credit-report";

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent implements OnInit {

  @Input() financialsReports: FinancialsReport[];

  columnsOrder: string[] = ['name'];
  dates: Date[];
  dataSource: MatTableData[] = [];

  ngOnInit() {
    let dates = new Set<Date>();

    this.financialsReports.forEach(report => {
        dates.add(report.financialsReportDate);
        report.financials.forEach(financials => {
          let data = this.dataSource.find(value => value.name.localeCompare(financials.name) === 0);
          if (!data) {
            data = {name: financials.name, years: new Map()};
            this.dataSource.push(data);
          }
          data.years.set(report.financialsReportDate, financials.value);
        });
      }
    );

    this.dates = Array.from(dates.keys()).sort();
    this.dates.forEach(value => this.columnsOrder.push(String(value)));
  }

  formatDate(date: Date) {
    return new Date(date).toLocaleDateString()
  }

}

interface MatTableData {
  name: string
  years: Map<Date, number>
}
