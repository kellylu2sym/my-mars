import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SettingsComponent} from './settings.component';
import {MaintenanceComponent} from './maintenance.component';
import {SystemComponent} from './system.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'setting', component: SettingsComponent },
  { path: 'system', component: SystemComponent },
  { path: 'maintenance',     component: MaintenanceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
