import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import {CompanyName, CompanyService} from './company.service';
import {ProfileService} from './profile.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchForm: FormControl = new FormControl();
  companies: Observable<CompanyName[]>;
  private searchText = new Subject<string>();

  constructor(private companyService: CompanyService, private profileService: ProfileService) {
  }

  ngOnInit() {
    this.companies = this.searchText
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(text => text ? this.companyService.search(text) : Observable.of<CompanyName[]>([]))
      .catch(error => {
        // TODO proper error control: if an error occurs, the loop should not stop
        console.log('error = ' + error);
        return Observable.of<CompanyName[]>([]);
      });
  }

  onNameSearch(text: string): void {
    this.searchText.next(text);
  }

  onReportSearch(text: string): void {
    if (text) {
      this.profileService.search(text);
    }
  }
}
