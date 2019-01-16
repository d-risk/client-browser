import {Injectable} from '@angular/core';
import {from, Observable} from "rxjs";
import {HttpLink, Options} from "apollo-angular-link-http";
import {Apollo} from "apollo-angular";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloError} from "apollo-client";
import {catchError, map} from "rxjs/operators";

import gql from "graphql-tag";

import {AppConfig} from "../configuration/app.config";
import {CompanyInfo} from "./company-info";
import {CompleteReport, CreditReport} from "./credit-report";

@Injectable()
export class CreditReportService {

  constructor(private config: AppConfig, private apollo: Apollo, private httpLink: HttpLink) {
    let uri = config.get("credit_report_service.uri");
    let link = httpLink.create(<Options>{
      uri: uri,
    });
    apollo.create({
      link: link,
      cache: new InMemoryCache(),
    });
  }

  queryCompaniesByText(companyName: string): Observable<CompanyInfo[]> {
    return this.apollo
      .query<CompaniesByTextType, CompaniesByTextVariables>({
        query: QueryCompaniesByText,
        variables: {companyName: companyName},
      })
      .pipe(
        catchError(this.error),
        map(value => value.data.companies)
      );
  }

  queryCreditReportsByCompanyId(companyId: string): Observable<CompleteReport> {
    return this.apollo
      .query<CreditReportsByCompanyIdType, CreditReportsByCompanyIdVariables>({
        query: QueryCreditReportsByCompanyId,
        variables: {companyId: companyId},
      })
      .pipe(
        catchError(this.error),
        map(value => {
          return {company: value.data.company, creditReports: value.data.creditReports};
        })
      );
  }

  private error(err: ApolloError) {
    err.graphQLErrors.forEach(value => console.log(value));
    if (err.networkError) {
      console.log(err.networkError);
    }
    return from([])
  }

}

const QueryCompaniesByText = gql`
    query CompaniesByText($companyName: String!) {
      companies(companyName: $companyName) {
        id
        name
      }
    }`;

interface CompaniesByTextType {
  companies: CompanyInfo[]
}

interface CompaniesByTextVariables {
  companyName: string
}

const QueryCreditReportsByCompanyId = gql`
    query CreditReportsByCompanyId($companyId: UUID!) {
      company(id: $companyId) {
        id
        name
        industry
        description
      }
      creditReports(companyId: $companyId) {
        companyId
        creditReportScore
        creditReportRating
        creditReportDate
        financialsReports {
          financialsReportDate
          financials {
            name
            unit
            value
          }
          riskDrivers {
            category
            unit
            data {
              name
              value
            }
          }
        }
      }
    }`;

interface CreditReportsByCompanyIdType {
  company: CompanyInfo
  creditReports: CreditReport[]
}

interface CreditReportsByCompanyIdVariables {
  companyId: string
}
