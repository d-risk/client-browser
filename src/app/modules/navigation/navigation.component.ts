import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['']);
  }

  isAuthenticated() {
    return this.authenticationService.isAuthenticated();
  }

  name(): string {
    return this.authenticationService.user.name;
  }
}
