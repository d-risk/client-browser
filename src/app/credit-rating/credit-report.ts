export interface CreditReport {
  companyId: string
  creditRating: CreditRating
  riskDrivers: RiskDriver[]
}

export interface CreditRating {
  score: number
  text: string
  date: Date
}

export interface RiskDriver {
  name: string
  unit: string
  latest: number
  maximum: number
  minimum: number
  average: number
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
