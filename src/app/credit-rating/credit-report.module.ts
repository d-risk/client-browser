import {NgModule} from '@angular/core';
import {ApolloModule} from "apollo-angular";
import {HttpLinkModule} from "apollo-angular-link-http";

import {CreditReportService} from "./credit-report.service";

@NgModule({
  imports: [
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [CreditReportService]
})
export class CreditReportModule {
}
