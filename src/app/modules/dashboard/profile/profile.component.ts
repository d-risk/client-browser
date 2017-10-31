import {Component, Input, OnInit} from '@angular/core';
import {CompanyProfile, ProfileSearchService} from '../company-search/profile-search.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() profile: CompanyProfile;

  constructor(private companyReportSearchService: ProfileSearchService) {
  }

  ngOnInit() {
  }

}
