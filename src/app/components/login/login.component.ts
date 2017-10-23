import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {User} from '../../user';

import {AuthenticationService} from '../../authentication.service';

@Component({
  // selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {id: '', username: '', password: '', token: ''};
  authenticating = false;
  returnUrl: string;
  loginForm: FormGroup;
  hide = true;

  constructor(private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: [false],
    });
  }

  ngOnInit() {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onLogin() {
    this.authenticating = true;
    this.authenticationService.login(this.user.username, this.user.password)
      .subscribe(
        next => this.router.navigate([this.returnUrl]),
        error => this.authenticating = false);
  }

  onHide() {
    this.hide = !this.hide;
  }

}
