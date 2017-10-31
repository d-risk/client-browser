import {Component, Input, OnInit} from '@angular/core';
import {CompanyProfile, ProfileService} from '../search/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile: CompanyProfile;

  constructor(private profileService: ProfileService) {
  }

  ngOnInit() {
  }

}
