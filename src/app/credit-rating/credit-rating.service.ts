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

  companies(name: string): Observable<CompanyInfo[]> {
    const query = gql`
    query CompaniesByText($name: String!) {
      companies(text: $name) {
        id
        name
      }
    }`;
    type T = {
      companies: CompanyInfo[]
    }
    type V = {
      name: string
    }
    return this.apollo
      .query<T, V>({
        query: query,
        variables: {name: name},
      })
      .pipe(
        catchError(this.error),
      )
      .map(value => value.data.companies);
  }

  reports(id: string): Observable<CreditReport[]> {
    const query = gql`
    query ReportByCompanyId($id: Int!) {
      ratings(id: $id) {
        id
        creditRating
        creditRatingDate
        companyName
      }
    }`;
    type T = {
      ratings: CreditReport[]
    }
    type V = {
      id: number
    }

    return this.apollo
      .query<T, V>({
        query: query,
        variables: {id: parseInt(id)},
      })
      .pipe(
        catchError(this.error),
      )
      .map(value => value.data.ratings);
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
