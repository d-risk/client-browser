import {Component, Input} from '@angular/core';

export interface RiskDriverData {
  dates: Date[]
  categories: string[]
  names: string[]
  numbers: Map<string, Map<string, Map<Date, number>>>
}

@Component({
  selector: 'app-risk-driver',
  templateUrl: './risk-driver.component.html',
  styleUrls: ['./risk-driver.component.css']
})
export class RiskDriverComponent {

  @Input() data: RiskDriverData;

  dates(): Date[] {
    return this.data.dates
  }

  categories(): string[] {
    return this.data.categories
  }

  names(): string[] {
    return this.data.names
  }

  number(category: string, name: string, date: Date): number {
    return this.data.numbers.get(category).get(name).get(date)
  }

  formatDate(date: Date) {
    return new Date(date).toLocaleDateString()
  }

}
