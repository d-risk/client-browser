import {NgModule} from '@angular/core';
import {ApolloModule} from "apollo-angular";
import {HttpLinkModule} from "apollo-angular-link-http";

import {CreditRatingService} from "./credit-rating.service";

@NgModule({
  imports: [
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [CreditRatingService]
})
export class CreditRatingModule {
}
