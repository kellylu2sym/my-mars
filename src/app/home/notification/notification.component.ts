import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  template: '<div class="row">' +
  '    <div class="col-lg-5 col-md-8 col-sm-12 col-xs-12">\n' +
  '        <div class="card">\n' +
  '            <div class="card-header">\n' +
  '                Notification' +
  '            </div>' +
  '        </div>\n' +
  '    </div>\n' +
  '</div>'
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
