import {Component, Input, OnInit} from '@angular/core';
import {CompanyProfile, CompanyProfileSearchService} from '../company-search/company-profile-search.service';

@Component({
  selector: 'app-company-report-search',
  templateUrl: './company-report.component.html',
  styleUrls: ['./company-report.component.css']
})
export class CompanyReportComponent implements OnInit {

  @Input() profile: CompanyProfile;

  constructor(private companyReportSearchService: CompanyProfileSearchService) {
  }

  ngOnInit() {
  }

}
