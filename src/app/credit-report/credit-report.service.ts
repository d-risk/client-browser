import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpLink, Options} from "apollo-angular-link-http";
import {Apollo} from "apollo-angular";
import {InMemoryCache} from "apollo-cache-inmemory";
import {ApolloError} from "apollo-client";
import {catchError} from "rxjs/operators";
import {from} from "rxjs/observable/from";

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

  companies(companyName: string): Observable<CompanyInfo[]> {
    const query = gql`
    query CompaniesByText($companyName: String!) {
      companies(companyName: $companyName) {
        id
        name
      }
    }`;
    type T = {
      companies: CompanyInfo[]
    }
    type V = {
      companyName: string
    }
    return this.apollo
      .query<T, V>({
        query: query,
        variables: {companyName: companyName},
      })
      .pipe(
        catchError(this.error),
      )
      .map(value => value.data.companies);
  }

  reports(companyId: string): Observable<CompleteReport> {
    const query = gql`
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
          financialsNumbers {
            name
            value
          }
          riskDrivers {
            category
            numbers {
              name
              value
            }
          }
        }
      }
    }`;
    type T = {
      company: CompanyInfo
      creditReports: CreditReport[]
    }
    type V = {
      companyId: string
    }

    return this.apollo
      .query<T, V>({
        query: query,
        variables: {companyId: companyId},
      })
      .pipe(
        catchError(this.error),
      )
      .map(value => {
        return {company: value.data.company, creditReports: value.data.creditReports};
      });
  }

  private error(err: ApolloError) {
    // console.log(err.message)
    err.graphQLErrors.forEach(value => console.log(value));
    if (err.networkError) {
      console.log(err.networkError);
    }
    // console.log(err.extraInfo)
    return from([])
  }

}
