import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';

import {LoginComponent} from './login.component';
import {MaterialDesignModule} from '../../material-design/material-design.module';
import {AuthenticationService} from '../../authentication.service';
import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {SignUpComponent} from '../sign-up/sign-up.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          {path: '/reset', component: LoginComponent},
          {path: '/signup', component: SignUpComponent},
        ]),

        MatCardModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatIconModule,
        MatProgressSpinnerModule
      ],
      providers: [
        {provides: AuthenticationService, useClass: AuthenticationService},
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
