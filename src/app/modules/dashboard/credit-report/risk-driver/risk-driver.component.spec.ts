import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDriverComponent } from './risk-driver.component';

describe('RiskDriverComponent', () => {
  let component: RiskDriverComponent;
  let fixture: ComponentFixture<RiskDriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskDriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
