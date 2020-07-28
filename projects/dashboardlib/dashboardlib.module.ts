import { MatToolbarModule } from '@angular/material/toolbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DashboardlibComponent } from './dashboardlib.component';
import { CodedisplayComponent } from './codedisplay/codedisplay.component';

@NgModule({
  declarations: [DashboardlibComponent, CodedisplayComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule
  ],
  exports: [DashboardlibComponent]
})
export class DashboardlibModule { }
