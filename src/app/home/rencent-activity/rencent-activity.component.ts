import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
@Component({
  selector: 'app-rencent-activity',
  templateUrl: './rencent-activity.component.html',
  styleUrls: ['./rencent-activity.component.css']
})
export class RencentActivityComponent implements OnInit {

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
