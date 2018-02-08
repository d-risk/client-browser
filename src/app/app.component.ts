import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';

import {AppConfig} from "./configuration/app.config";
import {AuthenticationService} from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private title: Title, private config: AppConfig, private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.title.setTitle(this.config.get("title"));
    this.authenticationService.handleAuthentication();
  }

}
