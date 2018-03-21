import {Component, Input, OnInit} from '@angular/core';

import {FinancialsReport} from "../../../../../credit-report/credit-report";

@Component({
  selector: 'app-risk-driver',
  templateUrl: './risk-driver.component.html',
  styleUrls: ['./risk-driver.component.css']
})
export class RiskDriverComponent implements OnInit {

  @Input() financialsReports: FinancialsReport[];

  columnsOrder: string[] = ['name'];
  dates: Date[];
  dataSource: MatTableData[] = [];

  ngOnInit() {
    let dates = new Set<Date>();

    this.financialsReports.forEach(report => {
        dates.add(report.financialsReportDate);
        report.riskDrivers.forEach(riskDriver => {
          let data = this.dataSource.find(value => value.category.localeCompare(riskDriver.category) === 0);
          if (!data) {
            data = {category: riskDriver.category, names: new Map()};
            this.dataSource.push(data);
          }
          riskDriver.data.forEach(value => getOrSet(data.names, value.name, Map).set(report.financialsReportDate, value.value));
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
  category: string
  names: Map<string, Map<Date, number>>
}

function getOrSet<K, V>(map: Map<K, V>, key: K, Type: { new(): V }): V {
  let value = map.get(key);
  if (!value) {
    value = new Type();
    map.set(key, value);
  }
  return value;
}
