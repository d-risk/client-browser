import {Component, OnInit} from '@angular/core';

import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
  }

  isAuthenticated() {
    return this.authenticationService.isAuthenticated();
  }

  name(): string {
    return this.authenticationService.user.name;
  }
}
