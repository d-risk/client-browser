import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {createMockAuthenticationService, createMockComponent, FakeComponent} from '../testing/mock-stub.spec';
import {AuthenticationService} from './authentication/authentication.service';

describe('AppComponent', () => {
  let mockAuthenticationService: AuthenticationService;

  beforeEach(async(() => {
    mockAuthenticationService = createMockAuthenticationService();

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          {path: '**', component: FakeComponent},
        ]),
      ],
      declarations: [
        AppComponent,
        createMockComponent({selector: 'app-navigation'}),
        createMockComponent({selector: 'app-footer'}),
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
