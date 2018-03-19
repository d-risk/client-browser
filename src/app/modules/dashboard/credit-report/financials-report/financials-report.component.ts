import {Component, Input, OnInit} from '@angular/core';

import {FinancialsReport} from "../../../../credit-report/credit-report";
import {FinancialsData} from "./financials/financials.component";
import {RiskDriverData} from "./risk-driver/risk-driver.component";

@Component({
  selector: 'app-financials-report',
  templateUrl: './financials-report.component.html',
  styleUrls: ['./financials-report.component.css']
})
export class FinancialsReportComponent implements OnInit {

  @Input() financialsReports: FinancialsReport[];

  financialsData: FinancialsData;
  riskDriverData: RiskDriverData;

  ngOnInit(): void {
    let financialsMap = new Map<string, Map<Date, number>>();
    let riskDriversMap = new Map<string, Map<string, Map<Date, number>>>();

    let dates = new Set<Date>();
    let financialsNames = new Set<string>();
    let riskDriverCategories = new Set<string>();
    let riskDriverNames = new Set<string>();

    this.financialsReports.forEach(report => {
        dates.add(report.financialsReportDate);
        report.financialsNumbers.forEach(financials => {
          financialsNames.add(financials.name);
          let datesMap = FinancialsReportComponent.getOrSet(financialsMap, financials.name, Map);
          datesMap.set(report.financialsReportDate, financials.value);
        });
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
    this.financialsData = {
      dates: Array.from(dates.keys()).sort(),
      names: Array.from(financialsNames.keys()).sort(),
      numbers: financialsMap,
    };
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
