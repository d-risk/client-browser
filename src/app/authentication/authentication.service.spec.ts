import {inject, TestBed} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {createMockAuth0Factory} from '../../testing/mock-stub.spec';
import {Auth0Factory} from './auth0.factory';

describe('AuthenticationService', () => {
  let factory: Auth0Factory;

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);

    factory = createMockAuth0Factory();

    TestBed.configureTestingModule({
      providers: [
        AuthenticationService,
        {provide: Auth0Factory, useValue: factory}
      ]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  // it('#login() should work', inject(
  //   [AuthenticationService],
  //   (service: AuthenticationService) => {
  //     service.login();
  //   }));
});
