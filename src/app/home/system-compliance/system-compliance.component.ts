import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';

@Component({
  selector: 'app-system-compliance',
  templateUrl: './system-compliance.component.html',
  styleUrls: ['./system-compliance.component.css'],
})
export class SystemComplianceComponent implements OnInit {
  single: any[];
  multi: any[];

  view: any[] = [100, 60];

  colorScheme = {
    domain: ['#green', 'red', 'yellow']
  }
  // line, area
  autoScale = true;
  constructor() {
    Object.assign(this, {single, multi});
  }

  ngOnInit() {
  }


}
