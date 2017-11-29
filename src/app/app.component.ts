import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
      <div class="main-container">
        <header class="header header-6">
          <span>{{title}}</span>
        </header>
        <nav>
          <a routerLink="/home" routerLinkActive="active">Home</a>
          <a routerLink="/system" routerLinkActive="active">Systems</a>
          <a routerLink="/maintenance" routerLinkActive="active">Maintenance</a>
          <a routerLink="/settings" routerLinkActive="active">Settings</a>
          <router-outlet></router-outlet>
        </nav>
      </div>
  `
})
export class AppComponent {
  title = 'VxOps Edge';
}
