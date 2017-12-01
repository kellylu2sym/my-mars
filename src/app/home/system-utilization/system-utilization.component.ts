import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';

@Component({
  selector: 'app-system-utilization',
  templateUrl: './system-utilization.component.html',
  styleUrls: ['./system-utilization.component.css']
})
export class SystemUtilizationComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [120, 100];

  colorScheme = {
    domain: ['green', 'red', 'yellow']
  }
  // line, area
  autoScale = true;
  constructor() {
    Object.assign(this, {single, multi});
  }

  ngOnInit() {
  }

}
