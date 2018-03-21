import {CompanyInfo} from "./company-info";

export interface CreditReport {
  companyId: string
  creditReportScore: number
  creditReportRating: string
  creditReportDate: Date
  financialsReports: FinancialsReport[]
}

export interface FinancialsReport {
  financialsReportDate: Date
  financials: Financials[]
  riskDrivers: RiskDriver[]
}

export interface Financials {
  name: string
  unit: string
  value: number
}

export interface RiskDriver {
  category: string
  unit: string
  data: RiskDriverData[]
}

export interface RiskDriverData {
  name: string
  value: number
}

export interface CompleteReport {
  company: CompanyInfo
  creditReports: CreditReport[]
}
