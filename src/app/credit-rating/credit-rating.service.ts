import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpLink} from "apollo-angular-link-http";
import {Apollo} from "apollo-angular";
import {InMemoryCache} from "apollo-cache-inmemory";
import gql from "graphql-tag";

import "rxjs/add/observable/of"

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

  companies(text: string): Observable<CompanyInfo[]> {
    const query = gql`
    query CompaniesByText($text: String!) {
      companies(text: $text) {
        id
        name
      }
    }`;
    type T = {
      companies: CompanyInfo[]
    }
    type V = {
      text: string
    }
    return this.apollo
      .query<T, V>({
        query: query,
        variables: {text: text}
      })
      .map(value => value.data.companies);
  }

  rating(text: string): Observable<CreditReport> {
    this.apollo.query({query: gql`{ rating(id: 1) { id rating companyName } }`}).subscribe(console.log);
    return Observable.of<CreditReport>();
  }

}
