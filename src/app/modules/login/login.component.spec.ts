import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

import {LoginComponent} from './login.component';
import {SignUpComponent} from '../sign-up/sign-up.component';
import {ResetPasswordComponent} from '../reset-password/reset-password.component';

import {AuthenticationService} from '../../services/authentication.service';

import createSpyObj = jasmine.createSpyObj;

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockAuthenticationService;

  beforeEach(async(() => {
    mockAuthenticationService = createSpyObj<AuthenticationService>('authenticationService', ['login', 'logout', 'isAuthenticated']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        NoopAnimationsModule,

        MatButtonModule,
        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,

        RouterTestingModule.withRoutes([
          {path: 'reset', component: ResetPasswordComponent},
          {path: 'signup', component: SignUpComponent},
        ]),
      ],
      declarations: [LoginComponent, ResetPasswordComponent, SignUpComponent],
      providers: [
        {provide: AuthenticationService, useValue: mockAuthenticationService},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
