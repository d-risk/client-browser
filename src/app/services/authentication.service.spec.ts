import {TestBed, inject} from '@angular/core/testing';

import {AuthenticationService} from './authentication.service';
import {HttpClientTestingModule, HttpTestingController, RequestMatch} from '@angular/common/http/testing';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {printLine} from 'tslint/lib/verify/lines';
import any = jasmine.any;
import {Token} from './authentication.service';

describe('AuthenticationService (TestBed)', () => {
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

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthenticationService]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('#login() should work', inject(
    [AuthenticationService, HttpTestingController],
    (service: AuthenticationService, httpMock: HttpTestingController) => {
      service.login('test username', 'test password')
        .subscribe((response) => {
          // expect(response).toBeTruthy();
          // expect(response.body).toBeTruthy();
          // expect(response.body).not.toBe(JSON.stringify({token: 'test token'}));
        });

      httpMock.expectOne((request: HttpRequest<any>) => {
        expect(request).toBeTruthy();
        expect(request.method).toBe('POST');
        expect(request.url).toBe('/api/authentications');
        expect(request.body).toBe(JSON.stringify({username: 'test username', password: 'test password'}));
        return true;
      }, 'a correct HttpRequest')
        .flush(JSON.stringify({token: 'test token'}));
      httpMock.verify();
    }));
});
