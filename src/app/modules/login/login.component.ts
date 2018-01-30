import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {AuthenticationService} from "../../authentication/authentication.service";

@Component({
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit() {
    setTimeout(() => {
      console.log('login: authenticated: ' + this.authenticationService.isAuthenticated());
      if (this.authenticationService.isAuthenticated()) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate([''])
      }
    }, 2000);
  }
}
