import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

import {NavigationComponent} from './navigation.component';

import {AuthenticationService} from '../../services/authentication.service';

import {createMockAuthenticationService, MockComponent} from '../../../testing/mock-stub';

describe('NavigationComponent', () => {
  let component: NavigationComponent;
  let fixture: ComponentFixture<NavigationComponent>;
  let mockAuthenticationService;

  beforeEach(async(() => {
    mockAuthenticationService = createMockAuthenticationService();

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,

        MatButtonModule,
        MatIconModule,
        MatToolbarModule,

        RouterTestingModule.withRoutes([
          {path: 'about', component: MockComponent},
          {path: 'dashboard', component: MockComponent},
          {path: 'login', component: MockComponent},
          {path: 'logout', component: MockComponent},
          {path: '', component: MockComponent},
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
