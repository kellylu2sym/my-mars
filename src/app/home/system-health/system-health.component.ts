import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
@Component({
  selector: 'app-system-health',
  templateUrl: './system-health.component.html',
  styleUrls: ['./system-health.component.css']
})
export class SystemHealthComponent implements OnInit {

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
