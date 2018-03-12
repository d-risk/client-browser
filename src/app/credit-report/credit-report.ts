export interface CreditReport {
  companyId: string
  creditReportScore: number
  creditReportRating: string
  creditReportDate: Date
  financialReports: FinancialReport[]
}

export interface FinancialReport {
  financialReportDate: Date
  financials: Financial[]
  riskDrivers: RiskDriver[]
}

export interface Financial {
  name: string
  unit: string
  value: number
}

export interface RiskDriver {
  name: string
  unit: string
  latest: number
  maximum: number
  minimum: number
  average: number
  industryAverage: number
}


