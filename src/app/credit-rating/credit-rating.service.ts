import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpLink} from "apollo-angular-link-http";
import {Apollo} from "apollo-angular";
import {InMemoryCache} from "apollo-cache-inmemory";
import {DefaultOptions} from "apollo-client/ApolloClient";
import {ApolloError} from "apollo-client";
import {catchError, map} from "rxjs/operators";
import {from} from "rxjs/observable/from";

import gql from "graphql-tag";

import {AppConfig} from "../configuration/app.config";
import {CompanyInfo} from "./company-info";
import {CreditReport} from "./credit-report";

@Injectable()
export class CreditRatingService {

  constructor(private config: AppConfig, private apollo: Apollo, private httpLink: HttpLink) {
    const link = httpLink.create({
      uri: config.get("api.credit_rating_service.uri"),
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

  reports(companyId: string): Observable<CreditReport[]> {
    const query = gql`
    query CreditReportsByCompanyId($companyId: UUID!) {
      company(id: $companyId) {
        id
        name
        industry
        description
      }
      reports(companyId: $companyId) {
        companyId
        creditRating {
          score
          text
          date
        }
        riskDrivers {
          name
          latest
          maximum
          minimum
          average
        }
      }
    }`;
    type T = {
      company: CompanyInfo
      reports: CreditReport[]
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
      .map(value => value.data.reports);
  }

  private error(err: ApolloError) {
    // console.log(err.message)
    err.graphQLErrors.forEach(value => console.log(value))
    if (err.networkError) {
      console.log(err.networkError)
    }
    // console.log(err.extraInfo)
    return from([])
  }

}
