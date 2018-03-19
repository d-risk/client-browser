import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialsReportComponent } from './financials-report.component';

describe('FinancialsReportComponent', () => {
  let component: FinancialsReportComponent;
  let fixture: ComponentFixture<FinancialsReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialsReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
