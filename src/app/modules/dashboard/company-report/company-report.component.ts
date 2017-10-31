import {Component, OnInit} from '@angular/core';
import {CompanyReportSearchService} from '../company-search/company-report-search.service';

@Component({
  selector: 'app-company-report-search',
  templateUrl: './company-report.component.html',
  styleUrls: ['./company-report.component.css']
})
export class CompanyReportComponent implements OnInit {

  constructor(private companyReportSearchService: CompanyReportSearchService) {
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
