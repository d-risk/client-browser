import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule, MatTabsModule} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {ProfileComponent} from './profile.component';
import {ProfileService} from '../search/profile.service';
import {createMockProfileService} from '../../../../testing/mock-stub.spec';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let mockProfileService: ProfileService;

  beforeEach(async(() => {
    mockProfileService = createMockProfileService();

    TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,

        MatCardModule,
        MatTabsModule,

        NgxChartsModule,
      ],
      declarations: [ProfileComponent],
      providers: [
        {provide: ProfileService, useValue: mockProfileService}
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
