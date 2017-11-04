import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  year(): string {
    const year = new Date().getFullYear();
    return year > 2017 ? `2017 - ${year}` : '2017';
  }

}
