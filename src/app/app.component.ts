import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {AuthenticationService} from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private title: Title, private authenticationService: AuthenticationService) {
    this.title.setTitle('D-Risk');
    authenticationService.handleAuthentication();
  }
}
