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
  financialsNumbers: FinancialNumber[]
  riskDrivers: RiskDriver[]
}

export interface FinancialNumber {
  name: string
  unit: string
  value: number
}

export interface RiskDriver {
  category: string
  unit: string
  numbers: RiskDriverNumber[]
}

export interface RiskDriverNumber {
  name: string
  value: number
}

export interface CompleteReport {
  company: CompanyInfo
  creditReports: CreditReport[]
}
