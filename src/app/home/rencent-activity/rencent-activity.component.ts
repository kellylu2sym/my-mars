import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rencent-activity',
  templateUrl: './rencent-activity.component.html',
  styleUrls: ['./rencent-activity.component.css'],
  template: '<div class="row">' +
  '    <div class="col-lg-5 col-md-8 col-sm-12 col-xs-12">\n' +
  '        <div class="card">\n' +
  '            <div class="card-header">\n' +
  '                Recent Activity' +
  '            </div>' +
  '        </div>\n' +
  '    </div>\n' +
  '</div>'
})
export class RencentActivityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
