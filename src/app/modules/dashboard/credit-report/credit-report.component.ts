import {Component, Input, OnInit} from '@angular/core';
import {CompanyProfile} from '../../../credit-rating/profile.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './credit-report.component.html',
  styleUrls: ['./credit-report.component.css']
})
export class CreditReportComponent implements OnInit {

  @Input() profile$: Observable<CompanyProfile>;
  profile: CompanyProfile;

  constructor() {
  }

  ngOnInit() {
    this.profile$
      .subscribe(p => {
        this.profile = p;
      });
  }

}
