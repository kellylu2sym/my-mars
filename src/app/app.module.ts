import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import {HomeComponent} from './home/home.component';
import {SettingsComponent} from './settings.component';
import {SystemComponent} from './system.component';
import {MaintenanceComponent} from './maintenance.component';
import { SystemCapacityComponent } from './system-capacity/system-capacity.component';
import { SystemComplianceComponent } from './home/system-compliance/system-compliance.component';
import { SystemHealthComponent } from './home/system-health/system-health.component';
import { SystemUtilizationComponent } from './home/system-utilization/system-utilization.component';
import { RencentActivityComponent } from './home/rencent-activity/rencent-activity.component';
import { NotificationComponent } from './home/notification/notification.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SystemComponent,
    SettingsComponent,
    MaintenanceComponent,
    SystemCapacityComponent,
    SystemComplianceComponent,
    SystemHealthComponent,
    SystemUtilizationComponent,
    RencentActivityComponent,
    NotificationComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule.forRoot(),
    BrowserModule, NgxChartsModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
