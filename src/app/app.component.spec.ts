import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {AuthenticationService} from './authentication/authentication.service';
import {Component} from "@angular/core";

@Component({
  selector: 'app-navigation',
  template: '',
})
export class MockNavigationComponent  {
}

@Component({
  selector: 'app-footer',
  template: '',
})
export class MockFooterComponent  {
}

describe('AppComponent', () => {
  let mockAuthenticationService: AuthenticationService;

  beforeEach(async(() => {
    mockAuthenticationService = jasmine.createSpyObj<AuthenticationService>(
      'authenticationService',
      ['login', 'logout', 'isAuthenticated', 'handleAuthentication', 'user']);

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: '**', component: null},
        ]),
      ],
      declarations: [
        AppComponent,
        MockNavigationComponent,
        MockFooterComponent,
      ],
      providers: [
        {provide: AuthenticationService, useValue: mockAuthenticationService}
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
