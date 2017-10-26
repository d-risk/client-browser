import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {Company, CompanyNameSearchService} from './company-name-search.service';

@Component({
  selector: 'app-company-name-search',
  templateUrl: './company-name-search.component.html',
  styleUrls: ['./company-name-search.component.css']
})
export class CompanyNameSearchComponent implements OnInit {
  searchForm: FormControl = new FormControl();
  companies: Observable<Company[]>;
  private searchText = new Subject<string>();

  constructor(private companySearchService: CompanyNameSearchService) {
  }

  ngOnInit() {
    this.companies = this.searchText
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(text => text ? this.companySearchService.search(text) : Observable.of<Company[]>([]))
      .catch(error => {
        // TODO proper error logging
        console.log(error);
        return Observable.of<Company[]>([]);
      });
  }

  search(text: string): void {
    this.searchText.next(text);
  }
}
