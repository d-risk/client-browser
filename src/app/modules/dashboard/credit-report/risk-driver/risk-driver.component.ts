import {Component, Input} from '@angular/core';

import {RiskDriver} from "../../../../credit-report/credit-report";

@Component({
  selector: 'app-risk-driver',
  templateUrl: './risk-driver.component.html',
  styleUrls: ['./risk-driver.component.css']
})
export class RiskDriverComponent {

  displayOrder = ['ratio', 'latest', 'maximum', 'minimum', 'average'];

  @Input() riskDrivers: RiskDriver[];

}
