import {Component, Input, OnInit} from '@angular/core';

import {FinancialsReport} from "../../../../credit-report/credit-report";
import {RiskDriverData} from "./risk-driver/risk-driver.component";

@Component({
  selector: 'app-financials-report',
  templateUrl: './financials-report.component.html',
  styleUrls: ['./financials-report.component.css']
})
export class FinancialsReportComponent implements OnInit {

  @Input() financialsReports: FinancialsReport[];

  riskDriverData: RiskDriverData;

  ngOnInit(): void {
    let riskDriversMap = new Map<string, Map<string, Map<Date, number>>>();

    let dates = new Set<Date>();
    let riskDriverCategories = new Set<string>();
    let riskDriverNames = new Set<string>();

    this.financialsReports.forEach(report => {
        dates.add(report.financialsReportDate);
        report.riskDrivers.forEach(riskDriver => {
          riskDriverCategories.add(riskDriver.category);
          let namesMap = FinancialsReportComponent.getOrSet(riskDriversMap, riskDriver.category, Map);
          riskDriver.numbers.forEach(value => {
            riskDriverNames.add(value.name);
            let numbersMap = FinancialsReportComponent.getOrSet(namesMap, value.name, Map);
            numbersMap.set(report.financialsReportDate, value.value);
          })
        });
      }
    );
    this.riskDriverData = {
      dates: Array.from(dates.keys()).sort(),
      categories: Array.from(riskDriverCategories.keys()).sort(),
      names: Array.from(riskDriverNames.keys()).sort(),
      numbers: riskDriversMap,
    };
  }


  private static getOrSet<K, V>(map: Map<K, V>, key: K, DefaultValue: { new(): V }): V {
    let value = map.get(key);
    if (!value) {
      value = new DefaultValue();
      map.set(key, value);
    }
    return value;
  }

}
