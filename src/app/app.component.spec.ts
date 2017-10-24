import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';

import {AppComponent} from './app.component';
import {createMockComponent, FakeComponent} from '../testing/mock-stub';

describe('AppComponent', () => {
  beforeEach(async(() => {
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
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
