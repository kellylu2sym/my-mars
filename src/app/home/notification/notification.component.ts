import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

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
