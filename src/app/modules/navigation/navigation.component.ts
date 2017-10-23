import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthenticationService} from '../../services/authentication.service';

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

  isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/logout'])
      .then()
      .catch();
  }
}
