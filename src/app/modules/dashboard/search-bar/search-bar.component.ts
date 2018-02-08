import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {CompanyInfo} from "../../../credit-rating/company-info";
import {CreditReport} from '../../../credit-rating/credit-report';
import {CreditRatingService} from "../../../credit-rating/credit-rating.service";

@Component({
  selector: 'app-search',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchForm: FormControl = new FormControl();
  companies: Observable<CompanyInfo[]>;
  profile: Observable<CreditReport>;
  private companyText = new Subject<string>();
  private profileText = new Subject<string>();

  constructor(private creditRatingService: CreditRatingService) {
  }

  ngOnInit() {
    this.companies = this.companyText
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(text => text ? this.creditRatingService.companies(text) : Observable.of<CompanyInfo[]>([]))
      .catch(error => {
        // TODO proper error control: if an error occurs, the loop should not stop
        console.log('error = ' + error);
        return Observable.of<CompanyInfo[]>([]);
      });
    this.profile = this.profileText
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(text => text ? this.creditRatingService.rating(text) : Observable.of<CreditReport>())
      .catch(error => {
        // TODO proper error control: if an error occurs, the loop should not stop
        console.log('error = ' + error);
        return Observable.of<CreditReport>();
      });
  }

  onNameSearch(text: string): void {
    this.companyText.next(text);
  }

  onReportSearch(text: string): void {
    this.profileText.next(text);
  }
}
