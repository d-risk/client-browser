import {Component, Input, OnInit} from '@angular/core';

import {Financials, FinancialsReport, RiskDriver} from "../../../../../credit-report/credit-report";

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  @Input() financialsReports: FinancialsReport[];

  financials: Unit[] = [];
  financialsUnitsMap: Map<string, Unit> = new Map();
  financialsDataMap: Map<string, Data> = new Map();

  riskDrivers: Unit[] = [];
  riskDriversUnitsMap: Map<string, Unit> = new Map();
  riskDriversDataMap: Map<string, Data> = new Map();

  view: any[];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Date';
  showYAxisLabel = true;

  colorScheme = 'cool';

  // line, area
  autoScale = true;

  ngOnInit() {
    this.financialsReports.forEach(report => {
      let date = report.financialsReportDate;
      this.parseFinancials(report.financials, date);
      this.parseRiskDrivers(report.riskDrivers, date);
    });
  }


  private parseFinancials(array: Financials[], date: Date): void {
    array.forEach(financials => {
      let unitType: string = financials.unit;
      let unit: Unit = getOrSet(unitType, this.financialsUnitsMap, this.financials, {name: unitType, data: []});
      let name: string = financials.name;
      let data: Data = getOrSet(name, this.financialsDataMap, unit.data, {name: name, series: []});
      data.series.push({name: date, value: financials.value});
    });
  }

  private parseRiskDrivers(array: RiskDriver[], date: Date): void {
    array.forEach(driver => {
      let unitType: string = driver.unit;
      let unit: Unit = getOrSet(unitType, this.riskDriversUnitsMap, this.riskDrivers, {name: unitType, data: []});
      let name: string = driver.category;
      let data: Data = getOrSet(name, this.riskDriversDataMap, unit.data, {name: name, series: []});
      data.series.push({
        name: date,
        value: driver.data.find(value => value.name.localeCompare('Latest') === 0).value
      });
    });
  }

  onSelect(event) {

  }

}

function getOrSet<K, V>(key: K, map: Map<K, V>, a: V[], defaultValue: V): V {
  let value = map.get(key);
  if (!value) {
    value = defaultValue;
    a.push(value);
    map.set(key, value);
  }
  return value;
}

interface Unit {
  name: string
  data: Data[]
}

interface Data {
  name: string
  series: Series[]
}

interface Series {
  name: Date
  value: number
}
