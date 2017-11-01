import {Component, Input, OnInit} from '@angular/core';
import {CompanyProfile, ProfileService} from '../search/profile.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

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
