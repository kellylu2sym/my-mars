import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  template: '<app-system-capacity></app-system-capacity>' +
  '<button class="btn btn-primary btn-sm">Create Cluster</button>' +
  '<button class="btn btn-primary btn-sm">Expand Cluster</button>' +
  '<div class= "container-fluid">' +
  '<div class="row">' +
  '<div class="col-lg-4 compliance"><app-system-compliance></app-system-compliance></div>' +
  '<div class="col-lg-4 utilization"><app-system-utilization></app-system-utilization></div>' +
  '<div class="col-lg-4 activity"><app-rencent-activity></app-rencent-activity></div>' +
  '<div class="col-lg-4 health"><app-system-health></app-system-health></div>' +
  '<div class="col-lg-4"></div>' +
  '<div class="col-lg-4 notification"><app-notification></app-notification></div>' +
    '</div>' +
  '</div>'
})
export class HomeComponent { }
