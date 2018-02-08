import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

import {NavigationComponent} from './navigation.component';
import {AuthenticationService} from '../../authentication/authentication.service';

// import {createMockAuthenticationService, FakeComponent} from '../../../testing/mock-stub.spec';

export class FakeComponent {
}

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let mockAuthenticationService;

  beforeEach(async(() => {
    mockAuthenticationService = jasmine.createSpyObj<AuthenticationService>(
      'authenticationService',
      ['login', 'logout', 'isAuthenticated', 'handleAuthentication', 'user']);

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        RouterTestingModule.withRoutes([
          {path: 'about', component: FakeComponent},
          {path: 'dashboard', component: FakeComponent},
          {path: '', component: FakeComponent},
        ]),
      ],
      declarations: [NavigationComponent],
      providers: [
        {provide: AuthenticationService, useValue: mockAuthenticationService},
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
