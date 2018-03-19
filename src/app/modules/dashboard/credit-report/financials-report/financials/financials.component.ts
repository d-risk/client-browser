import {Component, Input} from '@angular/core';

export interface FinancialsData {
  dates: Date[]
  names: string[]
  numbers: Map<string, Map<Date, number>>
}

@Component({
  selector: 'app-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.css']
})
export class FinancialsComponent {

  @Input() data: FinancialsData;

  dates(): Date[] {
    return this.data.dates
  }

  names(): string[] {
    return this.data.names
  }

  number(name: string, date: Date): number {
    return this.data.numbers.get(name).get(date)
  }

  formatDate(date: Date) {
    return new Date(date).toLocaleDateString()
  }

}
