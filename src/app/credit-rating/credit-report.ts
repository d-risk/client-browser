export interface CreditReport {
  id: number
  creditRating: string
  creditRatingDate: string
  companyName: string
  stats: Stat[]
}

export interface Stat {
  name: string;
  xAxisLabel: string;
  yAxisLabel: string;
  data: Data[];
}

export interface Data {
  name: string;
  series: Series[];
}

export interface Series {
  name: string;
  value: number;
}
